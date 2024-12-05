import Icons from "@/features/icons/icons";
import type { Artist } from "@spotify/web-api-ts-sdk";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { createServerFn, useServerFn } from "@tanstack/start";
import type { ReactNode } from "react";
import { spotifySdk } from "../functions";
import { SpotifyCurrentTrackProgress } from "./SpotifyCurrentlyPlayingTrackProgress";

const getCurrentlyPlayingTrackServerFn = createServerFn().handler(async () => {
  const playbackState = await spotifySdk.player.getCurrentlyPlayingTrack();
  return playbackState;
});

type Props = {
  compact?: boolean;
  alwaysRender?: boolean;
  currentlyPlayingText?: React.ReactElement | string;
  hideSpotifyURI?: boolean;
  refreshOnEnd?: boolean;
};

export const SpotifyCurrentlyPlayingTrack = (props: Props) => {
  const getCurrentlyPlayingTrack = useServerFn(getCurrentlyPlayingTrackServerFn);

  const query = useQuery({
    queryKey: ["music", "currentlyPlayingTrack"],
    queryFn: () => getCurrentlyPlayingTrack(),
  });

  if (query.isLoading) {
    return (
      <SpotifyCurrentlyPlayingTrackSkeleton compact={props.compact} currentlyPlayingText={props.currentlyPlayingText} />
    );
  }

  // Get the track only if it is of type track (not podcast etc.)
  const track = query.data ? (query.data?.item?.type === "track" ? query.data : null) : null;

  // If alwaysRender is false and there is no track playing, render nothing
  if (!props.alwaysRender && !track) {
    return null;
  }

  return (
    <>
      {props.currentlyPlayingText}
      <div className="rounded hover:bg-gray-300 dark:hover:bg-gray-300/10">
        <div className={`flex items-center ${props.compact ? "gap-3 p-1" : "gap-5 p-2"}`}>
          {/* Album image */}
          <img
            // @ts-expect-error The types are delusional
            src={track?.item.album.images[1].url ?? "/images/spotifylogo.png"}
            className={`${props.compact ? "h-10 w-10" : "h-24 w-24"} shrink-0`}
            alt="Spotify logo"
            width={props.compact ? 40 : 96}
            height={props.compact ? 40 : 96}
          />

          <div className="flex flex-1 flex-col text-start">
            {/* Track name */}
            <div className={`${props.compact ? "" : "text-xl max-[380px]:text-lg"} font-semibold`}>
              {track ? (
                <span className="flex items-center gap-2">
                  <Link href={track.item.external_urls.spotify} target="_blank" className="hover:underline">
                    {track.item.name}
                  </Link>

                  {!props.hideSpotifyURI && props.compact && (
                    <Link href={track.item.uri} target="_blank" title="Open in Spotify" className="hover:underline">
                      <Icons.spotify className="size-4 text-[#1ed760]" />
                    </Link>
                  )}
                </span>
              ) : (
                "Nothing"
              )}
            </div>

            {/* Artist names */}
            <div className={`${props.compact ? "text-xs" : "text-sm"} text-neutral-700 dark:text-neutral-300`}>
              {/* @ts-expect-error The types are delusional */}
              {track?.item.artists
                .map((artist: Artist) => (
                  <Link key={artist.id} href={artist.external_urls.spotify} target="_blank" className="hover:underline">
                    {artist.name}
                  </Link>
                ))
                .reduce((prev: ReactNode, curr: ReactNode) => [prev, ", ", curr]) ?? "Come back later"}
            </div>

            {track && !props.hideSpotifyURI && !props.compact && (
              <Link
                href={track.item.uri}
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
          <SpotifyCurrentTrackProgress
            key={track.progress_ms ?? 0}
            type="combined"
            isPlaying={!!track.is_playing}
            initialProgress={track.progress_ms ?? 0}
            duration={track.item.duration_ms}
            refreshOnEnd={props.refreshOnEnd}
          />
        )}
      </div>
    </>
  );
};

export const SpotifyCurrentlyPlayingTrackSkeleton = ({
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
      <div className={`${compact ? "h-10 w-10" : "h-24 w-24"} shrink-0 rounded bg-neutral-400 dark:bg-neutral-700`} />

      <div className="flex flex-1 flex-col text-start">
        {/* Track name */}
        <span className={`${compact ? "" : "text-xl"} font-semibold`}>Track name</span>

        {/* Artist names */}
        <span className={`${compact ? "text-xs" : "text-sm"} text-neutral-700 dark:text-neutral-300`}>Artist name</span>
      </div>

      {/* Track progress */}
      <span className="text-right text-sm text-neutral-700 dark:text-neutral-300">0:00 / 4:20</span>
    </div>
  </div>
);
