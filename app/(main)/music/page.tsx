import { Suspense } from "react";
import SpotifyCurrentTrack from "./components/SpotifyCurrentTrack";
import SpotifyTopTracks from "./components/SpotifyTopTracks";
import SpotifyTopArtists from "./components/SpotifyTopArtists";

type Props = {
  searchParams: Record<string, string>;
};

export default ({ searchParams }: Props) => {
  return (
    <div className="mx-auto max-w-3xl pb-10 text-start">
      <div className="mb-2 text-3xl font-extrabold">Music</div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-xl font-semibold">I am currently listening to:</span>

          <Suspense fallback="Loading track...">
            <SpotifyCurrentTrack alwaysRender />
          </Suspense>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xl font-semibold">Top tracks:</span>

          <Suspense fallback="Loading tracks...">
            <SpotifyTopTracks range={searchParams.range} />
          </Suspense>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xl font-semibold">Artists I like:</span>

          <Suspense fallback="Loading artists...">
            <SpotifyTopArtists />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
