import { Suspense } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { getRequireAuth } from "./lib/actions";
import { SignInDiscord, SignInGitHub } from "./_components/AuthButtons";
import SendMessageSection from "./_components/SendMessageSection";
import CommenterInfo from "./_components/CommenterInfo";
import Entries from "./_components/Entries";

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
  const userIsAdmin = session?.user?.email && process.env.ADMIN_EMAIL && session.user.email === process.env.ADMIN_EMAIL;

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Link href="/" className="group text-3xl font-extrabold max-[450px]:text-2xl" title="Go back" draggable={false}>
        <i className="fa-solid fa-arrow-left transition-all group-hover:-translate-x-2 group-hover:text-red-400 group-active:-translate-x-3 group-active:text-red-500" /> Guestbook
      </Link>
      <span className="mb-3">A guestbook where you can send an emoji or sign in to send a message.</span>

      <div className="mb-4 flex flex-col justify-center gap-1">
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

      <hr className="border-1 mb-4 h-px w-full border-black dark:border-kinda-white/50" />

      <Suspense fallback="Loading messages...">
        {/* @ts-expect-error */}
        <Entries admin={userIsAdmin} />
      </Suspense>
    </div>
  );
};
