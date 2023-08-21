"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import formatDuration from "../lib/formatDuration";

type Props = {
  isPlaying: boolean;
  initialProgress: number;
  duration: number;
  reloadOnEnd?: boolean;
};

export default ({ isPlaying, initialProgress, duration, reloadOnEnd }: Props) => {
  const router = useRouter();
  const [progress, setProgress] = useState(initialProgress);

  // Update progress every second
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress(prev => {
          // Clamp to duration (make sure "3:44 / 3:43" etc. is never shown)
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

  return (
    <span className="text-right text-sm text-neutral-700 dark:text-neutral-300 max-[380px]:hidden">
      {isPlaying ? formatDuration(progress) : <i className="fa-solid fa-pause" />} / {formatDuration(duration)}
    </span>
  );
};
