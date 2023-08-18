import { Suspense } from "react";
import { Metadata } from "next";
import generateOGMetadata from "@/app/utils/generateOGMetadata";
import RefreshButton from "./components/RefreshButton";
import SpotifyRangeSelector from "./components/SpotifyRangeSelector";
import SpotifyCurrentTrack, { CurrentTrackSkeleton } from "./components/SpotifyCurrentTrack";
import SpotifyTopTracks from "./components/SpotifyTopTracks";
import SpotifyTopArtists from "./components/SpotifyTopArtists";

const pageTitle = "Music";
const pageDescription = "Check out the music I listen to.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  ...generateOGMetadata({
    title: pageTitle,
    description: pageDescription,
    url: "https://leonlarsson.com/music",
    appendNameInOG: true
  })
};

type Props = {
  searchParams: Record<string, string | undefined>;
};

export default ({ searchParams }: Props) => {
  return (
    <div className="mx-auto max-w-3xl pb-10 text-start">
      <div className="mb-2 text-3xl font-extrabold">
        Music <RefreshButton />
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-xl font-semibold">I am currently listening to:</span>

          <Suspense fallback={<CurrentTrackSkeleton />}>
            <SpotifyCurrentTrack alwaysRender reloadOnEnd />
          </Suspense>
        </div>

        <SpotifyRangeSelector />

        <div className="flex flex-col gap-2">
          <span className="text-xl font-semibold">Top tracks:</span>
          <Suspense fallback="Loading tracks...">
            <SpotifyTopTracks range={searchParams.range ?? ""} />
          </Suspense>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xl font-semibold">Artists I like:</span>

          <Suspense fallback="Loading artists...">
            <SpotifyTopArtists range={searchParams.range ?? ""} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
