"use client";

import { useState, useEffect } from "react";

type Props = {
  isPlaying: boolean;
  initialProgress: number;
  duration: number;
};

export default ({ isPlaying, initialProgress, duration }: Props) => {
  const [progress, setProgress] = useState(initialProgress);

  // Update progress every second
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress(prev => {
          // Clamp to duration (make sure bar never overflows)
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

  return (
    <div className="h-1 bg-neutral-400 dark:bg-[#4d4d4d]">
      <div className="h-full bg-neutral-700 dark:bg-white" style={{ width: ((progress / duration) * 100).toFixed(2) + "%" }} />
    </div>
  );
};
