import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { getEvent } from "vinxi/http";
import * as schema from "./schema";

const getClient = async () => {
  const event = getEvent();
  return createClient({
    url: event.context.cloudflare.env.TURSO_URL,
    authToken: event.context.cloudflare.env.TURSO_AUTH_TOKEN,
    fetch: (input: string, init?: RequestInit) => fetch(input, { ...init, cache: "no-store" }),
  });
};

export const getDb = async () => {
  return drizzle(await getClient(), { schema, casing: "snake_case" });
};
