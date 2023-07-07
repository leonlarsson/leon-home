import { ImageResponse } from "next/server";
import projects from "./projects";

export const runtime = "edge";

export default async () => {
  const regularFont = fetch(new URL("/public/assets/fonts/Inter-Regular.ttf", import.meta.url)).then(res => res.arrayBuffer());
  const avatar = fetch(new URL("/public/assets/images/avatar.png", import.meta.url)).then(res => res.arrayBuffer());
  const [regularFontData, avatarData] = await Promise.all([regularFont, avatar]);

  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col justify-center items-center text-center bg-slate-200 font-normal">
        {/* @ts-ignore src is confused */}
        <img tw="rounded-full shadow-xl" src={avatarData} width={100} height={100} />
        <div tw="text-[40px] font-[900]">Leon's Projects</div>
        <div tw="flex text-[20px]">{projects.length} projects and counting</div>
        <div tw="flex absolute top-[565px] left-[15px] text-lg">leonlarsson.com/projects</div>
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
