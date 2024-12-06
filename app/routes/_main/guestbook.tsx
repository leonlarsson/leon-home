import { GradientBorder } from "@/features/common/GradientBorder";
import { GuestbookEntries } from "@/features/guestbook/components/GuestbookEntries";
import { GuestbookEntriesSettings } from "@/features/guestbook/components/GuestbookEntriesSettings";
import { GuestbookSendMessageSection } from "@/features/guestbook/components/GuestbookSendMessageSection";
import { getEntries, getEntriesCount } from "@/features/guestbook/functions";
import Icons from "@/features/icons/icons";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { createServerFn, useServerFn } from "@tanstack/start";
import { z } from "zod";

const getGuestbookEntriesServerFn = createServerFn()
  .validator((data: { namedEntriesOnly: boolean }) => data)
  .handler(async (ctx) => {
    const [entries, entriesCount] = await Promise.all([
      getEntries(ctx.data.namedEntriesOnly),
      getEntriesCount(ctx.data.namedEntriesOnly),
    ]);

    return {
      entries,
      entriesCount,
    };
  });

const guestbookPageSearchParams = z.object({
  named: z.boolean().optional(),
  showTimestamps: z.boolean().optional(),
});

export const Route = createFileRoute("/_main/guestbook")({
  component: RouteComponent,
  validateSearch: guestbookPageSearchParams.parse,
});

function RouteComponent() {
  const { named, showTimestamps } = Route.useSearch();
  const getData = useServerFn(getGuestbookEntriesServerFn);

  const query = useQuery({
    queryKey: ["guestbook", "entryData", named],
    queryFn: () => getData({ data: { namedEntriesOnly: !!named } }),
    refetchInterval: 10_000, // 10 seconds
  });

  return (
    <div className="mx-auto max-w-3xl">
      <div className="text-3xl font-extrabold">Guestbook</div>
      <div className="mb-3">A guestbook where you can send a message.</div>

      <div className="flex flex-col justify-center gap-1">
        <GuestbookSendMessageSection showNameInput />
      </div>

      <GradientBorder style={{ marginTop: 8, marginBottom: 8 }}>
        <div className="p-px" />
      </GradientBorder>

      <div className="mb-2">
        <GuestbookEntriesSettings />
      </div>

      {query.status === "pending" && (
        <div style={{ display: "flex", gap: 5, alignContent: "center" }}>
          <Icons.spinner className="inline animate-spin h-6 w-6" /> Loading entries...
        </div>
      )}

      {query.status === "success" && (
        <GuestbookEntries
          entries={query.data.entries}
          entriesCount={query.data.entriesCount}
          showTimestamps={!!showTimestamps}
        />
      )}
    </div>
  );
}
