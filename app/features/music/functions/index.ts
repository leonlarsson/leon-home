import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { createServerFn } from "@tanstack/start";
import queryString from "query-string";
import { setResponseStatus } from "vinxi/http";

const client_id = process.env.SPOTIFY_ID;
const client_secret = process.env.SPOTIFY_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const spotifySdk = SpotifyApi.withAccessToken(client_id ?? "", client_secret ?? "");

export const getAccessToken = createServerFn({ method: "POST" }).handler(async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: queryString.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
    // cache: "no-cache",
  });

  return response.json();
});

export const getTopTracks = async (range: string) =>
  createServerFn().handler(async () => {
    const tracks = await spotifySdk.currentUser.topItems("tracks", range as "short_term" | "medium_term" | "long_term");
    return tracks;
  });

export const getTopArtists = async (range: string) =>
  createServerFn().handler(async () => {
    const artists = await spotifySdk.currentUser.topItems(
      "artists",
      range as "short_term" | "medium_term" | "long_term",
    );
    return artists.items;
  });

export const getCurrentlyPlaying = createServerFn({ method: "GET" }).handler(async () => {
  const currentlyPlaying = await spotifySdk.player.getCurrentlyPlayingTrack();
  return currentlyPlaying;
});
