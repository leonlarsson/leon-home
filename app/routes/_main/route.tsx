import { Header } from "@/features/navigation/Header";
import mainCss from "@/styles/main.css?url";
import { Outlet } from "@tanstack/react-router";

export const Route = createFileRoute({
  head: () => ({
    links: [{ rel: "stylesheet", href: mainCss }],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className={"min-h-[100svh] bg-kinda-white text-black dark:bg-kinda-black dark:text-kinda-white"}>
      <Header />
      {/* Below 510px (no header) width, add bottom margin to accomodate the bottom overlay header. Add relative if issues occur */}
      {/* Also below 510px width, add some padding to the top, and decrease horizontal padding */}
      <div className="container mx-auto px-4 pb-28 pt-3 text-center transition-all min-[510px]:px-6 min-[510px]:pb-10 min-[510px]:pt-0">
        <Outlet />
      </div>
    </div>
  );
}
