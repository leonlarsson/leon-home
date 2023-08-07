import { Suspense } from "react";
import { profanity } from "@2toad/profanity";
import ButtonActionRow from "./ButtonActionRow";
import { getEntries, getEntriesCount } from "../lib/actions";

type Props = { userEmail: string | null };

export default async ({ userEmail }: Props) => {
  return (
    <section className="flex flex-col text-start">
      <Suspense
        fallback={
          <span>
            <i className="fa-solid fa-spinner fa-spin" /> Loading total entries...
          </span>
        }
      >
        <EntriesCount />
      </Suspense>

      <Suspense
        fallback={
          <span>
            <i className="fa-solid fa-spinner fa-spin" /> Loading entries...
          </span>
        }
      >
        <EntriesList userEmail={userEmail} />
      </Suspense>
    </section>
  );
};

const EntriesCount = async () => {
  const totalEntries = await getEntriesCount();
  return <span className="mb-1">{totalEntries !== false ? `${totalEntries.toLocaleString("en")} total messages (showing last 100)` : <span className="text-red-500 dark:text-red-400">Failed to get total entry count.</span>}</span>;
};

const EntriesList = async ({ userEmail }: Props) => {
  const entries = await getEntries();
  if (!entries) return <span className="text-red-500 dark:text-red-400">Failed to get entries.</span>;
  const userIsAdmin = !!userEmail && !!process.env.ADMIN_EMAIL && userEmail === process.env.ADMIN_EMAIL;

  if (!entries.length) return <span>Awaiting messages... Be the first one!</span>;

  return entries.map(entry => (
    <div key={entry.id} className="break-all rounded p-1 text-sm hover:bg-gray-300 dark:hover:bg-gray-300/10">
      {userIsAdmin || (userEmail && userEmail === entry.email) ? <ButtonActionRow entry={entry} /> : null}{" "}
      <span className={entry.name ? "font-semibold dark:text-kinda-white" : "text-kinda-black/90 dark:text-kinda-white/75"} title={`${entry.date} UTC`}>
        {entry.name ?? "Anonymous"}:
      </span>{" "}
      <span>{profanity.censor(entry.body.replace(/\s+/g, " "))}</span>
      {entry.last_edited && (
        <span className="ms-1 select-none break-normal text-xs text-neutral-600 dark:text-neutral-400" title={`Edited ${entry.last_edited} UTC`}>
          (edited)
        </span>
      )}
    </div>
  ));
};
