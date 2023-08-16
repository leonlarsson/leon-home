import { Suspense } from "react";
import CurrentTrack from "./components/CurrentTrack";
import TopTracks from "./components/TopTracks";
import TopArtists from "./components/TopArtists";

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
            <CurrentTrack alwaysRender />
          </Suspense>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xl font-semibold">Top tracks:</span>

          <Suspense fallback="Loading tracks...">
            <TopTracks range={searchParams.range} />
          </Suspense>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xl font-semibold">Artists I like:</span>

          <Suspense fallback="Loading artists...">
            <TopArtists />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
