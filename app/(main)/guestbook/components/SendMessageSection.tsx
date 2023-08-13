"use client";

import { useState } from "react";
import { postEntry } from "../lib/actions";
import emojis from "../lib/emojis";

export default ({ mode }: { mode: "text" | "emoji" }) => {
  const [isWorking, setIsWorking] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isRatelimited, setIsRatelimited] = useState(false);

  // Insert entry into database
  const postEntryFunc = async (message: string): Promise<boolean | "ratelimited"> => {
    setIsWorking(true);
    setIsError(false);
    setIsRatelimited(false);
    const entryWasInserted = await postEntry(message);
    setIsWorking(false);
    setIsError(entryWasInserted === false);
    setIsRatelimited(entryWasInserted === "ratelimited");
    return entryWasInserted;
  };

  return (
    <div>
      {mode === "emoji" ? (
        <>
          <span className="font-semibold">Send an emote or sign in to send a message:</span>

          <div className="flex flex-wrap justify-center gap-1">
            {emojis.map(emote => (
              <button key={emote} className="button-with-border h-10 w-10 !p-0 text-xl disabled:cursor-not-allowed disabled:bg-neutral-300 dark:disabled:bg-neutral-600" title={`Send ${emote} anonymously.`} disabled={isWorking} onClick={() => postEntryFunc(emote)}>
                {emote}
              </button>
            ))}
          </div>
        </>
      ) : (
        <form
          className="flex justify-center gap-2 max-[370px]:flex-col"
          onSubmit={async event => {
            event.preventDefault();
            const form = event.currentTarget;
            const message = (form.elements.namedItem("message") as HTMLInputElement).value;
            const postWasOk = await postEntryFunc(message);
            if (postWasOk === true) form.reset();
          }}
        >
          <input className="text-input disabled:cursor-not-allowed disabled:bg-neutral-300 dark:disabled:bg-neutral-600" type="text" name="message" placeholder="Your message..." required disabled={isWorking} maxLength={100} />
          <button className="button-with-border disabled:cursor-not-allowed disabled:bg-neutral-300 dark:disabled:bg-neutral-600" type="submit" disabled={isWorking}>
            <i className="fa-solid fa-paper-plane" /> Send
          </button>
        </form>
      )}
      {(isError || isRatelimited) && <span className="mt-1 text-red-500 dark:text-red-400">{isError ? "Failed to send message." : "You are sending too fast."}</span>}
    </div>
  );
};
