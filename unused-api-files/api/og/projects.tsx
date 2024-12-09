import projects from "@/data/projects";
import { tagSorterFunction } from "@/utils/tagSorterFunction";
import { createAPIFileRoute } from "@tanstack/start/api";
import { ImageResponse } from "@vercel/og";

export const APIRoute = createAPIFileRoute("/api/og/projects")({
  GET: async ({ request }) => {
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

    const allTags = [...new Set(projects.flatMap((x) => x.tags).toSorted(tagSorterFunction))];

    return new ImageResponse(
      <div
        tw="h-full w-full flex flex-col justify-center items-center text-center font-normal"
        style={{ backgroundColor: "#f9f9f7" }}
      >
        <img
          tw="rounded-full shadow-xl"
          // @ts-ignore src is confused
          src={avatarData}
          alt="Leon's avatar"
          width={100}
          height={100}
        />
        <div tw="text-[40px] font-bold">Leon's Projects</div>
        <div tw="flex text-[20px]">{projects.length} projects and counting</div>
        {allTags.length > 0 && <span tw="mt-4">With tags such as...</span>}
        {allTags.length > 0 && (
          <div tw="flex flex-wrap justify-center px-7 mt-1">
            {allTags.map((tag) => (
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
        )}
        <div tw="flex absolute top-[565px] left-[15px] text-lg">leonlarsson.com/projects</div>
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
