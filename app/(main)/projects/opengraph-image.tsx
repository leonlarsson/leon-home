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
        {projects.map(project => (
          <div tw="text-lg font-semibold flex" key={project.projectId}>
            <svg fill="none" height="24" width="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" viewBox="0 0 24 24">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
            {project.name}
          </div>
        ))}
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
