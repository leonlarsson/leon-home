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

export const deleteEntry = async (idToDelete: string): Promise<boolean> => {
  const res = await fetch("https://leon-guestbook-api.ragnarok.workers.dev", {
    method: "DELETE",
    headers: { "API-KEY": process.env.API_KEY as string, "id-to-delete": idToDelete },
    cache: "no-store"
  });
  return res.ok;
};
