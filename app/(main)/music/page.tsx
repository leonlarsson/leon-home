import { Suspense } from "react";
import { Metadata } from "next";
import RefreshButton from "./components/RefreshButton";
import SpotifyRangeSelector from "./components/SpotifyRangeSelector";
import SpotifyCurrentTrack from "./components/SpotifyCurrentTrack";
import SpotifyTopTracks from "./components/SpotifyTopTracks";
import SpotifyTopArtists from "./components/SpotifyTopArtists";

const pageTitle = "Music | Leon San José Larsson";
const pageDescription = "Check out the music I listen to.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    type: "website",
    url: "https://leonlarsson.com/music",
    title: pageTitle,
    description: pageDescription
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    creator: "@mozzyfx"
  }
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

          <Suspense fallback="Loading track...">
            <SpotifyCurrentTrack alwaysRender />
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
