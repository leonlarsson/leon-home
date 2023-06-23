"use server";

export const postMessage = async (message: string, name?: string): Promise<boolean> => {
  const res = await fetch("https://leon-guestbook-api.ragnarok.workers.dev", {
    method: "POST",
    headers: { "API-KEY": process.env.API_KEY as string },
    cache: "no-store",
    body: JSON.stringify({ body: message.trim() || "<Empty message>", name })
  });
  return res.ok;
};

export const getEntries = async (): Promise<Response> => {
  return await fetch("https://leon-guestbook-api.ragnarok.workers.dev", {
    headers: { "API-KEY": process.env.API_KEY as string },
    cache: "no-store"
  });
};
