import { defineConfig } from "@tanstack/start/config";
import { cloudflare } from "unenv";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    preset: "cloudflare-pages",
    unenv: cloudflare,
  },
  vite: {
    build: {
      target: "esnext",
    },
    esbuild: {
      target: "esnext",
    },
    plugins: [
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
    ],
  },
});
