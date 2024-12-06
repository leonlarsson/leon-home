import { z } from "zod";
import { getCloudflareProxyEnv, isInCloudflareCI } from "./cloudflare";

const PUBLIC_ENV_PREFIX = "VITE_" as const;

// https://developers.cloudflare.com/workers/configuration/environment-variables/

// Public environment variables should be defined in the `wrangler.toml` file
const publicSchema = createEnvSchema("Public", {});

// Private environment variables should be defined in the `.dev.vars` file or cloudflare dashboard
const privateSchema = createEnvSchema("Private", {
  TURSO_URL: z.string(),
  TURSO_AUTH_TOKEN: z.string(),
  SPOTIFY_ID: z.string(),
  SPOTIFY_SECRET: z.string(),
  SPOTIFY_REFRESH_TOKEN: z.string(),
});

const envSchema = z.object({
  ...publicSchema.shape,
  ...privateSchema.shape,
});

// you should only call this function in app.config.ts
async function parseEnv() {
  let result: ReturnType<typeof envSchema.safeParse>;

  if (isInCloudflareCI()) {
    result = envSchema.safeParse(process.env);
  } else {
    result = envSchema.safeParse(await getCloudflareProxyEnv());
  }

  if (result.error) {
    console.log(result.error.message);

    throw new Error("Invalid environment variables");
  }

  const total = Object.keys(result.data).length;

  console.log(`Environment variables parsed successfully (${total} variables)`);
}

function createEnvSchema<Shape extends z.ZodRawShape>(type: "Public" | "Private", shape: Shape) {
  for (const key in shape) {
    if (type === "Public" && !key.startsWith(PUBLIC_ENV_PREFIX)) {
      throw new Error(`Public environment variables must start with "${PUBLIC_ENV_PREFIX}", got "${key}"`);
    }

    if (type === "Private" && key.startsWith(PUBLIC_ENV_PREFIX)) {
      throw new Error(`Private environment variables must not start with "${PUBLIC_ENV_PREFIX}", got "${key}"`);
    }
  }

  return z.object(shape);
}

type ViteBuiltInEnv = {
  MODE: "development" | "production" | "test";
  DEV: boolean;
  SSR: boolean;
  PROD: boolean;
  BASE_URL: string;
};

type Env = z.infer<typeof envSchema>;
type PublicEnv = z.infer<typeof publicSchema>;
type PrivateEnv = z.infer<typeof privateSchema>;

declare global {
  interface ImportMetaEnv extends PublicEnv, ViteBuiltInEnv {}

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export { parseEnv, PUBLIC_ENV_PREFIX };
export type { Env, PublicEnv, PrivateEnv };
