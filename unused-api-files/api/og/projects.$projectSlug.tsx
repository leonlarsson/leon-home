// @ts-nocheck

import { createAPIFileRoute } from "@tanstack/react-start/api";
import { ImageResponse } from "@vercel/og";
import { findProjectBySlugOrAliases } from "../../../src/utils/projects";
import { tagSorterFunction } from "../../../src/utils/tagSorterFunction";

export const APIRoute = createAPIFileRoute("/api/og/projects/$projectSlug")({
  GET: async ({ request, params }) => {
    const { protocol, host } = new URL(request.url);
    const baseLink = `${protocol}//${host}`;

    const regularFont = fetch(`${baseLink}/fonts/Geist-Regular.ttf`).then((res) => res.arrayBuffer());
    const mediumFont = fetch(`${baseLink}/fonts/Geist-Medium.ttf`).then((res) => res.arrayBuffer());
    const boldFont = fetch(`${baseLink}/fonts/Geist-Bold.ttf`).then((res) => res.arrayBuffer());
    const avatar = fetch(`${baseLink}/images/avatar.png`).then((res) => res.arrayBuffer());
    const [regularFontData, mediumFontData, boldFontData, avatarData] = await Promise.all([
      regularFont,
      mediumFont,
      boldFont,
      avatar,
    ]);

    const project = findProjectBySlugOrAliases(params.projectSlug);

    return new ImageResponse(
      <div
        tw="h-full w-full flex flex-col justify-center items-center text-center font-normal"
        style={{ backgroundColor: "#f9f9f7" }}
      >
        <img
          tw="rounded-full shadow-xl"
          // @ts-ignore src is confused
          src={avatarData}
          alt={"Leon's avatar"}
          width={100}
          height={100}
        />
        <div tw="text-[30px] mb-2">Project</div>
        <div tw="text-[50px] font-bold">{project?.name ?? "Project #404"}</div>
        <div tw="text-[26px] px-8">{project?.shortDescription ?? "You found Project #404."}</div>
        <div tw="flex flex-wrap justify-center px-7 mt-1">
          {project?.tags.sort(tagSorterFunction).map((tag) => (
            <div
              key={tag.name}
              tw="flex items-center rounded bg-blue-200 px-2 py-1 m-1 text-sm font-medium text-blue-700"
            >
              {"color" in tag && (
                <div
                  tw="size-2 rounded-full"
                  style={{ backgroundColor: tag.color, width: 8, height: 8, marginRight: 4 }}
                />
              )}
              <div>{tag.name}</div>
            </div>
          ))}
        </div>
        <div tw="flex absolute top-[565px] left-[15px] text-lg">
          leonlarsson.com/projects{project?.slug ? `/${project.slug}` : ""}
        </div>
      </div>,
      {
        width: 900,
        height: 600,
        fonts: [
          {
            name: "Geist",
            data: regularFontData,
            weight: 400,
          },
          {
            name: "Geist",
            data: mediumFontData,
            weight: 500,
          },
          {
            name: "Geist",
            data: boldFontData,
            weight: 700,
          },
        ],
      },
    );
  },
});
