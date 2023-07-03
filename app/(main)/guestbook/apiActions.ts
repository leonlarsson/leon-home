"use server";

import { getServerSession } from "next-auth";
import { get as getEdgeConfig } from "@vercel/edge-config";

export const getEntries = async (): Promise<Response> => {
  return await fetch("https://leon-guestbook-api.ragnarok.workers.dev", {
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

  const res = await fetch("https://leon-guestbook-api.ragnarok.workers.dev", {
    method: "POST",
    headers: { "API-KEY": process.env.API_KEY as string },
    cache: "no-store",
    body: JSON.stringify({ body: message.trim() || "<Empty message>", name: session?.user?.name })
  });
  return res.ok;
};

export const deleteEntry = async (idToDelete: string): Promise<boolean> => {
  const res = await fetch("https://leon-guestbook-api.ragnarok.workers.dev", {
    method: "DELETE",
    headers: { "API-KEY": process.env.API_KEY as string, "id-to-delete": idToDelete },
    cache: "no-store"
  });
  return res.ok;
};

export const getRequireAuth = async (): Promise<boolean> => {
  return ((await getEdgeConfig(process.env.NODE_ENV === "production" ? "requireAuth_prod" : "requireAuth_dev")) as boolean) ?? true;
};
