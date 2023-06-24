import { Suspense } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { SignIn } from "./_components/Auth";
import Entries from "./_components/Entries";
import Form from "./_components/Form";

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

const requireAuth = true;

export default async () => {
  let session;
  // const requireAuth = await get(process.env.APP_ENV === "prod" ? "requireAuth_prod" : "requireAuth_dev");
  console.log("VERCEL_ENV", process.env.VERCEL_ENV);
  console.log("NODE_ENV", process.env.NODE_ENV);

  if (requireAuth) session = await getServerSession();

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Link href="/" className="group text-3xl font-extrabold max-[450px]:text-2xl" title="Go back" draggable={false}>
        <i className="fa-solid fa-arrow-left transition-all group-hover:-translate-x-2 group-hover:text-red-400 group-active:-translate-x-3 group-active:text-red-600" /> Guestbook
      </Link>
      <span className="mb-4">A guestbook created with Next.js Server Actions and Cloudflare D1. Below you will see the last 100 messages.</span>

      {requireAuth ? (
        session?.user?.name ? (
          <>
            <Form name={session.user.name} />
            <span className="mb-4 text-sm">Commenting as {session.user.name}</span>
          </>
        ) : (
          <>
            <Form emoteOnlyMode={true} />
            <SignIn />
          </>
        )
      ) : (
        <div className="mb-4">
          <Form />
        </div>
      )}

      <Suspense fallback="Loading messages...">
        {/* @ts-expect-error */}
        <Entries admin={session?.user?.email && process.env.ADMIN_EMAIL && session.user.email === process.env.ADMIN_EMAIL} />
      </Suspense>
    </div>
  );
};
