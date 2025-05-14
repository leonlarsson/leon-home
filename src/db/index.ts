import { drizzle } from "drizzle-orm/d1";
import { getPlatformProxy } from "wrangler";
import * as schema from "./schema";

export const getDb = async () => {
  const { env } = await getPlatformProxy<Env>();
  return drizzle(env.DB, { schema, casing: "snake_case" });
};
