"use client";

import { useContext } from "react";
import { GuestbookContextType, GuestbookContext } from "./GuestbookContext";

export default ({ date }: { date: Date }) => {
  const { showTimestamps } = useContext(
    GuestbookContext,
  ) as GuestbookContextType;
  return (
    showTimestamps && (
      <div className="text-xs text-neutral-600 dark:text-neutral-500">
        {date.toLocaleString()}
      </div>
    )
  );
};
