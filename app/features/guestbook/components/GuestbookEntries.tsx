import type { GuestbookEntryWithoutIp } from "@/types";
import { cn } from "@/utils/cn";
import { profanity } from "@2toad/profanity";

type GuestbookEntriesProps = { entries: GuestbookEntryWithoutIp[]; entriesCount: number; showTimestamps: boolean };

export const GuestbookEntries = (props: GuestbookEntriesProps) => {
  return (
    <section className="flex flex-col text-start">
      <span className="mb-1">{props.entriesCount.toLocaleString("en")} total entries (showing last 100)</span>

      <div className="flex flex-col gap-1">
        {!props.entries.length && <span>Awaiting entries... Be the first one!</span>}

        {props.entries.map((entry) => (
          <div
            key={entry.id}
            className={cn(
              "break-all rounded-r border-l-2 border-transparent p-1 pl-2 text-sm hover:border-l-black hover:bg-neutral-200 dark:hover:border-l-white dark:hover:bg-gray-300/10",
              entry.isAdmin && "border-l-yellow-400",
            )}
          >
            {props.showTimestamps && (
              <div className="text-xs text-neutral-600 dark:text-neutral-500">{entry.date.toLocaleString()}</div>
            )}
            <span
              className={cn(
                entry.name ? "text-neutral-700 dark:text-neutral-400" : "italic text-neutral-700 dark:text-neutral-400",
              )}
              title={entry.date.toLocaleString()}
            >
              {entry.name ? entry.name.replace(/\s+/g, " ") : "Anonymous"}:
            </span>{" "}
            <span>{profanity.censor(entry.body.replace(/\s+/g, " "))}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
