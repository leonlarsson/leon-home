"use client";

// Inspired by https://leerob.io/guestbook

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { postEntry } from "../actions";
import { SignOut } from "./Auth";

export default ({ emoteOnlyMode, name }: { emoteOnlyMode?: boolean; name?: string }) => {
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
  const postEntryFunc = async (message: string) => {
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
    <div className="mb-1">
      {emoteOnlyMode ? (
        <>
          <span className="font-semibold">Send an emote or sign in to send a message:</span>
          <div className="flex flex-wrap justify-center gap-1">
            {["😀", "😐", "😥", "😂", "😎", "😍", "🦝"].map(emote => (
              <button key={emote} className="rounded border border-black p-1 text-xl transition-all hover:bg-black disabled:cursor-not-allowed disabled:bg-gray-300" title={`Send ${emote} anonymously.`} disabled={isMutating} onClick={() => postEntryFunc(emote)}>
                {emote}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          {name && <SignOut />}
          <form className="flex gap-2 max-[370px]:flex-col" onSubmit={onFormSubmit}>
            <input className="rounded border border-black/50 bg-white p-2 shadow outline-none" type="text" name="message" placeholder="Your message..." required disabled={isPending} maxLength={50} />
            <button className="rounded border border-black p-2 font-medium text-black transition-all hover:bg-black hover:text-white active:translate-y-[2px] disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500" type="submit" disabled={isMutating}>
              <i className="fa-solid fa-paper-plane" /> Send
            </button>
          </form>
        </>
      )}

      {isError && <span className="text-red-500">Failed to send message.</span>}
    </div>
  );
};
