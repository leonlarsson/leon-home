import { Suspense } from "react";
import { profanity } from "@2toad/profanity";
import EntriesDisplaySettings from "./EntriesDisplaySettings";
import ButtonActionRow from "./ButtonActionRow";
import EntryTimestamp from "./EntryTimestamp";
import { getEntries, getEntriesCount } from "../lib/actions";
import Icons from "../../components/icons";

type PageProps = { userEmail: string | null; namedEntriesOnly: boolean };

export default async ({ userEmail, namedEntriesOnly }: PageProps) => {
  return (
    <section className="flex flex-col text-start">
      <div className="mb-2">
        <EntriesDisplaySettings />
      </div>

      <Suspense
        fallback={
          <span className="flex items-center gap-1">
            <Icons.spinner className="inline animate-spin" /> Loading total entries...
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
          <EntriesList userEmail={userEmail} namedEntriesOnly={namedEntriesOnly} />
        </div>
      </Suspense>
    </section>
  );
};

const EntriesCount = async ({ namedEntriesOnly }: { namedEntriesOnly: boolean }) => {
  const totalEntries = await getEntriesCount(namedEntriesOnly);
  return <span className="mb-1">{totalEntries !== false ? `${totalEntries.toLocaleString("en")} total entries (showing last 100)` : <span className="text-red-500 dark:text-red-400">Failed to get total entry count.</span>}</span>;
};

const EntriesList = async ({ userEmail, namedEntriesOnly }: { userEmail: string | null; namedEntriesOnly: boolean }) => {
  const entries = await getEntries(namedEntriesOnly);
  if (!entries) return <span className="text-red-500 dark:text-red-400">Failed to get entries.</span>;
  const userIsAdmin = !!userEmail && !!process.env.ADMIN_EMAIL && userEmail === process.env.ADMIN_EMAIL;

  if (!entries.length) return <span>Awaiting entries... Be the first one!</span>;

  return entries.map(entry => (
    <div key={entry.id} className="break-all rounded-r border-l-2 border-transparent p-1 text-sm hover:border-l-black hover:bg-gray-300 dark:hover:border-l-white dark:hover:bg-gray-300/10">
      <EntryTimestamp date={entry.date} />
      {userIsAdmin || (userEmail && userEmail === entry.email) ? <ButtonActionRow entry={entry} /> : null}
      <span className={entry.name ? "text-neutral-700 dark:text-neutral-400" : "italic text-neutral-700 dark:text-neutral-400"} title={entry.date.toLocaleString()}>
        {entry.name ?? "Anonymous"}:
      </span>{" "}
      <span>{profanity.censor(entry.body.replace(/\s+/g, " "))}</span>
      {entry.edited_at && (
        <span className="ms-1 select-none break-normal text-xs text-neutral-600 dark:text-neutral-400" title={`Edited ${entry.edited_at.toLocaleString()}`}>
          (edited)
        </span>
      )}
    </div>
  ));
};
