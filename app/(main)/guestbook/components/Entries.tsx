import { Suspense } from "react";
import { profanity } from "@2toad/profanity";
import EntriesDisplaySettings from "./EntriesDisplaySettings";
import EntryTimestamp from "./EntryTimestamp";
import { getEntries, getEntriesCount } from "../lib/actions";
import Icons from "../../components/icons";

type PageProps = { namedEntriesOnly: boolean };

export default async ({ namedEntriesOnly }: PageProps) => {
  return (
    <section className="flex flex-col text-start">
      <div className="mb-2">
        <EntriesDisplaySettings />
      </div>

      <Suspense
        fallback={
          <span className="flex items-center gap-1">
            <Icons.spinner className="inline animate-spin" /> Loading total
            entries...
          </span>
        }
      >
        <EntriesCount namedEntriesOnly={namedEntriesOnly} />
      </Suspense>

      <Suspense
        fallback={
          <span className="flex items-center gap-1">
            <Icons.spinner className="inline animate-spin" /> Loading entries...
          </span>
        }
      >
        <div className="flex flex-col gap-1">
          <EntriesList namedEntriesOnly={namedEntriesOnly} />
        </div>
      </Suspense>
    </section>
  );
};

const EntriesCount = async ({
  namedEntriesOnly,
}: {
  namedEntriesOnly: boolean;
}) => {
  const totalEntries = await getEntriesCount(namedEntriesOnly);
  return (
    <span className="mb-1">
      {totalEntries !== false ? (
        `${totalEntries.toLocaleString("en")} total entries (showing last 100)`
      ) : (
        <span className="text-red-500 dark:text-red-400">
          Failed to get total entry count.
        </span>
      )}
    </span>
  );
};

const EntriesList = async ({
  namedEntriesOnly,
}: {
  namedEntriesOnly: boolean;
}) => {
  const entries = await getEntries(namedEntriesOnly);

  if (!entries)
    return (
      <span className="text-red-500 dark:text-red-400">
        Failed to get entries.
      </span>
    );

  if (!entries.length)
    return <span>Awaiting entries... Be the first one!</span>;

  return entries.map(entry => (
    <div
      key={entry.id}
      className="break-all rounded-r border-l-2 border-transparent p-1 text-sm hover:border-l-black hover:bg-gray-300 dark:hover:border-l-white dark:hover:bg-gray-300/10"
    >
      <EntryTimestamp date={entry.date} />
      <span
        className={
          entry.name
            ? "text-neutral-700 dark:text-neutral-400"
            : "italic text-neutral-700 dark:text-neutral-400"
        }
        title={entry.date.toLocaleString()}
      >
        {entry.name ? entry.name.replace(/\s+/g, " ") : "Anonymous"}:
      </span>{" "}
      <span>{profanity.censor(entry.body.replace(/\s+/g, " "))}</span>
    </div>
  ));
};
