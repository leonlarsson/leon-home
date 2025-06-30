import globalCss from "@/styles/global.css?url";
import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HeadContent, Outlet, Scripts, createRootRouteWithContext } from "@tanstack/react-router";
import { generateMetadata } from "../utils/seo";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: generateMetadata({}),
    links: [
      { rel: "stylesheet", href: globalCss },
      {
        rel: "preload",
        href: "/fonts/Geist-Variable.ttf",
        as: "font",
        type: "font/ttf",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        href: "/fonts/GeistMono-Variable.ttf",
        as: "font",
        type: "font/ttf",
        crossOrigin: "anonymous",
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
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
        <ReactQueryDevtools />
      </body>
    </html>
  );
}
