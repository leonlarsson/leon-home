import { QueryClient } from "@tanstack/react-query";
import { Link, createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";
import { routeTree } from "./routeTree.gen";

export function createRouter() {
  const queryClient = new QueryClient();

  const tanStackRouter = createTanStackRouter({
    routeTree,
    context: { queryClient },
    defaultPreload: "intent",
    defaultOnCatch: () => (
      <div>
        Caught
        <br />
        <Link className="underline" to="/">
          Go back home
        </Link>
      </div>
    ),
    defaultErrorComponent: () => (
      <div>
        Oops, an error happened :( <br />
        <Link className="underline" to="/">
          Go back home
        </Link>
      </div>
    ),
    defaultNotFoundComponent: () => (
      <div>
        Not Found
        <br />
        <Link className="underline" to="/">
          Go back home
        </Link>
      </div>
    ),
  });

  return routerWithQueryClient(tanStackRouter, queryClient);
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
