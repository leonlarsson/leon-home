"use server";

import { getServerSession } from "next-auth";
import { connect } from "@planetscale/database";
import { get as getEdgeConfig } from "@vercel/edge-config";
import emojis from "./emojis";
import { Entry } from "@/types";

const conn = connect({
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD
});

export const getEntries = async (): Promise<Entry[] | false> => {
  try {
    // Get all entries that are not deleted (null or 0), sorted by date, limited to 100
    const { rows } = await conn.execute("SELECT * FROM guestbook_entries WHERE deleted IS NULL OR deleted = 0 ORDER BY date DESC LIMIT 100");
    return rows as Entry[];
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const postEntry = async (message: string): Promise<boolean> => {
  // Validate message
  let { passed, trimmedMessage } = validateMessageContent(message);
  if (!passed) return false;

  let session;
  const requireAuth = await getRequireAuth();

  // If requireAuth, get the session
  if (requireAuth) session = await getServerSession();

  // If requireAuth and session (user is signed in), but no name or email is available, return false (which will show an error)
  if (requireAuth && session && !session.user?.name && !session.user?.email) return false;

  // Handle cases where auth is enabled, the user is not signed in, and the message is not an emoji (it should be, because not being signed in means emojis only)
  if (requireAuth && !session && !emojis.includes(trimmedMessage)) trimmedMessage = "👈🛑👮‍♂️";

  try {
    await conn.execute("INSERT INTO guestbook_entries (body, name, email) VALUES (?, ?, ?)", [trimmedMessage, session?.user?.name?.slice(0, 50), session?.user?.email]);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const editEntry = async (idToEdit: string, newMessage: string): Promise<boolean> => {
  // Validate message
  let { passed, trimmedMessage } = validateMessageContent(newMessage);
  if (!passed) return false;

  try {
    // Check if the user can edit this entry
    if (!(await userCanModifyEntry(idToEdit))) return false;

    const dateTime = new Date().toISOString().slice(0, 19).replace("T", " ");

    // If we get here, the user is admin or the entry belongs to the user
    await conn.execute("UPDATE guestbook_entries SET body = ?, last_edited = ? WHERE id = ?", [trimmedMessage, dateTime, idToEdit]);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const deleteEntry = async (idToDelete: string): Promise<boolean> => {
  try {
    // Check if the user can delete this entry
    if (!(await userCanModifyEntry(idToDelete))) return false;

    // If we get here, the user is admin or the entry belongs to the user
    await conn.execute("UPDATE guestbook_entries SET deleted = 1 WHERE id = ?", [idToDelete]);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const userCanModifyEntry = async (entryId: string): Promise<boolean> => {
  // Get the session
  const session = await getServerSession();

  // If session does not have an email, return false
  if (!session?.user?.email) return false;

  // If user is not admin...
  if (session.user.email !== process.env.ADMIN_EMAIL) {
    // See if a row exists with the given id and user email
    const { rows } = await conn.execute("SELECT 1 FROM guestbook_entries WHERE id = ? AND email = ?", [entryId, session.user.email]);

    // If no rows are returned (no entry with that id and email), return false
    if (!rows.length) return false;
  }

  // If we get here, the user is admin or the entry belongs to the user
  return true;
};

export const getRequireAuth = async (): Promise<boolean> => {
  return ((await getEdgeConfig(process.env.NODE_ENV === "production" ? "requireAuth_prod" : "requireAuth_dev")) as boolean) ?? true;
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
