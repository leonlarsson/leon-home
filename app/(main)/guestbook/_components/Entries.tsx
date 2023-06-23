import { getEntries } from "../actions";

export default async () => {
  const res = await getEntries();
  if (!res.ok) return <span className="text-red-500">Failed to fetch messages.</span>;
  const entries: Entry[] = await res.json();

  return (
    <section>
      {entries
        .sort((a, b) => b.date - a.date)
        .map(entry => (
          <div key={entry.id} className="mb-2 select-text break-words text-left text-sm">
            <b title={new Date(entry.date).toUTCString()}>Someone wrote:</b> <span className="break-all">{entry.body}</span>
          </div>
        ))}
      {!entries.length && <span>Awaiting messages...</span>}
    </section>
  );
};

type Entry = {
  id: string;
  date: number;
  body: string;
};
