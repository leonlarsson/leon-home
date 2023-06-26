"use client";

import EmojiPicker from "./EmojiPicker";

export default ({ isMutating, postEntryFunc }: { isMutating: boolean; postEntryFunc: any }) => (
  <>
    <span className="font-semibold">Send an emote or sign in to send a message:</span>

    <div className="flex flex-wrap justify-center gap-1">
      {["😀", "😐", "😥", "😂", "😎", "😍", "🦝"].map(emote => (
        <button key={emote} className="button-with-border !p-1 text-xl disabled:cursor-not-allowed disabled:bg-gray-300" title={`Send ${emote} anonymously.`} disabled={isMutating} onClick={() => postEntryFunc(emote)}>
          {emote}
        </button>
      ))}
    </div>

    <details className="mt-1">
      <summary className="cursor-pointer">Full Emoji Picker</summary>
      <EmojiPicker isMutating={isMutating} postEntryFunc={postEntryFunc} />
    </details>
  </>
);
