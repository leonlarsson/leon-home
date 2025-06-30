import { Link, useRouterState } from "@tanstack/react-router";
import Icons from "../icons/icons";

export const HeaderLink = ({
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
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const inProject = pathname === url || (pathname.startsWith("/projects") && url.startsWith("/projects"));

  return (
    <Link
      className={
        "flex h-full items-center text-neutral-700 transition-all hover:text-black dark:text-neutral-400 dark:hover:text-kinda-white"
      }
      to={url}
      target={newTab ? "_blank" : "_self"}
      activeProps={{
        className: "font-bold !text-black dark:!text-kinda-white",
      }}
      title={title}
      draggable={false}
    >
      {inProject && pathname.split("/")[2] && <Icons.arrowLeft className="me-1" />}
      {content}
    </Link>
  );
};
