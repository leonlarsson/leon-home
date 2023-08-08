"use client";

import { useState } from "react";
import { postEntry } from "../lib/actions";
import emojis from "../lib/emojis";

export default ({ mode }: { mode: "text" | "emoji" }) => {
  const [isInserting, setIsInserting] = useState(false);
  const [isError, setIsError] = useState(false);

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
      {mode === "emoji" ? <EmojiPicker isInserting={isInserting} postEntryFunc={postEntryFunc} /> : <TextForm isInserting={isInserting} postEntryFunc={postEntryFunc} />}
      {isError && <span className="mt-1 text-red-500 dark:text-red-400">Failed to send message.</span>}
    </div>
  );
};

const TextForm = ({ isInserting, postEntryFunc }: { isInserting: boolean; postEntryFunc: (message: string) => Promise<boolean> }) => {
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
      <input className="text-input disabled:cursor-not-allowed disabled:bg-neutral-300 dark:disabled:bg-neutral-600" type="text" name="message" placeholder="Your message..." required disabled={isInserting} maxLength={100} />
      <button className="button-with-border disabled:cursor-not-allowed disabled:bg-neutral-300 dark:disabled:bg-neutral-600" type="submit" disabled={isInserting}>
        <i className="fa-solid fa-paper-plane" /> Send
      </button>
    </form>
  );
};

const EmojiPicker = ({ isInserting, postEntryFunc }: { isInserting: boolean; postEntryFunc: any }) => (
  <>
    <span className="font-semibold">Send an emote or sign in to send a message:</span>

    <div className="flex flex-wrap justify-center gap-1">
      {emojis.map(emote => (
        <button key={emote} className="button-with-border h-10 w-10 !p-0 text-xl disabled:cursor-not-allowed disabled:bg-gray-300" title={`Send ${emote} anonymously.`} disabled={isInserting} onClick={() => postEntryFunc(emote)}>
          {emote}
        </button>
      ))}
    </div>
  </>
);
