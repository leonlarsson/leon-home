"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default ({ content, url, title, newTab = false }: { content: string | React.ReactNode; url: string; title?: string; newTab?: boolean }) => {
  const inProject = usePathname() === url || (usePathname().startsWith("/projects") && url.startsWith("/projects"));

  return (
    <Link className={`px-2 py-4 text-neutral-800 transition-all hover:text-black dark:text-neutral-400 dark:hover:text-kinda-white ${inProject ? "font-bold !text-black dark:!text-kinda-white" : ""}`} href={url} target={newTab ? "_blank" : "_self"} title={title} draggable={false}>
      {inProject && usePathname().split("/")[2] && <i className="fa-solid fa-arrow-left fa-sm me-1" />}
      {content}
    </Link>
  );
};
