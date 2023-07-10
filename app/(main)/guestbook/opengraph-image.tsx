import { ImageResponse } from "next/server";
import { profanity } from "@2toad/profanity";
import type { Entry } from "./_components/Entries";

export const runtime = "edge";

export default async () => {
  const regularFont = fetch(new URL("/public/assets/fonts/Inter-Regular.ttf", import.meta.url)).then(res => res.arrayBuffer());
  const avatar = fetch(new URL("/public/assets/images/avatar.png", import.meta.url)).then(res => res.arrayBuffer());
  const [regularFontData, avatarData] = await Promise.all([regularFont, avatar]);

  const res = await fetch("https://leon-home-api.ragnarok.workers.dev/guestbook/entries", { headers: { "API-KEY": process.env.API_KEY as string }, cache: "no-store" });
  const entries: Entry[] = await res.json();

  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col justify-center items-center bg-slate-200 font-normal text-left">
        {/* @ts-ignore src is confused */}
        <img tw="rounded-full shadow-xl" src={avatarData} width={100} height={100} />
        <div tw="text-[40px] font-[900]">Leon's Guestbook</div>
        <div tw="text-[25px] font-[900] mb-2">Last 10 messages:</div>

        <div tw="flex flex-col items-left">
          {entries.slice(0, 10).map(entry => (
            <div tw="flex mb-2" key={entry.id}>
              <span>
                {entry.name ?? "Anonymous"}: {profanity.censor(entry.body)}
              </span>
            </div>
          ))}
        </div>

        <div tw="flex absolute top-[565px] left-[15px] text-lg">leonlarsson.com/guestbook</div>
      </div>
    ),
    {
      width: 900,
      height: 600,
      fonts: [
        {
          name: "Inter",
          data: regularFontData,
          weight: 400
        }
      ]
    }
  );
};
