import Icons from "@/features/icons/icons";
import { useQueryClient } from "@tanstack/react-query";
import { type ReactElement, useEffect, useState } from "react";
import formatDuration from "../utils/formatDuration";

export type SpotifyCurrentlyPlayingTrackProgressType =
  | "time"
  | "bar"
  | "combined"
  | "combinedTextTop"
  | "combinedTextBottom";

type Props = {
  type: SpotifyCurrentlyPlayingTrackProgressType;
  playbackState?: {
    isPlaying: boolean;
    duration: number;
    initialProgress: number;
  };
  refreshOnEnd?: boolean;
};

export const SpotifyCurrentTrackProgress = ({ type, playbackState, refreshOnEnd }: Props): ReactElement => {
  const queryClient = useQueryClient();
  const { duration = 0, isPlaying = false, initialProgress = 0 } = playbackState || {};
  const [progress, setProgress] = useState(initialProgress);

  // Update progress every second
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          // Clamp to duration (make sure bar or timer never overflows)
          const clampedProgress = Math.min(prev + 1000, duration);

          // Stop updating once progress >= duration
          if (clampedProgress >= duration) clearInterval(interval);

          // Return new progress
          return clampedProgress;
        });
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isPlaying, duration]);

  // Invalidate query on track end
  useEffect(() => {
    if (refreshOnEnd && playbackState && progress >= duration) {
      queryClient.invalidateQueries({
        queryKey: ["music", "currentlyPlayingTrack"],
      });
    }
  }, [duration, playbackState, progress, queryClient.invalidateQueries, refreshOnEnd]);

  if (type === "time") {
    return (
      <span className="text-right text-sm ml-2 text-neutral-700 max-[380px]:hidden dark:text-neutral-300">
        <Progress playbackState={playbackState} progress={progress} />
      </span>
    );
  }

  if (type === "bar") {
    return <ProgressBar progress={progress} duration={duration} showPauseIcon={!isPlaying} />;
  }

  if (type === "combined") {
    return (
      <div className="flex items-center gap-2 tabular-nums">
        <span className={"ms-1 w-[40px] inline-flex justify-end text-sm text-neutral-700 dark:text-neutral-300"}>
          <Progress playbackState={playbackState} progress={progress} />
        </span>

        <ProgressBar progress={progress} duration={duration} style={{ flex: "1 1 0%" }} />

        <span className="me-1 w-[40px] text-left text-sm text-neutral-700 dark:text-neutral-300">
          {formatDuration(duration)}
        </span>
      </div>
    );
  }

  if (type === "combinedTextTop") {
    return (
      <div>
        <div className="mx-1 flex items-center justify-between tabular-nums">
          <span className="text-sm text-neutral-700 dark:text-neutral-300">
            <Progress playbackState={playbackState} progress={progress} />
          </span>
          <span className="text-sm text-neutral-700 dark:text-neutral-300">{formatDuration(duration)}</span>
        </div>
        <ProgressBar progress={progress} duration={duration} />
      </div>
    );
  }

  if (type === "combinedTextBottom") {
    return (
      <div>
        <ProgressBar progress={progress} duration={duration} />
        <div className="mx-1 flex items-center justify-between tabular-nums">
          <span className="text-sm text-neutral-700 dark:text-neutral-300">
            <Progress playbackState={playbackState} progress={progress} />
          </span>
          <span className="text-sm text-neutral-700 dark:text-neutral-300">{formatDuration(duration)}</span>
        </div>
      </div>
    );
  }

  return <ProgressBar progress={progress} duration={duration} />;
};

const ProgressBar = ({
  progress,
  duration = 0,
  showPauseIcon,
  style,
}: {
  progress: number;
  duration: number;
  showPauseIcon?: boolean;
  style?: React.CSSProperties;
}) => {
  const progressDecimal = duration ? (progress / duration) * 100 : 0;

  return (
    <div className={"relative h-1 bg-neutral-400 dark:bg-[#4d4d4d]"} style={style}>
      <div
        className={"h-full bg-neutral-700 dark:bg-white"}
        style={{ width: showPauseIcon ? 0 : `${progressDecimal.toFixed(2)}%` }}
      />

      {/* Pause icon */}
      {showPauseIcon && duration !== 0 && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-transparent"
          style={{ pointerEvents: "none" }}
        >
          <PauseIcon />
        </div>
      )}
    </div>
  );
};

const PauseIcon = () => <Icons.pause className="size-4" />;

type ProgressProps = {
  playbackState: Props["playbackState"];
  progress: number;
};

// Display "0:00" when playbackState is undefined
// Display actual progress when isPlaying is true
// Display pause icon when isPlaying is false
const Progress = ({ playbackState, progress }: ProgressProps) => {
  if (!playbackState) {
    return "0:00";
  }

  return playbackState.isPlaying ? formatDuration(progress) : <PauseIcon />;
};
