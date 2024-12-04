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
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&family=Geist:wght@100..900&display=swap",
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
