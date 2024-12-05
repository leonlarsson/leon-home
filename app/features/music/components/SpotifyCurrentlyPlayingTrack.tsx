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
                  <a
                    href={track.item.external_urls.spotify}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {track.item.name}
                  </a>

                  {!props.hideSpotifyURI && props.compact && (
                    <a
                      href={track.item.uri}
                      target="_blank"
                      rel="noreferrer"
                      title="Open in Spotify"
                      className="hover:underline"
                    >
                      <Icons.spotify className="size-4 text-[#1ed760]" />
                    </a>
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
                .reduce((prev: ReactNode, curr: ReactNode) => [prev, ", ", curr]) ?? "Come back later"}
            </div>

            {track && !props.hideSpotifyURI && !props.compact && (
              <a
                href={track.item.uri}
                target="_blank"
                rel="noreferrer"
                className="mt-1 flex w-fit flex-wrap items-center gap-1 hover:underline"
              >
                <Icons.spotify className="size-5 text-[#1ed760]" />
                Open in Spotify
              </a>
            )}
          </div>
        </div>

        {/* Track progress */}
        <SpotifyCurrentTrackProgress
          key={track?.progress_ms ?? 0}
          type="combined"
          isPlaying={!!track?.is_playing}
          initialProgress={track?.progress_ms ?? 0}
          duration={track?.item.duration_ms ?? 0}
          refreshOnEnd={!!track && props.refreshOnEnd}
        />
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
  <>
    {currentlyPlayingText}
    <div className="rounded hover:bg-gray-300 dark:hover:bg-gray-300/10">
      <div className={`flex items-center ${compact ? "gap-3 p-1" : "gap-5 p-2"}`}>
        {/* Album image */}
        <img
          src={"/images/spotifylogo.png"}
          className={`${compact ? "h-10 w-10" : "h-24 w-24"} shrink-0`}
          alt="Spotify logo"
          width={compact ? 40 : 96}
          height={compact ? 40 : 96}
        />

        <div className="flex flex-1 flex-col text-start">
          {/* Track name */}
          <div className={`${compact ? "" : "text-xl max-[380px]:text-lg"} font-semibold`}>
            <span className="flex items-center gap-2">
              <span className="hover:underline">Loading...</span>
            </span>
          </div>

          {/* Artist names */}
          <div className={`${compact ? "text-xs" : "text-sm"} text-neutral-700 dark:text-neutral-300`}>
            <span>Loading...</span>
          </div>
        </div>
      </div>

      {/* Track progress */}
      <SpotifyCurrentTrackProgress
        key={0}
        type="combined"
        isPlaying={true}
        initialProgress={0}
        duration={0}
        refreshOnEnd={false}
      />
    </div>
  </>
);
