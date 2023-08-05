"use server";

import { getServerSession } from "next-auth";
import { connect } from "@planetscale/database";
import { get as getEdgeConfig } from "@vercel/edge-config";
import emojis from "./emojis";
import { Entry } from "../components/Entries";

const conn = connect({
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD
});

export const getEntries = async (): Promise<Entry[] | false> => {
  try {
    const { rows } = await conn.execute("SELECT * FROM guestbook_entries ORDER BY date DESC LIMIT 100");
    return rows as Entry[];
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const postEntry = async (message: string): Promise<boolean> => {
  // Validate length
  if (message.length > 100) return false;

  let session;
  const requireAuth = await getRequireAuth();
  // If requireAuth, get the session
  if (requireAuth) session = await getServerSession();
  // If requireAuth and session (user is signed in), but no name is available, return false (which will show an error)
  if (requireAuth && session && !session.user?.name) return false;

  // Handle cases where auth is enabled, the user is not signed in, and the message is not an emoji (it should be, because not being signed in means emojis only)
  if (requireAuth && !session && !emojis.includes(message)) message = "👈🛑👮‍♂️";

  try {
    await conn.execute("INSERT INTO guestbook_entries (body, name) VALUES (?, ?)", [message.trim() || "<Empty message>", session?.user?.name]);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const deleteEntry = async (idToDelete: string): Promise<boolean> => {
  try {
    await conn.execute("DELETE FROM guestbook_entries WHERE id = ?", [idToDelete]);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getRequireAuth = async (): Promise<boolean> => {
  return ((await getEdgeConfig(process.env.NODE_ENV === "production" ? "requireAuth_prod" : "requireAuth_dev")) as boolean) ?? true;
};
