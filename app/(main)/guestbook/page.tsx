import { Suspense } from "react";
import type { Metadata } from "next";
import generateOGMetadata from "@/app/utils/generateOGMetadata";
import SendMessageSection from "./components/SendMessageSection";
import Entries from "./components/Entries";
import GradientBorder from "../components/GradientBorder";
import { GuestbookProvider } from "./components/GuestbookContext";

const pageTitle = "Guestbook";
const pageDescription = "A guestbook where you can send public messages to me.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  ...generateOGMetadata({
    title: pageTitle,
    description: pageDescription,
    url: "https://leonlarsson.com/guestbook",
    appendNameInOG: true,
  }),
};

type Props = {
  searchParams: Promise<{
    named?: string;
  }>;
};

export default async (props: Props) => {
  const searchParams = await props.searchParams;
  return (
    <div className="mx-auto max-w-3xl">
      <div className="text-3xl font-extrabold">Guestbook</div>
      <div className="mb-3">A guestbook where you can send a message.</div>

      <Suspense fallback="Loading...">
        <MainSection named={searchParams.named} />
      </Suspense>
    </div>
  );
};

type MainSectionProps = {
  named?: string;
};

const MainSection = async (props: MainSectionProps) => {
  const namedEntriesOnly = props.named === "true";

  return (
    <>
      <div className="flex flex-col justify-center gap-1">
        <SendMessageSection showNameInput />
      </div>

      <GradientBorder style={{ marginTop: 8, marginBottom: 8 }}>
        <div className="p-px" />
      </GradientBorder>

      <GuestbookProvider>
        <Suspense fallback="Loading messages...">
          <Entries namedEntriesOnly={namedEntriesOnly} />
        </Suspense>
      </GuestbookProvider>
    </>
  );
};
