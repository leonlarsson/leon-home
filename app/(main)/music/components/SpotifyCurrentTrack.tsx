import Link from "next/link";
import Image from "next/image";
import { getCurrentlyPlaying } from "../lib/actions";
import formatDuration from "../lib/formatDuration";

type Props = {
  alwaysRender?: boolean;
  currentlyPlayingText?: boolean;
  hideSpotifyURI?: boolean;
};

export default async ({ alwaysRender, currentlyPlayingText, hideSpotifyURI }: Props) => {
  const currentlyPlayingObject = await getCurrentlyPlaying();
  const track = currentlyPlayingObject?.item ? (currentlyPlayingObject.item as SpotifyApi.TrackObjectFull) : null;
  if (!alwaysRender && (!currentlyPlayingObject || !currentlyPlayingObject.item)) return null;

  return (
    <div>
      {currentlyPlayingText && <span>Currently listening to:</span>}
      <div className="flex items-center gap-5 rounded p-2 hover:bg-gray-300 dark:hover:bg-gray-300/10">
        {/* Album image */}
        <Image src={track?.album?.images[1].url ?? "/assets/images/spotifylogo.png"} className="rounded" alt="Spotify logo" width={80} height={80} />

        <div className="flex w-full flex-col text-start">
          <div className="flex items-center justify-between">
            {/* Track name */}
            <span className="text-xl font-semibold">
              {track ? (
                <>
                  <Link href={track.external_urls.spotify} target="_blank" className="hover:underline">
                    {track.name}
                  </Link>
                  {!hideSpotifyURI && (
                    <Link href={track.uri} target="_blank" title="Open in Spotify" className="hover:underline">
                      <i className="fa-brands fa-spotify fa-lg ms-2" />
                    </Link>
                  )}
                </>
              ) : (
                "Not listening to anything"
              )}
            </span>

            {track && (
              <span className="text-sm text-neutral-700 dark:text-neutral-300">
                {/* {formatDuration(currentlyPlayingObject?.progress_ms ?? 0)}/ */}
                {formatDuration(track.duration_ms)}
              </span>
            )}
          </div>

          {/* Artist names */}
          <span className="text-sm text-neutral-700 dark:text-neutral-300">
            {track?.artists
              .map<React.ReactNode>(artist => (
                <Link href={artist.external_urls.spotify} target="_blank" className="hover:underline">
                  {artist.name}
                </Link>
              ))
              .reduce((prev, curr) => [prev, ", ", curr]) ?? "Come back later"}
          </span>
        </div>
      </div>
    </div>
  );
};
