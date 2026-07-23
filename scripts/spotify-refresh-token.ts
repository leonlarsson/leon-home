// One-shot Spotify refresh-token generator.
//
// Spotify refresh tokens expire after 6 months (policy effective 2026-07-20),
// so the SPOTIFY_REFRESH_TOKEN in .env needs to be regenerated periodically.
//
// Usage (from the project root):
//   pnpm spotify:token
//   # or: node scripts/spotify-refresh-token.ts

import fs from "node:fs";
import http from "node:http";
import { URL } from "node:url";

const REDIRECT_URI = "http://127.0.0.1:8888/callback";
// Scopes required by src/features/music/functions/index.ts
const SCOPES = ["user-read-currently-playing", "user-top-read"].join(" ");

// --- load .env ---
const env: Record<string, string> = Object.fromEntries(
  fs
    .readFileSync(".env", "utf8")
    .split(/\r?\n/)
    .filter((l) => l && !l.startsWith("#") && l.includes("="))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    }),
);

const CLIENT_ID = env.SPOTIFY_ID;
const CLIENT_SECRET = env.SPOTIFY_SECRET;
if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("Missing SPOTIFY_ID or SPOTIFY_SECRET in .env");
  process.exit(1);
}

const authUrl = new URL("https://accounts.spotify.com/authorize");
authUrl.search = new URLSearchParams({
  response_type: "code",
  client_id: CLIENT_ID,
  scope: SCOPES,
  redirect_uri: REDIRECT_URI,
  show_dialog: "true",
}).toString();

const printNextSteps = (refreshToken: string) => {
  console.log("\n=== SUCCESS — new refresh token minted ===\n");
  console.log("Next steps:\n");
  console.log("1. Replace the SPOTIFY_REFRESH_TOKEN line in your local .env with:\n");
  console.log(`   SPOTIFY_REFRESH_TOKEN=${refreshToken}\n`);
  console.log("2. Update the deployed Cloudflare Worker secret:\n");
  console.log(`   echo "${refreshToken}" | wrangler secret put SPOTIFY_REFRESH_TOKEN\n`);
  console.log("   (or run `wrangler secret put SPOTIFY_REFRESH_TOKEN` and paste the value when prompted)\n");
  console.log("3. Re-run this script (`pnpm spotify:token`) whenever the token expires (~every 6 months).\n");
};

const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {
  const url = new URL(req.url ?? "/", REDIRECT_URI);
  if (url.pathname !== "/callback") {
    res.writeHead(404).end();
    return;
  }
  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error");
  if (error || !code) {
    res.writeHead(400, { "Content-Type": "text/plain" }).end(`Auth failed: ${error ?? "no code"}`);
    server.close();
    return;
  }

  const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: REDIRECT_URI,
    }).toString(),
  });

  const data = (await tokenRes.json()) as { refresh_token?: string };
  if (!data.refresh_token) {
    res.writeHead(500, { "Content-Type": "text/plain" }).end(`No refresh_token returned: ${JSON.stringify(data)}`);
    console.error(data);
    server.close();
    return;
  }

  res
    .writeHead(200, { "Content-Type": "text/plain" })
    .end("Success! You can close this tab and return to the terminal.");
  printNextSteps(data.refresh_token);
  server.close();
});

server.listen(8888, () => {
  console.log("\n1. Ensure this redirect URI is registered in your Spotify app dashboard:");
  console.log(`\n   ${REDIRECT_URI}\n`);
  console.log("2. Open this URL in your browser and approve:\n");
  console.log(`   ${authUrl.toString()}\n`);
  console.log("Waiting for the callback on http://127.0.0.1:8888 ...");
});
