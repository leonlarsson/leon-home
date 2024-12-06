import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import queryString from "query-string";
import { getEvent } from "vinxi/http";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

export const getAccessTokenFn = async () => {
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

export const getSpotifySdk = async () => {
  const event = getEvent();
  const accessToken = await getAccessTokenFn();
  return SpotifyApi.withAccessToken(event.context.cloudflare.env.SPOTIFY_ID ?? "", accessToken);
};
