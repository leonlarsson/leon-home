import { defineMiddleware } from "vinxi/http";

import type { CloudflareEnv } from "./libs/cloudflare";

export default defineMiddleware({
  onRequest: async (event) => {
    if (import.meta.env.DEV) {
      const { getPlatformProxy } = await import("wrangler");

      const proxy = await getPlatformProxy<CloudflareEnv>();

      event.context.cloudflare = proxy;

      // Set timezone to UTC
      process.env.TZ = "UTC";

      if (process.env.npm_lifecycle_event === "build") {
        await proxy.dispose();
      }
    }
  },
});
