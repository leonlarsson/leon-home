import cvCss from "@/styles/cv.css?url";
import { Outlet } from "@tanstack/react-router";

export const Route = createFileRoute({
  component: RouteComponent,
  head: () => ({
    links: [{ rel: "stylesheet", href: cvCss }],
  }),
});

function RouteComponent() {
  return (
    <div className="container mx-auto min-h-[100svh] max-w-3xl px-4 pb-10 pt-2 lg:pt-10">
      <Outlet />
    </div>
  );
}
