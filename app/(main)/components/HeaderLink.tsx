"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icons from "./icons";

export default ({
  content,
  url,
  title,
  newTab = false,
}: {
  content: string | React.ReactNode;
  url: string;
  title?: string;
  newTab?: boolean;
}) => {
  const pathname = usePathname();
  const inProject =
    pathname === url ||
    (pathname.startsWith("/projects") && url.startsWith("/projects"));

  return (
    <Link
      className={`flex h-full items-center text-neutral-700 transition-all hover:text-black dark:text-neutral-400 dark:hover:text-kinda-white ${
        inProject ? "font-bold !text-black dark:!text-kinda-white" : ""
      }`}
      href={url}
      target={newTab ? "_blank" : "_self"}
      title={title}
      draggable={false}
    >
      {inProject && pathname.split("/")[2] && (
        <Icons.arrowLeft className="me-1" />
      )}
      {content}
    </Link>
  );
};
