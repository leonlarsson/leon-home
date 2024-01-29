"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import formatDuration from "../lib/formatDuration";
import Icons from "../../components/icons";

type Props = {
  type: "time" | "bar" | "combined" | "combinedTextTop" | "combinedTextBottom";
  isPlaying: boolean;
  initialProgress: number;
  duration: number;
  reloadOnEnd?: boolean;
};

export default ({
  type,
  isPlaying,
  initialProgress,
  duration,
  reloadOnEnd,
}: Props): JSX.Element => {
  const router = useRouter();
  const [progress, setProgress] = useState(initialProgress);

  // Update progress every second
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress(prev => {
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
  }, []);

  // Refresh page when track ends
  useEffect(() => {
    if (reloadOnEnd && progress >= duration) router.refresh();
  }, [progress]);

  if (type === "time")
    return (
      <span className="text-right text-sm text-neutral-700 max-[380px]:hidden dark:text-neutral-300">
        {isPlaying ? formatDuration(progress) : <PauseIcon />} /{" "}
        {formatDuration(duration)}
      </span>
    );

  if (type === "bar")
    return <ProgressBar progress={progress} duration={duration} />;

  if (type === "combined")
    return (
      <div className="flex items-center gap-2">
        <span
          className={`ms-1 ${
            isPlaying ? "min-w-[40px]" : ""
          } text-right text-sm text-neutral-700 dark:text-neutral-300`}
        >
          {isPlaying ? formatDuration(progress) : <PauseIcon />}
        </span>

        <ProgressBar
          progress={progress}
          duration={duration}
          extraClasses="flex-1"
        />

        <span className="me-1 min-w-[40px] text-left text-sm text-neutral-700 dark:text-neutral-300">
          {formatDuration(duration)}
        </span>
      </div>
    );

  if (type === "combinedTextTop")
    return (
      <div>
        <div className="mx-1 flex items-center justify-between">
          <span className="text-sm text-neutral-700 dark:text-neutral-300">
            {isPlaying ? formatDuration(progress) : <PauseIcon />}
          </span>
          <span className="text-sm text-neutral-700 dark:text-neutral-300">
            {formatDuration(duration)}
          </span>
        </div>
        <ProgressBar progress={progress} duration={duration} />
      </div>
    );

  if (type === "combinedTextBottom")
    return (
      <div>
        <ProgressBar progress={progress} duration={duration} />
        <div className="mx-1 flex items-center justify-between">
          <span className="text-sm text-neutral-700 dark:text-neutral-300">
            {isPlaying ? formatDuration(progress) : <PauseIcon />}
          </span>
          <span className="text-sm text-neutral-700 dark:text-neutral-300">
            {formatDuration(duration)}
          </span>
        </div>
      </div>
    );

  return <ProgressBar progress={progress} duration={duration} />;
};

const ProgressBar = ({
  progress,
  duration,
  extraClasses,
}: {
  extraClasses?: string;
  progress: number;
  duration: number;
}) => (
  <div className={`h-1 bg-neutral-400 dark:bg-[#4d4d4d] ${extraClasses}`}>
    <div
      className="h-full bg-neutral-700 dark:bg-white"
      style={{ width: ((progress / duration) * 100).toFixed(2) + "%" }}
    />
  </div>
);

const PauseIcon = () => <Icons.pause className="size-4" />;
