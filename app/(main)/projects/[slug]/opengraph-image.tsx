import { ImageResponse } from "next/og";
import projects from "@/data/projects";
import tagSorterFunction from "@/app/utils/tagSorterFunction";

export const runtime = "edge";

export default async ({ params }: { params: { slug: string } }) => {
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

  const project = projects.find(project => project.slug === params.slug);

  return new ImageResponse(
    (
      <div
        tw="h-full w-full flex flex-col justify-center items-center text-center font-normal"
        style={{ backgroundColor: "#f9f9f7" }}
      >
        <img
          tw="rounded-full shadow-xl"
          // @ts-ignore src is confused
          src={avatarData}
          width={100}
          height={100}
        />
        <div tw="text-[30px] mb-2">Project</div>
        <div tw="text-[50px] font-[900]">{project?.name ?? "Project #404"}</div>
        <div tw="text-[26px] px-8">
          {project?.shortDescription ?? "You found Project #404."}
        </div>
        <div tw="flex flex-wrap justify-center px-7 mt-1">
          {project?.tags?.sort(tagSorterFunction).map(tag => (
            <div
              key={tag.name}
              tw="rounded bg-blue-200 px-2 py-1 m-1 text-sm font-bold text-blue-700"
            >
              {tag.name}
            </div>
          ))}
        </div>
        <div tw="flex absolute top-[565px] left-[15px] text-lg">
          leonlarsson.com/projects/{params.slug.slice(0, 30)}
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
