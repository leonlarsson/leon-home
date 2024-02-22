import { Client } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

const client = new Client({
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
});

export const db = drizzle(client);
