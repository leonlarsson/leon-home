import { SpotifyCurrentlyPlayingTrack } from "@/features/music/components/SpotifyCurrentlyPlayingTrack";
import SpotifyRangeSelector from "@/features/music/components/SpotifyRangeSelector";
import SpotifyRefreshButton from "@/features/music/components/SpotifyRefreshButton";
import { SpotifyTopArtists } from "@/features/music/components/SpotifyTopArtists";
import { SpotifyTopTracks } from "@/features/music/components/SpotifyTopTracks";
import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { z } from "zod";

const musicPageSearchParams = z.object({
  range: z.enum(["short_term", "medium_term", "long_term"]).optional(),
});

export const Route = createFileRoute("/_main/music")({
  component: RouteComponent,
  validateSearch: (search) => musicPageSearchParams.parse(search),
});

function RouteComponent() {
  const { range } = Route.useSearch();

  return (
    <div className="mx-auto max-w-3xl pb-10 text-start">
      <div className="flex gap-2 text-3xl font-extrabold">
        Music <SpotifyRefreshButton />
      </div>
      <div className="mb-3">All data is freshly sourced from Spotify.</div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-xl font-semibold">I am currently listening to:</span>

          <SpotifyCurrentlyPlayingTrack alwaysRender reloadOnEnd />
        </div>

        <SpotifyRangeSelector />

        <div className="flex flex-col gap-2">
          <span className="text-xl font-semibold">Top tracks:</span>
          <Suspense fallback="Loading tracks...">
            <SpotifyTopTracks range={range ?? "medium_term"} />
          </Suspense>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xl font-semibold">Artists I like:</span>

          <Suspense fallback="Loading artists...">
            <SpotifyTopArtists range={range ?? "medium_term"} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
