import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { getEvent } from "vinxi/http";
import * as schema from "./schema";

const getTursoAuthInfo = () => {
  const event = getEvent();
  return {
    TURSO_URL: event.context.cloudflare.env.TURSO_URL,
    TURSO_AUTH_TOKEN: event.context.cloudflare.env.TURSO_AUTH_TOKEN,
  };
};

const client = createClient({
  url: getTursoAuthInfo().TURSO_URL,
  authToken: getTursoAuthInfo().TURSO_AUTH_TOKEN,
  fetch: (input: string, init?: RequestInit) => fetch(input, { ...init, cache: "no-store" }),
});

export const db = drizzle(client, { schema, casing: "snake_case" });
