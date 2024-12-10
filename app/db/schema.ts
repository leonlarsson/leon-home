import { sql } from "drizzle-orm";
import { int, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const entries = sqliteTable("entries", {
  id: int().primaryKey({ autoIncrement: true }),
  date: int({ mode: "timestamp_ms" }).default(sql`CURRENT_TIMESTAMP`).notNull(),
  body: text({ length: 100 }).notNull(),
  name: text({ length: 50 }),
  isAdmin: integer({ mode: "boolean" }).default(false).notNull(),
  ip: text({ length: 50 }),
});
