import projects from "@/data/projects";
import { findProjectsBySearch } from "@/utils/findProjectsBySearch";
import { json } from "@tanstack/start";
import { createAPIFileRoute } from "@tanstack/start/api";

export const APIRoute = createAPIFileRoute("/api/projects")({
  GET: ({ request }) => {
    const search = new URL(request.url).searchParams.get("search");

    if (search) {
      const filteredProjects = findProjectsBySearch(search);
      return json(filteredProjects);
    }

    return json(projects);
  },
});
