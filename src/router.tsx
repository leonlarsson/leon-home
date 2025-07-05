import { QueryClient } from "@tanstack/react-query";
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";
import { Fallback } from "./features/common/Fallback";
import { routeTree } from "./routeTree.gen";

export function createRouter() {
  const queryClient = new QueryClient();

  const tanStackRouter = createTanStackRouter({
    routeTree,
    context: { queryClient },
    defaultPreload: "intent",
    scrollRestoration: true,
    defaultOnCatch: () => <Fallback text="Caught an error" />,
    defaultErrorComponent: () => <Fallback text="An error occurred" />,
    defaultNotFoundComponent: () => (
      <Fallback text="Page not found">
        <a href="https://httpraccoons.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://httpraccoons.com/404"
            alt="404 Not Found"
            className="max-h-[40vh] sm:max-h-[60vh] object-contain"
          />
        </a>
      </Fallback>
    ),
  });

  return routerWithQueryClient(tanStackRouter, queryClient);
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
