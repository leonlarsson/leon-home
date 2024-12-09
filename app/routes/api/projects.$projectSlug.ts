import { findProjectBySlugOrAliases, getProjectsBySearch } from "@/utils/projects";
import { json } from "@tanstack/start";
import { createAPIFileRoute } from "@tanstack/start/api";

export const APIRoute = createAPIFileRoute("/api/projects/$projectSlug")({
  GET: ({ params }) => {
    const project = findProjectBySlugOrAliases(params.projectSlug);

    if (!project) {
      const possibleMatches = getProjectsBySearch(params.projectSlug);
      return json({ error: "Project not found", possibleMatches }, { status: 404 });
    }

    return json(project);
  },
});
