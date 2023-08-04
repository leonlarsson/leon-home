import { Suspense } from "react";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { getRequireAuth } from "./lib/actions";
import { SignInDiscord, SignInGitHub } from "../components/AuthButtons";
import SendMessageSection from "./components/SendMessageSection";
import CommenterInfo from "./components/CommenterInfo";
import Entries from "./components/Entries";
import GradientBorder from "../components/GradientBorder";

const pageTitle = "Guestbook | Leon San José Larsson";
const pageDescription = "A guestbook where you can send public messages to me.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    type: "website",
    url: "https://leonlarsson.com/guestbook",
    title: pageTitle,
    description: pageDescription
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    creator: "@mozzyfx"
  }
};

export default async () => {
  let session;
  const requireAuth = await getRequireAuth();
  if (requireAuth) session = await getServerSession();
  const userIsAdmin = Boolean(session?.user?.email && process.env.ADMIN_EMAIL && session.user.email === process.env.ADMIN_EMAIL);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="text-3xl font-extrabold">Guestbook</div>
      <div className="mb-3">A guestbook where you can send an emoji or sign in to send a message.</div>

      <div className="flex flex-col justify-center gap-1">
        {requireAuth ? (
          session?.user?.name ? (
            // If requireAuth, and name exists, user is logged in. Show the message area in text mode and the commenter info
            <>
              <SendMessageSection mode="text" />
              <CommenterInfo name={session.user.name} />
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

      <Suspense fallback="Loading messages...">
        <Entries admin={userIsAdmin} />
      </Suspense>
    </div>
  );
};
