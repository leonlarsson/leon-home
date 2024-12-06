import globalCss from "@/styles/globals.css?url";
import { Outlet, ScrollRestoration, createRootRoute } from "@tanstack/react-router";
import { Meta, Scripts } from "@tanstack/start";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Leon San José Larsson",
      },
    ],
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
  notFoundComponent: () => <div>Not found</div>,
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
