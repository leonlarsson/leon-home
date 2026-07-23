import { getBindings } from "@/utils/bindings";
import { type AccessToken, SpotifyApi } from "@spotify/web-api-ts-sdk";
import { createServerFn } from "@tanstack/react-start";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const getAccessTokenFn = async (): Promise<AccessToken | null> => {
  const { SPOTIFY_ID, SPOTIFY_SECRET, SPOTIFY_REFRESH_TOKEN } = getBindings();
  const basic = Buffer.from(`${SPOTIFY_ID}:${SPOTIFY_SECRET}`).toString("base64");
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ grant_type: "refresh_token", refresh_token: SPOTIFY_REFRESH_TOKEN }).toString(),
  });

  // Refresh tokens expire after 6 months; regenerate via `pnpm spotify:token`.
  if (!response.ok) {
    console.error("Spotify token refresh failed:", response.status, await response.text());
    return null;
  }

  return response.json<AccessToken>();
};

const getSpotifySdk = async () => {
  const { SPOTIFY_ID } = getBindings();
  const accessToken = await getAccessTokenFn();
  if (!accessToken) return null;
  return SpotifyApi.withAccessToken(SPOTIFY_ID ?? "", accessToken);
};

// Server function to get the currently playing track
// Only returns the playback state if the currently playing item is a track
export const $getCurrentlyPlayingTrack = createServerFn().handler(async () => {
  try {
    const sdk = await getSpotifySdk();
    const playbackState = await sdk?.player.getCurrentlyPlayingTrack();
    if (playbackState?.currently_playing_type !== "track") {
      return { playbackState: null };
    }

    return { playbackState };
  } catch (error) {
    console.error("Spotify getCurrentlyPlayingTrack failed:", error);
    return { playbackState: null };
  }
});

export const $getTopTracks = createServerFn()
  .validator((range: "short_term" | "medium_term" | "long_term") => range)
  .handler(async (ctx) => {
    try {
      const sdk = await getSpotifySdk();
      if (!sdk) return { items: null };
      return await sdk.currentUser.topItems("tracks", ctx.data);
    } catch (error) {
      console.error("Spotify getTopTracks failed:", error);
      return { items: null };
    }
  });

export const $getTopArtists = createServerFn()
  .validator((range: "short_term" | "medium_term" | "long_term") => range)
  .handler(async (ctx) => {
    try {
      const sdk = await getSpotifySdk();
      if (!sdk) return { items: null };
      return await sdk.currentUser.topItems("artists", ctx.data);
    } catch (error) {
      console.error("Spotify getTopArtists failed:", error);
      return { items: null };
    }
  });
