"use client";

// Inspired by https://leerob.io/guestbook

import { useState, useTransition } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { EmojiStyle } from "emoji-picker-react";
import { postEntry } from "../apiActions";

const EmojiPicker = dynamic(() => import("emoji-picker-react"));

export default ({ emoteOnlyMode, showEmojiPicker, name }: { emoteOnlyMode?: boolean; showEmojiPicker?: boolean; name?: string }) => {
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
    <div>
      {emoteOnlyMode ? (
        <>
          <span className="font-semibold">Send an emote or sign in to send a message:</span>

          {showEmojiPicker && (
            <details className="mb-1">
              <summary className="cursor-pointer">Full Emoji Picker</summary>
              <EmojiPicker
                onEmojiClick={e => !isMutating && postEntryFunc(e.emoji)}
                lazyLoadEmojis
                skinTonesDisabled
                emojiStyle={EmojiStyle.NATIVE}
                emojiVersion="5.0"
                previewConfig={{ defaultEmoji: "1f47d" }}
                height={400}
                width={"100%"}
                // @ts-expect-error
                categories={["smileys_people", "animals_nature", "food_drink", "travel_places", "activities", "objects", "symbols", "flags"]}
              />
            </details>
          )}

          <div className="flex flex-wrap justify-center gap-1">
            {["😀", "😐", "😥", "😂", "😎", "😍", "🦝"].map(emote => (
              <button key={emote} className="rounded border border-black p-1 text-xl transition-all hover:bg-black disabled:cursor-not-allowed disabled:bg-gray-300" title={`Send ${emote} anonymously.`} disabled={isMutating} onClick={() => postEntryFunc(emote)}>
                {emote}
              </button>
            ))}
          </div>
        </>
      ) : (
        <form className="flex justify-center gap-2 max-[370px]:flex-col" onSubmit={onFormSubmit}>
          <input className="rounded border border-black/50 bg-white p-2 shadow outline-none" type="text" name="message" placeholder="Your message..." required disabled={isPending} maxLength={50} />
          <button className="rounded border border-black p-2 font-medium text-black transition-all hover:bg-black hover:text-white active:translate-y-[2px] disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500" type="submit" disabled={isMutating}>
            <i className="fa-solid fa-paper-plane" /> Send
          </button>
        </form>
      )}

      {isError && <span className="mt-1 text-red-500">Failed to send message.</span>}
    </div>
  );
};
