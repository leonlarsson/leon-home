import Link from "next/link";
import Image from "next/image";
import { getCurrentlyPlaying } from "../lib/actions";
import CurrentTrackProgress from "./CurrentTrackProgress";

type Props = {
  compact?: boolean;
  alwaysRender?: boolean;
  currentlyPlayingText?: React.ReactElement | string;
  hideSpotifyURI?: boolean;
  reloadOnEnd?: boolean;
};

export default async ({ compact, alwaysRender, currentlyPlayingText, hideSpotifyURI, reloadOnEnd }: Props) => {
  const currentlyPlayingObject = await getCurrentlyPlaying();
  const track = currentlyPlayingObject?.item?.type === "track" ? currentlyPlayingObject.item : null;
  if (!alwaysRender && (!currentlyPlayingObject || !track)) return null;

  return (
    <div>
      {currentlyPlayingText}
      <div className={`flex items-center rounded ${compact ? "gap-3 p-1" : "gap-5 p-2"} hover:bg-gray-300 dark:hover:bg-gray-300/10`}>
        {/* Album image */}
        <Image src={track?.album?.images[1].url ?? "/assets/images/spotifylogo.png"} className="shrink-0 rounded" alt="Spotify logo" width={compact ? 40 : 80} height={compact ? 40 : 80} />

        <div className="flex w-full flex-col text-start">
          <div className="flex items-center justify-between">
            {/* Track name */}
            <span className={`${compact ? "" : "text-xl"} font-semibold`}>
              {track ? (
                <>
                  <Link href={track.external_urls.spotify} target="_blank" className="hover:underline">
                    {track.name}
                  </Link>
                  {!hideSpotifyURI && (
                    <Link href={track.uri} target="_blank" title="Open in Spotify" className="hover:underline">
                      <i className={`fa-brands fa-spotify ${compact ? "" : "fa-lg"} ms-2`} />
                    </Link>
                  )}
                </>
              ) : (
                "Nothing"
              )}
            </span>

            {/* Track progress */}
            {track && <CurrentTrackProgress key={currentlyPlayingObject?.progress_ms ?? 0} isPlaying={!!currentlyPlayingObject?.is_playing} initialProgress={currentlyPlayingObject?.progress_ms ?? 0} duration={track.duration_ms} reloadOnEnd={reloadOnEnd} />}
          </div>

          {/* Artist names */}
          <span className={`${compact ? "text-xs" : "text-sm"} text-neutral-700 dark:text-neutral-300`}>
            {track?.artists
              .map<React.ReactNode>(artist => (
                <Link key={artist.id} href={artist.external_urls.spotify} target="_blank" className="hover:underline">
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

export const CurrentTrackSkeleton = ({ compact, currentlyPlayingText }: { compact?: boolean; currentlyPlayingText?: React.ReactElement | string }) => (
  <div>
    {currentlyPlayingText}
    <div className={`flex items-center rounded ${compact ? "gap-3 p-1" : "gap-5 p-2"} hover:bg-gray-300 dark:hover:bg-gray-300/10`}>
      <div className={`${compact ? "h-10 w-10" : "h-20 w-20"} shrink-0 rounded bg-neutral-400 dark:bg-neutral-700`}></div>

      <div className="flex w-full flex-col text-start">
        <div className="flex items-center justify-between">
          <span className={`${compact ? "" : "text-xl"} font-semibold`}>Track name</span>
          <span className="text-sm text-neutral-700 dark:text-neutral-300">0:00 / 4:20</span>
        </div>
        <span className={`${compact ? "text-xs" : "text-sm"} text-neutral-700 dark:text-neutral-300`}>Artist name</span>
      </div>
    </div>
  </div>
);
