import { findProjectBySlugOrAliases } from "@/utils/findProjectBySlugOrAliases";
import { findProjectsBySearch } from "@/utils/findProjectsBySearch";
import { json } from "@tanstack/start";
import { createAPIFileRoute } from "@tanstack/start/api";

export const APIRoute = createAPIFileRoute("/api/projects/$projectSlug")({
  GET: ({ params }) => {
    const project = findProjectBySlugOrAliases(params.projectSlug);

    if (!project) {
      const possibleMatches = findProjectsBySearch(params.projectSlug);
      return json({ error: "Project not found", possibleMatches }, { status: 404 });
    }

    return json(project);
  },
});
