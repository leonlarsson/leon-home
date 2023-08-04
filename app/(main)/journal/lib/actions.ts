"use server";

import { connect } from "@planetscale/database";
import { Post } from "../components/Posts";

const conn = connect({
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD
});

export const getPosts = async (): Promise<Post[] | false> => {
  try {
    const { rows } = await conn.execute("SELECT * FROM journal_posts ORDER BY date DESC");
    return rows as Post[];
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const postPost = async (title: string, body: string): Promise<boolean> => {
  try {
    await conn.execute("INSERT INTO journal_posts (title, body) VALUES (?, ?)", [title.trim() || "<No title>", body.trim() || "<No body>"]);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const deletePost = async (idToDelete: string): Promise<boolean> => {
  try {
    await conn.execute("DELETE FROM journal_posts WHERE id = ?", [idToDelete]);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
