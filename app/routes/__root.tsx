import globalCss from "@/styles/global.css?url";
import { generateMetadata } from "@/utils/seo";
import { Outlet, ScrollRestoration, createRootRoute } from "@tanstack/react-router";
import { Meta, Scripts } from "@tanstack/start";

export const Route = createRootRoute({
  head: () => ({
    meta: generateMetadata({}),
    links: [
      { rel: "stylesheet", href: globalCss },
      {
        rel: "preload",
        href: "/fonts/Geist-Variable.ttf",
        as: "font",
      },
      {
        rel: "preload",
        href: "/fonts/GeistMono-Variable.ttf",
        as: "font",
      },
      { rel: "icon", type: "image/png", href: "/images/avatar.png" },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="en" className="overflow-y-scroll">
      <head>
        <Meta />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
