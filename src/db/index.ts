import { getBindings } from "@/utils/bindings";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

export const getDb = async () => {
  const { DB } = getBindings();
  return drizzle(DB, { schema, casing: "snake_case" });
};
