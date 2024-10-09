import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

if (!process.env.TURSO_URL || !process.env.TURSO_AUTH_TOKEN) {
  throw new Error("TURSO_URL and TURSO_AUTH_TOKEN are required");
}

const client = createClient({
  url: process.env.TURSO_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
  fetch: (input: string, init?: RequestInit) =>
    fetch(input, { ...init, cache: "no-store" }),
});

export const db = drizzle(client, { schema, casing: "snake_case" });
