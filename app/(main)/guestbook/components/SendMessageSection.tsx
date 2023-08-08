"use client";

import { useState, useTransition } from "react";
import EmojiSection from "./EmojiSection";
import { postEntry } from "../lib/actions";

export default ({ mode }: { mode: "text" | "emoji" }) => {
  const [isPending, startTransition] = useTransition();
  const [isInserting, setIsInserting] = useState(false);
  const [isError, setIsError] = useState(false);
  const isMutating = isInserting || isPending;

  // Insert entry into database
  const postEntryFunc = async (message: string): Promise<boolean> => {
    setIsInserting(true);
    setIsError(false);
    // SERVER ACTION
    const entryWasInserted = await postEntry(message);
    setIsInserting(false);
    if (!entryWasInserted) setIsError(true);
    return entryWasInserted;
  };

  return (
    <div>
      {mode === "emoji" ? <EmojiSection isMutating={isMutating} postEntryFunc={postEntryFunc} /> : <TextForm isMutating={isMutating} postEntryFunc={postEntryFunc} />}
      {isError && <span className="mt-1 text-red-500 dark:text-red-400">Failed to send message.</span>}
    </div>
  );
};

const TextForm = ({ isMutating, postEntryFunc }: { isMutating: boolean; postEntryFunc: (message: string) => Promise<boolean> }) => {
  return (
    <form
      className="flex justify-center gap-2 max-[370px]:flex-col"
      onSubmit={async event => {
        event.preventDefault();
        const form = event.currentTarget;
        const message = form.elements.namedItem("message") as HTMLInputElement;
        const postWasOk = await postEntryFunc(message.value);
        if (postWasOk) form.reset();
      }}
    >
      <input className="text-input disabled:cursor-not-allowed disabled:bg-neutral-300 dark:disabled:bg-neutral-600" type="text" name="message" placeholder="Your message..." required disabled={isMutating} maxLength={100} />
      <button className="button-with-border disabled:cursor-not-allowed disabled:bg-neutral-300 dark:disabled:bg-neutral-600" type="submit" disabled={isMutating}>
        <i className="fa-solid fa-paper-plane" /> Send
      </button>
    </form>
  );
};
