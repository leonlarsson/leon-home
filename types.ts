import { StaticImageData } from "next/image";

export type Project = {
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  year?: string;
  endYear?: string;
  tags?: string[];
  images?: StaticImageData[];
  link?: string;
  linkName?: string;
  hidePreview?: boolean;
  githubLink?: string;
  extraLinks?: {
    name: string;
    link: string;
    type: "link" | "github";
  }[];
};

export type Entry = {
  id: string;
  date: string;
  body: string;
  name: string | null;
  email: string | null;
  edited_at: string | null;
  deleted_at: string | null;
};

export type Post = {
  id: string;
  date: string;
  title: string;
  body: string;
};
