import Icons from "@/features/icons/icons";
import { cn } from "@/utils/cn";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/start";
import type { ReactNode } from "react";
import { $getCurrentlyPlayingTrack } from "../functions";
import {
  SpotifyCurrentTrackProgress,
  type SpotifyCurrentlyPlayingTrackProgressType,
} from "./SpotifyCurrentlyPlayingTrackProgress";

type Props = {
  compact?: boolean;
  alwaysRender?: boolean;
  currentlyPlayingText?: React.ReactElement | string;
  barType: SpotifyCurrentlyPlayingTrackProgressType;
  hideSpotifyURI?: boolean;
  refreshOnEnd?: boolean;
};

export const SpotifyCurrentlyPlayingTrack = (props: Props) => {
  const getCurrentlyPlayingTrack = useServerFn($getCurrentlyPlayingTrack);

  const query = useQuery({
    queryKey: ["music", "currentlyPlayingTrack"],
    queryFn: () => getCurrentlyPlayingTrack().then((res) => res.playbackState),
  });

  if (query.isLoading) {
    return (
      <SpotifyCurrentlyPlayingTrackSkeleton
        barType={props.barType}
        compact={props.compact}
        currentlyPlayingText={props.currentlyPlayingText}
      />
    );
  }

  const playbackState = query.data;
  const track = playbackState?.item && "album" in playbackState.item ? playbackState.item : null;

  // If alwaysRender is false and there is no track playing, render nothing
  if (!props.alwaysRender && !playbackState) {
    return null;
  }

  return (
    <>
      {props.currentlyPlayingText}
      <div className="rounded hover:bg-neutral-200 dark:hover:bg-gray-300/10">
        <div className={cn("flex items-center gap-5 p-2", props.compact && "gap-3 p-1")}>
          {/* Album image */}
          <img
            src={track?.album.images[1].url ?? "/images/spotifylogo.png"}
            className={cn("shrink-0 h-24 w-24", props.compact && "h-10 w-10")}
            alt="Spotify logo"
            width={props.compact ? 40 : 96}
            height={props.compact ? 40 : 96}
          />

          <div className="flex flex-1 flex-col text-start">
            {/* Track name */}
            <div className={cn("font-semibold", !props.compact && "text-xl max-[380px]:text-lg")}>
              {track ? (
                <span className="flex items-center gap-2">
                  <a href={track.external_urls.spotify} target="_blank" rel="noreferrer" className="hover:underline">
                    {track.name}
                  </a>

                  {!props.hideSpotifyURI && props.compact && (
                    <a
                      href={track.uri}
                      target="_blank"
                      rel="noreferrer"
                      title="Open in Spotify"
                      className="hover:underline"
                    >
                      <Icons.spotify className="size-4 dark:text-[#1ed760]" />
                    </a>
                  )}
                </span>
              ) : (
                "Nothing"
              )}
            </div>

            {/* Artist names */}
            <div className={cn("text-sm text-neutral-700 dark:text-neutral-300", props.compact && "text-xs")}>
              {track?.artists
                .map<ReactNode>((artist) => (
                  <a
                    key={artist.id}
                    href={artist.external_urls.spotify}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {artist.name}
                  </a>
                ))
                .reduce((prev, curr) => [prev, ", ", curr]) ?? "Come back later"}
            </div>

            {track && !props.hideSpotifyURI && !props.compact && (
              <a
                href={track.uri}
                target="_blank"
                rel="noreferrer"
                className="mt-1 flex w-fit flex-wrap items-center gap-1 hover:underline"
              >
                <Icons.spotify className="size-5 dark:text-[#1ed760]" />
                Open in Spotify
              </a>
            )}
          </div>
        </div>

        {/* Track progress */}
        <SpotifyCurrentTrackProgress
          key={playbackState?.progress_ms ?? 0}
          type={props.barType}
          playbackState={
            playbackState
              ? {
                  initialProgress: playbackState.progress_ms,
                  duration: track?.duration_ms ?? 0,
                  isPlaying: playbackState.is_playing,
                }
              : undefined
          }
          refreshOnEnd={!!track && props.refreshOnEnd}
        />
      </div>
    </>
  );
};

export const SpotifyCurrentlyPlayingTrackSkeleton = ({
  barType,
  compact,
  currentlyPlayingText,
}: {
  barType: SpotifyCurrentlyPlayingTrackProgressType;
  compact?: boolean;
  currentlyPlayingText?: React.ReactElement | string;
}) => (
  <>
    {currentlyPlayingText}
    <div className="rounded hover:bg-gray-300 dark:hover:bg-gray-300/10">
      <div className={cn("flex items-center gap-5 p-2", compact && "gap-3 p-1")}>
        {/* Album image */}
        <img
          src={"/images/spotifylogo.png"}
          className={cn("shrink-0 h-24 w-24", compact && "h-10 w-10")}
          alt="Spotify logo"
          width={compact ? 40 : 96}
          height={compact ? 40 : 96}
        />

        <div className="flex flex-1 flex-col text-start">
          {/* Track name */}
          <div className={cn("font-semibold", !compact && "text-xl max-[380px]:text-lg")}>
            <span className="flex items-center gap-2">
              <span>Loading...</span>
            </span>
          </div>

          {/* Artist names */}
          <div className={cn("text-sm text-neutral-700 dark:text-neutral-300", compact && "text-xs")}>
            <span>Loading...</span>
          </div>
        </div>
      </div>

      {/* Track progress */}
      <SpotifyCurrentTrackProgress type={barType} />
    </div>
  </>
);
