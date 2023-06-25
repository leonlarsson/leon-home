"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import EmojiSection from "./EmojiSection";
import TextForm from "./TextForm";
import { postEntry } from "../apiActions";

export default ({ mode, name }: { mode: "text" | "emoji"; name?: string }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const isMutating = isFetching || isPending;

  // On form submit, grab the info and send to postEntryFunc, which then sends the actual request
  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFetching(true);
    setIsError(false);

    const form = e.currentTarget;
    const input = form.elements.namedItem("message") as HTMLInputElement;

    const postWasOk = await postEntryFunc(input.value);
    if (postWasOk) input.value = "";
  };

  // Send the message to the API
  const postEntryFunc = async (message: string): Promise<boolean> => {
    // Post message (server action)
    const postWasOk = await postEntry(message, name);

    setIsFetching(false);

    if (postWasOk) {
      startTransition(() => router.refresh());
    } else {
      setIsError(true);
    }

    return postWasOk;
  };

  return (
    <div>
      {mode === "emoji" ? <EmojiSection isMutating={isMutating} postEntryFunc={postEntryFunc} /> : <TextForm isPending={isPending} isMutating={isMutating} onFormSubmit={onFormSubmit} />}
      {isError && <span className="mt-1 text-red-500">Failed to send message.</span>}
    </div>
  );
};
