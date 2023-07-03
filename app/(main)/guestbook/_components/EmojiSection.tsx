"use client";

import dynamic from "next/dynamic";
import { EmojiStyle, Theme } from "emoji-picker-react";
import emojis from "../lib/emojis";
const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });

export default ({ isMutating, postEntryFunc }: { isMutating: boolean; postEntryFunc: any }) => (
  <>
    <span className="font-semibold">Send an emote or sign in to send a message:</span>

    <div className="flex flex-wrap justify-center gap-1">
      {emojis.map(emote => (
        <button key={emote} className="button-with-border !p-1 text-xl disabled:cursor-not-allowed disabled:bg-gray-300" title={`Send ${emote} anonymously.`} disabled={isMutating} onClick={() => postEntryFunc(emote)}>
          {emote}
        </button>
      ))}
    </div>

    <details className="mt-1">
      <summary className="cursor-pointer">Full Emoji Picker</summary>

      {/* npm i @emoji-mart/react
      <Picker theme="light" dynamicWidth={true} skinTonePosition="none" categories={["people", "nature", "foods", "activity", "places", "objects", "symbols", "flags"]} onEmojiSelect={(e: { native: string }) => !isMutating && postEntryFunc(e.native)} />
      em-emoji-picker {
        height: 400px;
        width: 100%;
      } */}
      <EmojiPicker
        onEmojiClick={e => !isMutating && postEntryFunc(e.emoji)}
        theme={Theme.AUTO}
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
  </>
);
