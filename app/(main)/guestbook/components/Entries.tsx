import { profanity } from "@2toad/profanity";
import ButtonActionRow from "./ButtonActionRow";
import { getEntries, getEntriesCount } from "../lib/actions";

export default async ({ userEmail }: { userEmail: string | null }) => {
  const [totalEntries, entries] = await Promise.all([getEntriesCount(), getEntries()]);
  if (!entries) return <span className="text-red-500 dark:text-red-400">Failed to fetch messages.</span>;
  const userIsAdmin = !!userEmail && !!process.env.ADMIN_EMAIL && userEmail === process.env.ADMIN_EMAIL;

  return (
    <section className="flex flex-col text-start">
      {totalEntries !== false && <span className="mb-1">{totalEntries.toLocaleString("en")} total entries</span>}
      {entries.map(entry => (
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
      ))}
      {!entries.length && <span>Awaiting messages...</span>}
    </section>
  );
};
