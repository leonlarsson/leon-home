"use client";

import { useState } from "react";
import EmojiPicker from "./EmojiPicker";

export default ({ isMutating, postEntryFunc }: { isMutating: boolean; postEntryFunc: any }) => {
  const [load, setLoad] = useState(false);

  return (
    <>
      <span className="font-semibold">Send an emote or sign in to send a message:</span>

      <div className="flex flex-wrap justify-center gap-1">
        {["😀", "😐", "😥", "😂", "😎", "😍", "🦝"].map(emote => (
          <button key={emote} className="rounded border border-black p-1 text-xl transition-all hover:bg-black disabled:cursor-not-allowed disabled:bg-gray-300" title={`Send ${emote} anonymously.`} disabled={isMutating} onClick={() => postEntryFunc(emote)}>
            {emote}
          </button>
        ))}
      </div>

      <details className="mt-1" onClick={() => setLoad(true)}>
        <summary className="cursor-pointer">Full Emoji Picker</summary>
        {/* {load && <EmojiPicker isMutating={isMutating} postEntryFunc={postEntryFunc} />} */}
      </details>
    </>
  );
};
