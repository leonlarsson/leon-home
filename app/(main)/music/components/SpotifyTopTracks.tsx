import Link from "next/link";
import Image from "next/image";
import { getTopTracks } from "../lib/actions";
import formatDuration from "../lib/formatDuration";
import Icons from "../../components/icons";

type Props = {
  range: string;
  hideSpotifyURI?: boolean;
};

export default async ({ range, hideSpotifyURI }: Props) => {
  const topTracksObject = await getTopTracks(range);
  const tracks = topTracksObject?.items;
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
            <Link
              href={track.uri}
              target="_blank"
              title="Open in Spotify"
              className="hidden group-hover:block"
            >
              <Icons.play className="size-6" />
            </Link>
          </div>

          {/* Album image */}
          <Image
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
                .map<React.ReactNode>(artist => (
                  <Link
                    key={artist.id}
                    href={artist.external_urls.spotify}
                    target="_blank"
                    className="hover:underline"
                  >
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
