import { defineConfig } from "@tanstack/start/config";
import { cloudflare } from "unenv";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    preset: "cloudflare-pages",
    unenv: cloudflare,
    rollupConfig: {
      external: ["node:async_hooks"],
    },
  },
  vite: {
    build: {
      target: "esnext",
    },
    esbuild: {
      target: "esnext",
    },
    define: await proxyCloudflareEnv(),
    plugins: [
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
    ],
  },
});

async function proxyCloudflareEnv() {
  if (isInCloudflareCI()) return undefined;

  const env = await getCloudflareProxyEnv();

  const viteDefine = Object.fromEntries(
    Object.entries(env)
      .filter(([key]) => key.startsWith("VITE_"))
      .map(([key, value]) => [`import.meta.env.${key}`, `"${value}"`]),
  );

  return viteDefine;
}

function isInCloudflareCI() {
  return process.env.CF_PAGES_COMMIT_SHA !== undefined;
}

async function getCloudflareProxyEnv() {
  const { getPlatformProxy } = await import("wrangler");

  const proxy = await getPlatformProxy({
    environment: process.env.npm_lifecycle_event === "build" ? "production" : "development",
  });

  const cloudflareEnv = proxy.env;

  await proxy.dispose();

  return cloudflareEnv;
}
