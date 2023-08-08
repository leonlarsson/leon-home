"use client";

import emojis from "../lib/emojis";

export default ({ isInserting, postEntryFunc }: { isInserting: boolean; postEntryFunc: any }) => (
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
