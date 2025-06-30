import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig(async ({ mode }) => {
  return {
    server: {
      port: 3000,
    },
    plugins: [
      tsConfigPaths(),
      tanstackStart({
        target: "cloudflare-module",
      }),
    ],
  };
});
