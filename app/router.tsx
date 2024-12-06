import { QueryClient } from "@tanstack/react-query";
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";
import { routeTree } from "./routeTree.gen";

export function createRouter() {
  const queryClient = new QueryClient();

  const tanStackRouter = createTanStackRouter({
    routeTree,
    context: { queryClient },
    defaultPreload: "intent",
    defaultOnCatch: () => <div>Caught</div>,
    defaultNotFoundComponent: () => <div>Not Found</div>,
  });

  // No clue why TypeScript is complaining about this
  return routerWithQueryClient(tanStackRouter, queryClient);
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
