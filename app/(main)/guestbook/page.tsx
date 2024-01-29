import { Suspense } from "react";
import type { Metadata } from "next";
import { auth } from "../auth";
import generateOGMetadata from "@/app/utils/generateOGMetadata";
import {
  SignInDiscord,
  SignInGitHub,
  SignOut,
} from "../components/AuthButtons";
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
  searchParams: {
    named?: string;
  };
};

export default ({ searchParams }: Props) => {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="text-3xl font-extrabold">Guestbook</div>
      <div className="mb-3">
        A guestbook where you can send an emoji or sign in to send a message.
      </div>

      <Suspense fallback="Loading...">
        <MainSection searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

const MainSection = async ({ searchParams }: Props) => {
  const namedEntriesOnly = searchParams.named === "true";
  let session;
  const requireAuth = process.env.REQUIRE_AUTH === "true";
  if (requireAuth) session = await auth();

  return (
    <>
      <div className="flex flex-col justify-center gap-1">
        {requireAuth ? (
          session?.user?.name ? (
            // If requireAuth, and name exists, user is logged in. Show the message area in text mode and the commenter info
            <>
              <SendMessageSection mode="text" />
              <span className="text-sm">
                Commenting as {session.user.name}{" "}
                <span className="whitespace-nowrap">
                  (<SignOut />)
                </span>
              </span>
            </>
          ) : (
            // If requireAuth, and name doesn't exist, user is not logged in. Show the message area in emoji mode and the sign in buttons
            <>
              <SendMessageSection mode="emoji" />
              <div className="mt-1 flex flex-wrap justify-center gap-1">
                <SignInDiscord />
                <SignInGitHub />
              </div>
            </>
          )
        ) : (
          // If !requireAuth, show the message area in mode text
          <SendMessageSection mode="text" />
        )}
      </div>

      <GradientBorder extraClasses="my-2">
        <div className="p-px" />
      </GradientBorder>

      <GuestbookProvider>
        <Suspense fallback="Loading messages...">
          <Entries
            userEmail={session?.user?.email ?? null}
            namedEntriesOnly={namedEntriesOnly}
          />
        </Suspense>
      </GuestbookProvider>
    </>
  );
};
