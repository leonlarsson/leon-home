"use server";

import { getServerSession } from "next-auth";
import { get as getEdgeConfig } from "@vercel/edge-config";
import emojis from "./emojis";

export const getEntries = async (): Promise<Response> => {
  return await fetch("https://leon-home-api.ragnarok.workers.dev/guestbook/entries", {
    headers: { "API-KEY": process.env.API_KEY as string },
    cache: "no-store"
  });
};

export const postEntry = async (message: string): Promise<boolean> => {
  let session;
  const requireAuth = await getRequireAuth();
  // If requireAuth, get the session
  if (requireAuth) session = await getServerSession();
  // If requireAuth and session (user is signed in), but no name is available, return false (which will show an error)
  if (requireAuth && session && !session.user?.name) return false;

  // Handle cases where auth is enabled, the user is not signed in, and the message is not an emoji (it should be, because not being signed in means emojis only)
  if (requireAuth && !session && !emojis.includes(message)) message = "👈🛑👮‍♂️";

  // Temp debug log
  console.log({ message, requireAuth, user: session?.user });

  const res = await fetch("https://leon-home-api.ragnarok.workers.dev/guestbook/entries", {
    method: "POST",
    headers: { "API-KEY": process.env.API_KEY as string },
    cache: "no-store",
    body: JSON.stringify({ body: message.trim() || "<Empty message>", name: session?.user?.name })
  });
  return res.ok;
};

export const deleteEntry = async (idToDelete: string): Promise<boolean> => {
  const res = await fetch("https://leon-home-api.ragnarok.workers.dev/guestbook/entries", {
    method: "DELETE",
    headers: { "API-KEY": process.env.API_KEY as string, "id-to-delete": idToDelete },
    cache: "no-store"
  });
  return res.ok;
};

export const getRequireAuth = async (): Promise<boolean> => {
  return ((await getEdgeConfig(process.env.NODE_ENV === "production" ? "requireAuth_prod" : "requireAuth_dev")) as boolean) ?? true;
};
