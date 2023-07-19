import { Suspense } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { SignInDiscord, SignInGitHub, SignOut } from "../components/AuthButtons";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

const pageTitle = "Journal | Leon San José Larsson";
const pageDescription = "An experimental journal.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    type: "website",
    url: "https://leonlarsson.com/journal",
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
  const session = await getServerSession();
  const userIsAdmin = Boolean(session?.user?.email && process.env.ADMIN_EMAIL && session.user.email === process.env.ADMIN_EMAIL);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Link href="/" className="group text-3xl font-extrabold max-[450px]:text-2xl" title="Go back" draggable={false}>
        <i className="fa-solid fa-arrow-left transition-all group-hover:-translate-x-2 group-hover:text-red-400" /> Journal
      </Link>
      <span className="mb-3">An experimental journal.</span>

      <div className="mb-4 flex flex-col justify-center gap-1">
        {userIsAdmin ? (
          <>
            <PostForm />
            <SignOut />
          </>
        ) : (
          <SignInGitHub />
        )}
      </div>

      <hr className="border-1 mb-4 h-px w-full border-black dark:border-kinda-white/50" />

      <Suspense fallback="Loading posts...">
        <Posts admin={userIsAdmin} />
      </Suspense>
    </div>
  );
};
