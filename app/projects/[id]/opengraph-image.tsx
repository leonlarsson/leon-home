import { ImageResponse } from "next/server";
import projects from "../projects";

export const runtime = "edge";

export default async ({ params }: { params: { id: string } }) => {

    const regularFont = fetch(
        new URL("/public/assets/fonts/Inter-Regular.ttf", import.meta.url)
    ).then(res => res.arrayBuffer());

    const [regularFontData] = await Promise.all([regularFont]);

    const project = projects.find(project => project.projectId === parseInt(params.id));

    return new ImageResponse(
        (
            <div tw="h-full w-full flex flex-col justify-center items-center text-center bg-white font-normal whitespace-pre-line">
                <div tw="text-[30px] mb-2">Project</div>
                <div tw="text-[50px] font-[900]">{project?.name ?? "Project #404"}</div>
                <div tw="text-[26px] p-8">{project?.description ?? "You found Project #404."}</div>
                <div tw="flex absolute top-[565px] left-[15px] text-lg">leonlarsson.com/projects/{params.id.slice(0, 30)}</div>
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
}