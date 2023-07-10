"use server";

export const getPosts = async (): Promise<Response> => {
  return await fetch("https://leon-home-api.ragnarok.workers.dev/journal/posts", {
    headers: { "API-KEY": process.env.API_KEY as string },
    cache: "no-store"
  });
};

export const postPost = async (title: string, body: string): Promise<boolean> => {
  const res = await fetch("https://leon-home-api.ragnarok.workers.dev/journal/posts", {
    method: "POST",
    headers: { "API-KEY": process.env.API_KEY as string },
    cache: "no-store",
    body: JSON.stringify({ title: title.trim() || "<Empty title>", body: body.trim() || "<Empty body>" })
  });
  return res.ok;
};

export const deletePost = async (idToDelete: string): Promise<boolean> => {
  const res = await fetch("https://leon-home-api.ragnarok.workers.dev/journal/posts", {
    method: "DELETE",
    headers: { "API-KEY": process.env.API_KEY as string, "id-to-delete": idToDelete },
    cache: "no-store"
  });
  return res.ok;
};
