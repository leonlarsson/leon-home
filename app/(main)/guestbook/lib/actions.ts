"use server";

import { headers } from "next/headers";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { kv } from "@vercel/kv";
import { Ratelimit } from "@upstash/ratelimit";
import { connect } from "@planetscale/database";
import emojis from "./emojis";
import { Entry } from "@/types";

const ratelimit = new Ratelimit({
  redis: kv,
  // rate limit to 5 requests per 1 minute
  limiter: Ratelimit.slidingWindow(5, "1m"),
  prefix: "guestbook"
});

const conn = connect({
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD
});

export const getEntriesCount = async (namedEntriesOnly: boolean): Promise<number | false> => {
  try {
    // Get a count of all entries that are not deleted
    const { rows } = await conn.execute(`SELECT COUNT(*) as total_entries FROM guestbook_entries WHERE ${namedEntriesOnly ? "name IS NOT NULL AND" : ""} deleted_at IS NULL`);
    return (rows[0] as { total_entries: number }).total_entries;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getEntries = async (namedEntriesOnly: boolean): Promise<Entry[] | false> => {
  try {
    // Get all entries that are not deleted, sorted by date, limited to 100
    const { rows } = await conn.execute(`SELECT * FROM guestbook_entries WHERE ${namedEntriesOnly ? "name IS NOT NULL AND" : ""} deleted_at IS NULL ORDER BY date DESC LIMIT 100`);
    return rows as Entry[];
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const postEntry = async (message: string): Promise<boolean | "ratelimited"> => {
  // Cloudflare header because we're behind Cloudflare
  const ip = headers().get("cf-connecting-ip") ?? "127.0.0.1";

  const { success } = await ratelimit.limit(`ratelimit_${ip}`);
  if (!success) return "ratelimited";

  // Validate message
  let { passed, trimmedMessage } = validateMessageContent(message);
  if (!passed) return false;

  let session;
  const requireAuth = process.env.REQUIRE_AUTH === "true";

  // If requireAuth, get the session
  if (requireAuth) session = await getServerSession();

  // If requireAuth and session (user is signed in), but no name or email is available, return false (which will show an error)
  if (requireAuth && session && !session.user?.name && !session.user?.email) return false;

  // Handle cases where auth is enabled, the user is not signed in, and the message is not an emoji (it should be, because not being signed in means emojis only)
  if (requireAuth && !session && !emojis.includes(trimmedMessage)) trimmedMessage = "👈🛑👮‍♂️";

  try {
    await conn.execute("INSERT INTO guestbook_entries (body, name, email) VALUES (?, ?, ?)", [trimmedMessage, session?.user?.name?.slice(0, 50), session?.user?.email]);
    revalidatePath("/guestbook");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const editEntry = async (idToEdit: number, oldMessage: string, newMessage: string): Promise<boolean> => {
  // Validate message
  let { passed, trimmedMessage } = validateMessageContent(newMessage);
  if (!passed) return false;

  try {
    // Check if the user can edit this entry
    const { canModify, email } = await userCanModifyEntry(idToEdit);
    if (!canModify) return false;

    // If we get here, the user is admin or the entry belongs to the user
    // Update the entry and insert a new row into guestbook_edits
    await conn.transaction(async tx => {
      await tx.execute("UPDATE guestbook_entries SET body = ?, edited_at = ? WHERE id = ?", [trimmedMessage, dbDateTime(), idToEdit]);
      await tx.execute("INSERT INTO guestbook_edits (entry_id, old_message, new_message, edited_by) VALUES (?, ?, ?, ?)", [idToEdit, oldMessage, trimmedMessage, email]);
    });

    revalidatePath("/guestbook");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const deleteEntry = async (idToDelete: number): Promise<boolean> => {
  try {
    // Check if the user can delete this entry
    const { canModify } = await userCanModifyEntry(idToDelete);
    if (!canModify) return false;

    // If we get here, the user is admin or the entry belongs to the user
    await conn.execute("UPDATE guestbook_entries SET deleted_at = ? WHERE id = ?", [dbDateTime(), idToDelete]);
    revalidatePath("/guestbook");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const userCanModifyEntry = async (entryId: number): Promise<{ canModify: boolean; email: string }> => {
  // Get the session
  const session = await getServerSession();

  // If session does not have an email, return false
  if (!session?.user?.email) return { canModify: false, email: "" };

  // If user is not admin...
  if (session.user.email !== process.env.ADMIN_EMAIL) {
    // See if a row exists with the given id and user email
    const { rows } = await conn.execute("SELECT 1 FROM guestbook_entries WHERE id = ? AND email = ?", [entryId, session.user.email]);

    // If no rows are returned (no entry with that id and email), return false
    if (!rows.length) return { canModify: false, email: session.user.email };
  }

  // If we get here, the user is admin or the entry belongs to the user
  return { canModify: true, email: session.user.email };
};

const validateMessageContent = (message: string): { passed: boolean; trimmedMessage: string } => {
  // Trim
  const trimmedMessage = message?.trim();

  // Validate existance and length
  if (!trimmedMessage || trimmedMessage.length > 100) return { passed: false, trimmedMessage };

  // Validate content
  if (["﷽", "𒐫", "𒈙", "⸻", "꧅", "ဪ", "௵", "௸", "​", "‮"].includes(trimmedMessage)) return { passed: false, trimmedMessage };

  return { passed: true, trimmedMessage };
};

const dbDateTime = () => new Date().toISOString().slice(0, 19).replace("T", " ");
