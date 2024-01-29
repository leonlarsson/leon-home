import { ImageResponse } from "next/og";
import projects from "@/data/projects";

export const runtime = "edge";

export default async () => {
  const regularFont = fetch(
    new URL("/public/assets/fonts/Inter-Regular.ttf", import.meta.url),
  ).then(res => res.arrayBuffer());
  const avatar = fetch(
    new URL("/public/assets/images/avatar.png", import.meta.url),
  ).then(res => res.arrayBuffer());
  const [regularFontData, avatarData] = await Promise.all([
    regularFont,
    avatar,
  ]);

  const allTags = Array.from(
    new Set(
      projects
        .filter(x => Array.isArray(x.tags))
        .map(x => x.tags)
        .flat()
        .sort((a, b) => (a ?? "").localeCompare(b ?? "")),
    ),
  ) as string[];

  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col justify-center items-center text-center bg-slate-200 font-normal">
        <img
          tw="rounded-full shadow-xl"
          // @ts-ignore src is confused
          src={avatarData}
          width={100}
          height={100}
        />
        <div tw="text-[40px] font-[900]">Leon's Projects</div>
        <div tw="flex text-[20px]">{projects.length} projects and counting</div>
        {allTags.length > 0 && <span tw="mt-4">With tags such as...</span>}
        {allTags.length > 0 && (
          <div tw="flex flex-wrap justify-center px-7 mt-1">
            {allTags.map(tag => (
              <div
                key={tag}
                tw="rounded bg-blue-200 px-2 py-1 m-1 text-sm font-bold text-blue-700"
              >
                {tag}
              </div>
            ))}
          </div>
        )}
        <div tw="flex absolute top-[565px] left-[15px] text-lg">
          leonlarsson.com/projects
        </div>
      </div>
    ),
    {
      width: 900,
      height: 600,
      fonts: [
        {
          name: "Inter",
          data: regularFontData,
          weight: 400,
        },
      ],
    },
  );
};
