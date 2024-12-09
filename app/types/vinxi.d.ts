import type { PlatformProxy } from "wrangler";

import type { CloudflareEnv } from "../libs/cloudflare";

declare module "vinxi/http" {
  interface H3EventContext {
    cloudflare: PlatformProxy<CloudflareEnv>;
  }
}
