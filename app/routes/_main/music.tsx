import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const musicPageSearchParams = z.object({
  range: z.enum(["short_term", "medium_term", "long_term"]).optional(),
});

export const Route = createFileRoute("/_main/music")({
  component: RouteComponent,
  validateSearch: (search) => musicPageSearchParams.parse(search),
});

function RouteComponent() {
  return <div>Music</div>;

  // return <SpotifyTopTracks range="short_term" />;
}
