import { defineConfig } from "drizzle-kit";

if (!process.env.TURSO_URL || !process.env.TURSO_AUTH_TOKEN) {
  throw new Error("TURSO_URL and TURSO_AUTH_TOKEN are required");
}

export default defineConfig({
  dialect: "turso",
  schema: "./db/schema.ts",
  casing: "snake_case",
  dbCredentials: {
    url: process.env.TURSO_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
  // Print all statements
  verbose: true,
  // Always ask for confirmation
  strict: true,
});
