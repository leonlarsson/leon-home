import Icons from "@/features/icons/icons";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { createServerFn, useServerFn } from "@tanstack/start";
import { spotifySdk } from "../functions";
import formatDuration from "../utils/formatDuration";

const getTopTracksServerFn = createServerFn()
  .validator((range: "short_term" | "medium_term" | "long_term") => range)
  .handler(async (ctx) => {
    return await spotifySdk.currentUser.topItems("tracks", ctx.data);
  });

type Props = {
  range: "short_term" | "medium_term" | "long_term";
  hideSpotifyURI?: boolean;
};

export const SpotifyTopTracks = ({ range, hideSpotifyURI }: Props) => {
  const getTopTracks = useServerFn(getTopTracksServerFn);

  const query = useSuspenseQuery({
    queryKey: ["music", "topTracks", range],
    queryFn: () => getTopTracks({ data: range }),
    staleTime: Number.POSITIVE_INFINITY,
  });

  const tracks = query.data.items;
  if (!tracks) return <span>No tracks found.</span>;

  return (
    <div className="flex flex-col">
      {tracks.map((track, i) => (
        <div
          key={track.id}
          className="group flex items-center gap-4 rounded p-2 hover:bg-gray-300 dark:hover:bg-gray-300/10"
        >
          {/* Track number / play button */}
          <div className="ms-2 w-6 shrink-0 text-center text-neutral-700 max-[380px]:hidden dark:text-neutral-300">
            <span className="group-hover:hidden">{i + 1}</span>
            <Link href={track.uri} target="_blank" title="Open in Spotify" className="hidden group-hover:block">
              <Icons.play className="size-6" />
            </Link>
          </div>

          {/* Album image */}
          <img
            src={track.album.images[1].url}
            className="shrink-0"
            alt={`Album art for '${track.album.name}'`}
            width={55}
            height={55}
            loading="lazy"
          />

          <div className="flex flex-1 flex-col text-start">
            {/* Track name */}
            <span className="space-x-2">
              <Link
                href={track.external_urls.spotify}
                target="_blank"
                className="text-lg font-semibold hover:underline"
              >
                {track.name}
              </Link>

              {!hideSpotifyURI && (
                <Link
                  href={track.uri}
                  target="_blank"
                  title="Open in Spotify"
                  className="hidden hover:underline max-[380px]:inline"
                >
                  <Icons.spotify className="inline size-4 text-[#1ed760]" />
                </Link>
              )}
            </span>

            {/* Artist names */}
            <div className="text-sm text-neutral-700 dark:text-neutral-300">
              {track.artists
                .map<React.ReactNode>((artist) => (
                  <Link key={artist.id} href={artist.external_urls.spotify} target="_blank" className="hover:underline">
                    {artist.name}
                  </Link>
                ))
                .reduce((prev, curr) => [prev, ", ", curr])}
            </div>
          </div>

          {/* Track progress */}
          <span className="text-right text-sm text-neutral-700 max-[380px]:hidden dark:text-neutral-300">
            {formatDuration(track.duration_ms)}
          </span>
        </div>
      ))}
    </div>
  );
};
