import projects from "@/data/projects";
import { getProjectsBySearch } from "@/utils/projects";
import { json } from "@tanstack/start";
import { createAPIFileRoute } from "@tanstack/start/api";

export const APIRoute = createAPIFileRoute("/api/projects")({
  GET: ({ request }) => {
    const search = new URL(request.url).searchParams.get("search");

    if (search) {
      const filteredProjects = getProjectsBySearch(search);
      return json(filteredProjects);
    }

    return json(projects);
  },
});
