import { json } from "@tanstack/react-start";
import { createServerFileRoute } from "@tanstack/react-start/server";
import { findProjectBySlugOrAliases, getProjectsBySearch } from "../../utils/projects";

export const ServerRoute = createServerFileRoute("/api/projects/$projectSlug").methods({
  GET: ({ params }) => {
    const project = findProjectBySlugOrAliases(params.projectSlug);

    if (!project) {
      const possibleMatches = getProjectsBySearch(params.projectSlug);
      return json({ error: "Project not found", possibleMatches }, { status: 404 });
    }

    return json(project);
  },
});
