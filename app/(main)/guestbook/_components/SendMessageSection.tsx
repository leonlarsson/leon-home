"use client";

import { useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import EmojiSection from "./EmojiSection";
import { postEntry } from "../apiActions";

export default ({ mode, name }: { mode: "text" | "emoji"; name?: string }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const isMutating = isFetching || isPending;

  // Send the message to the API
  const postEntryFunc = async (message: string): Promise<boolean> => {
    setIsFetching(true);
    setIsError(false);
    // SERVER ACTION
    const postWasOk = await postEntry(message, name);
    setIsFetching(false);

    postWasOk ? startTransition(() => router.refresh()) : setIsError(true);
    return postWasOk;
  };

  return (
    <div>
      {mode === "emoji" ? <EmojiSection isMutating={isMutating} postEntryFunc={postEntryFunc} /> : <TextForm isPending={isPending} isMutating={isMutating} postEntryFunc={postEntryFunc} />}
      {isError && <span className="mt-1 text-red-500 dark:text-red-400">Failed to send message.</span>}
    </div>
  );
};

const TextForm = ({ isPending, isMutating, postEntryFunc }: { isPending: boolean; isMutating: boolean; postEntryFunc: (message: string) => Promise<boolean> }) => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      className="flex justify-center gap-2 max-[370px]:flex-col"
      ref={formRef}
      action={async formData => {
        const postWasOk = await postEntryFunc(formData.get("message") as string);
        if (postWasOk) formRef.current?.reset();
      }}
    >
      <input className="text-input disabled:cursor-not-allowed disabled:bg-neutral-300 dark:disabled:bg-neutral-600" type="text" name="message" placeholder="Your message..." required disabled={isPending} maxLength={50} />
      <button className="button-with-border disabled:cursor-not-allowed disabled:bg-neutral-300 dark:disabled:bg-neutral-600" type="submit" disabled={isMutating}>
        <i className="fa-solid fa-paper-plane" /> Send
      </button>
    </form>
  );
};
