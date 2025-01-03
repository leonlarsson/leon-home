import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { createServerFn } from "@tanstack/start";
import queryString from "query-string";
import { getEvent } from "vinxi/http";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const getAccessTokenFn = async () => {
  const event = getEvent();
  const basic = Buffer.from(
    `${event.context.cloudflare.env.SPOTIFY_ID}:${event.context.cloudflare.env.SPOTIFY_SECRET}`,
  ).toString("base64");
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: queryString.stringify({
      grant_type: "refresh_token",
      refresh_token: event.context.cloudflare.env.SPOTIFY_REFRESH_TOKEN,
    }),
  });

  return response.json();
};

const getSpotifySdk = async () => {
  const event = getEvent();
  const accessToken = await getAccessTokenFn();
  return SpotifyApi.withAccessToken(event.context.cloudflare.env.SPOTIFY_ID ?? "", accessToken);
};

// Server function to get the currently playing track
// Only returns the playback state if the currently playing item is a track
export const $getCurrentlyPlayingTrack = createServerFn().handler(async () => {
  const playbackState = await (await getSpotifySdk()).player.getCurrentlyPlayingTrack();
  if (playbackState?.currently_playing_type !== "track") {
    return { playbackState: null };
  }

  return { playbackState };
});

export const $getTopTracks = createServerFn()
  .validator((range: "short_term" | "medium_term" | "long_term") => range)
  .handler(async (ctx) => {
    return await (await getSpotifySdk()).currentUser.topItems("tracks", ctx.data);
  });

export const $getTopArtists = createServerFn()
  .validator((range: "short_term" | "medium_term" | "long_term") => range)
  .handler(async (ctx) => {
    console.time("getTopArtistsServerFn");
    const result = await (await getSpotifySdk()).currentUser.topItems("artists", ctx.data);
    console.timeEnd("getTopArtistsServerFn");

    return result;
  });
