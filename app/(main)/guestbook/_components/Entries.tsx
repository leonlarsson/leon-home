import { profanity } from "@2toad/profanity";
import DeleteEntryButton from "./DeleteEntryButton";
import { getEntries } from "../apiActions";

export default async ({ admin }: { admin: boolean }) => {
  const res = await getEntries();
  if (!res.ok) return <span className="text-red-500 dark:text-red-400">Failed to fetch messages.</span>;
  const entries: Entry[] = await res.json();

  return (
    <section className="flex flex-col">
      {entries.map(entry => (
        <div key={entry.id} className="select-text break-all rounded p-1 text-left text-sm hover:bg-gray-300 dark:hover:bg-gray-300/10">
          {admin && <DeleteEntryButton id={entry.id} />}{" "}
          <span className={entry.name ? "font-semibold dark:text-kinda-white" : "text-kinda-black/90 dark:text-kinda-white/75"} title={new Date(entry.date).toUTCString()}>
            {entry.name ?? "Anonymous"}:
          </span>{" "}
          <span>{profanity.censor(entry.body.replace(/\s+/g, " "))}</span>
        </div>
      ))}
      {!entries.length && <span>Awaiting messages...</span>}
    </section>
  );
};

export type Entry = {
  id: string;
  date: number;
  body: string;
  name?: string;
};
