import { drizzle } from "drizzle-orm/d1";
import { getEvent } from "vinxi/http";
import * as schema from "./schema";

export const getDb = async () => {
  const event = getEvent();
  return drizzle(event.context.cloudflare.env.DB, { schema, casing: "snake_case" });
};
