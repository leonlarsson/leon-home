"use server";

export const postMessage = async (message: string, name: string): Promise<boolean> => {
  const res = await fetch("https://leon-guestbook-api.ragnarok.workers.dev", {
    method: "POST",
    headers: { "API-KEY": process.env.API_KEY! },
    cache: "no-store",
    body: message.trim() || "<Empty message>"
  });
  return res.ok;
};

export const getEntries = async (): Promise<Response> => {
  return await fetch("https://leon-guestbook-api.ragnarok.workers.dev", {
    headers: { "API-KEY": process.env.API_KEY! },
    cache: "no-store"
  });
};
