import { createFileRoute } from "@tanstack/react-router"
import { queryOptions, useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { GradientBorder } from "../../features/common/GradientBorder";
import { GuestbookEntries } from "../../features/guestbook/components/GuestbookEntries";
import { GuestbookEntriesSettings } from "../../features/guestbook/components/GuestbookEntriesSettings";
import { GuestbookSendMessageSection } from "../../features/guestbook/components/GuestbookSendMessageSection";
import { $getGuestbookEntries } from "../../features/guestbook/functions";
import Icons from "../../features/icons/icons";
import { generateMetadata } from "../../utils/seo";

// Create the query options for the guestbook entries with some defaults
const getEntriesQueryOptions = (named: boolean) =>
  queryOptions({
    queryKey: ["guestbook", "entries", { named }],
    queryFn: () => $getGuestbookEntries({ data: { namedEntriesOnly: named } }),
    staleTime: 5_000, // Set stale time to 5 seconds
  });

const guestbookPageSearchParams = z.object({
  named: z.boolean().optional(),
  showTimestamps: z.boolean().optional(),
});

export const Route = createFileRoute("/_main/guestbook")({
  component: RouteComponent,
  validateSearch: guestbookPageSearchParams.parse,
  loader: ({ context: { queryClient } }) => {
    queryClient.prefetchQuery(getEntriesQueryOptions(false));
    queryClient.prefetchQuery(getEntriesQueryOptions(true));
  },
  head: () => {
    return {
      meta: generateMetadata({
        title: "Guestbook",
        description: "A guestbook where you can send public messages to me.",
        url: "https://leonlarsson.com/guestbook",
        ogImageUrl: "https://leonlarsson.com/images/og/guestbook.png",
        useTitleAsPrefix: true,
      }),
    };
  },
});

function RouteComponent() {
  const { named, showTimestamps } = Route.useSearch();
  const getData = useServerFn($getGuestbookEntries);

  const query = useQuery({
    ...getEntriesQueryOptions(!!named),
    queryFn: () => getData({ data: { namedEntriesOnly: !!named } }),
    refetchInterval: 10_000, // Refetch every 10 seconds
  });

  return (
    <div className="mx-auto max-w-3xl">
      <div className="text-3xl font-extrabold">Guestbook</div>
      <div className="mb-3">A guestbooks where you can send a message.</div>

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
