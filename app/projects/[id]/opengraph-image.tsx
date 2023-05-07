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
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    backgroundColor: "#fff",
                    fontWeight: 400,
                    whiteSpace: "pre-line"
                }}
            >
                <div style={{ fontSize: 40, marginBottom: 10 }}>Project</div>
                <div style={{ fontSize: 50, fontWeight: 900 }}>{project?.name ?? "Project #404"}</div>
                <div style={{ fontSize: 26, padding: 30 }}>{project?.description ?? "You found Project #404"}</div>
            </div>

        ),
        {
            width: 896,
            height: 605,
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