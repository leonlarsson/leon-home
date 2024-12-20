import type { D1Database, Request } from "@cloudflare/workers-types";
import type { Env } from "./env";

export type CloudflareEnv = Env & {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  CF_PAGES: "1";
  CF_PAGES_BRANCH: string;
  CF_PAGES_COMMIT_SHA: string;
  CF_PAGES_URL: string;
  DB: D1Database;
  GUESTBOOK_ADMIN_KEY: string;
};

export function isInCloudflareCI() {
  return process.env.CF_PAGES_COMMIT_SHA !== undefined;
}

export async function getCloudflareProxyEnv() {
  const { getPlatformProxy } = await import("wrangler");

  const proxy = await getPlatformProxy<CloudflareEnv>({
    environment: process.env.npm_lifecycle_event === "build" ? "production" : "development",
  });

  const cloudflareEnv = proxy.env;

  if (process.env.npm_lifecycle_event === "build") {
    await proxy.dispose();
  }

  return cloudflareEnv;
}
