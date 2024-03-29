import Link from "next/link";
import Image from "next/image";
import { getCurrentlyPlaying } from "../lib/actions";
import Icons from "../../components/icons";
import CurrentTrackProgress from "./CurrentTrackProgress";

type Props = {
  compact?: boolean;
  alwaysRender?: boolean;
  currentlyPlayingText?: React.ReactElement | string;
  hideSpotifyURI?: boolean;
  reloadOnEnd?: boolean;
};

export default async ({
  compact,
  alwaysRender,
  currentlyPlayingText,
  hideSpotifyURI,
  reloadOnEnd,
}: Props) => {
  const currentlyPlayingObject = await getCurrentlyPlaying();
  const track =
    currentlyPlayingObject?.item?.type === "track"
      ? currentlyPlayingObject.item
      : null;
  if (!alwaysRender && (!currentlyPlayingObject || !track)) return null;

  return (
    <>
      {currentlyPlayingText}
      <div className="rounded hover:bg-gray-300 dark:hover:bg-gray-300/10">
        <div
          className={`flex items-center ${compact ? "gap-3 p-1" : "gap-5 p-2"}`}
        >
          {/* Album image */}
          <Image
            src={
              track?.album?.images[1].url ?? "/assets/images/spotifylogo.png"
            }
            className={`${compact ? "h-10 w-10" : "h-24 w-24"} shrink-0`}
            alt="Spotify logo"
            width={compact ? 40 : 96}
            height={compact ? 40 : 96}
          />

          <div className="flex flex-1 flex-col text-start">
            {/* Track name */}
            <div
              className={`${
                compact ? "" : "text-xl max-[380px]:text-lg"
              } font-semibold`}
            >
              {track ? (
                <span className="flex items-center gap-2">
                  <Link
                    href={track.external_urls.spotify}
                    target="_blank"
                    className="hover:underline"
                  >
                    {track.name}
                  </Link>

                  {!hideSpotifyURI && compact && (
                    <Link
                      href={track.uri}
                      target="_blank"
                      title="Open in Spotify"
                      className="hover:underline"
                    >
                      <Icons.spotify className="size-4 text-[#1ed760]" />
                    </Link>
                  )}
                </span>
              ) : (
                "Nothing"
              )}
            </div>

            {/* Artist names */}
            <div
              className={`${
                compact ? "text-xs" : "text-sm"
              } text-neutral-700 dark:text-neutral-300`}
            >
              {track?.artists
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
                .reduce((prev, curr) => [prev, ", ", curr]) ??
                "Come back later"}
            </div>

            {track && !hideSpotifyURI && !compact && (
              <Link
                href={track.uri}
                target="_blank"
                className="mt-1 flex w-fit flex-wrap items-center gap-1 hover:underline"
              >
                <Icons.spotify className="size-5 text-[#1ed760]" />
                Open in Spotify
              </Link>
            )}
          </div>
        </div>

        {/* Track progress */}
        {track && (
          <CurrentTrackProgress
            key={currentlyPlayingObject?.progress_ms ?? 0}
            type="combined"
            isPlaying={!!currentlyPlayingObject?.is_playing}
            initialProgress={currentlyPlayingObject?.progress_ms ?? 0}
            duration={track.duration_ms}
            reloadOnEnd={reloadOnEnd}
          />
        )}
      </div>
    </>
  );
};

export const CurrentTrackSkeleton = ({
  compact,
  currentlyPlayingText,
}: {
  compact?: boolean;
  currentlyPlayingText?: React.ReactElement | string;
}) => (
  <div>
    {currentlyPlayingText}
    <div
      className={`flex items-center rounded ${
        compact ? "gap-3 p-1" : "gap-5 p-2"
      } hover:bg-gray-300 dark:hover:bg-gray-300/10`}
    >
      {/* Album image */}
      <div
        className={`${
          compact ? "h-10 w-10" : "h-24 w-24"
        } shrink-0 rounded bg-neutral-400 dark:bg-neutral-700`}
      ></div>

      <div className="flex flex-1 flex-col text-start">
        {/* Track name */}
        <span className={`${compact ? "" : "text-xl"} font-semibold`}>
          Track name
        </span>

        {/* Artist names */}
        <span
          className={`${
            compact ? "text-xs" : "text-sm"
          } text-neutral-700 dark:text-neutral-300`}
        >
          Artist name
        </span>
      </div>

      {/* Track progress */}
      <span className="text-right text-sm text-neutral-700 dark:text-neutral-300">
        0:00 / 4:20
      </span>
    </div>
  </div>
);
