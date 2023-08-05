"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { postPost } from "../lib/actions";

export default () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isInserting, setIsInserting] = useState(false);
  const [isError, setIsError] = useState(false);
  const isMutating = isInserting || isPending;

  // Send the message to the API
  const postPostFunc = async (title: string, body: string): Promise<boolean> => {
    setIsInserting(true);
    setIsError(false);
    // SERVER ACTION
    const postWasInserted = await postPost(title, body);
    setIsInserting(false);

    postWasInserted ? startTransition(() => router.refresh()) : setIsError(true);
    return postWasInserted;
  };

  return (
    <>
      <form
        onSubmit={async event => {
          event.preventDefault();
          const form = event.currentTarget;
          const title = form.elements.namedItem("title") as HTMLInputElement;
          const body = form.elements.namedItem("body") as HTMLInputElement;
          const postWasOk = await postPostFunc(title.value, body.value);
          if (postWasOk) form.reset();
        }}
        className="flex flex-col gap-2"
      >
        <input className="text-input disabled:cursor-not-allowed disabled:bg-neutral-300 dark:disabled:bg-neutral-600" type="text" name="title" placeholder="Title" required disabled={isMutating} />
        <textarea className="text-input disabled:cursor-not-allowed disabled:bg-neutral-300 dark:disabled:bg-neutral-600" name="body" placeholder="Body" required disabled={isMutating} />
        <button className="button-with-border disabled:cursor-not-allowed disabled:bg-neutral-300 dark:disabled:bg-neutral-600" type="submit" disabled={isMutating}>
          Post
        </button>
      </form>
      {isError && <span className="mt-1 text-red-500 dark:text-red-400">Failed to send message.</span>}
    </>
  );
};
