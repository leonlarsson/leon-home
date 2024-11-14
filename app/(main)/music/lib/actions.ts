"use server";

import { unstable_cache } from "next/cache";
import querystring from "querystring";

const client_id = process.env.SPOTIFY_ID;
const client_secret = process.env.SPOTIFY_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export const getTopTracks = unstable_cache(
  async (range: string) => {
    const { access_token } = await getAccessToken();

    const url = new URL("https://api.spotify.com/v1/me/top/tracks");

    // Excluding medium_term as it's the default
    const validRange = ["short_term", "long_term"].includes(range);
    if (validRange) url.searchParams.append("time_range", range);

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    return res.ok
      ? ((await res.json()) as SpotifyApi.UsersTopTracksResponse)
      : null;
  },
  [],
  { revalidate: 86_400 },
);

export const getTopArtists = unstable_cache(
  async (range: string) => {
    const { access_token } = await getAccessToken();

    const url = new URL("https://api.spotify.com/v1/me/top/artists?limit=30");

    // Excluding medium_term as it's the default
    const validRange = ["short_term", "long_term"].includes(range);
    if (validRange) url.searchParams.append("time_range", range);

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    return res.ok
      ? ((await res.json()) as SpotifyApi.UsersTopArtistsResponse)
      : null;
  },
  [],
  { revalidate: 86_400 },
);

export const getCurrentlyPlaying = async () => {
  const { access_token } = await getAccessToken();

  const res = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  );

  // Handle no track playing
  if (res.status === 204) return null;

  return res.ok
    ? ((await res.json()) as SpotifyApi.CurrentlyPlayingObject)
    : null;
};
