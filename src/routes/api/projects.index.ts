import { json } from "@tanstack/react-start";
import { createServerFileRoute } from "@tanstack/react-start/server";
import projects from "../../data/projects";
import { getProjectsBySearch } from "../../utils/projects";

export const APIRoute = createServerFileRoute().methods({
  GET: ({ request }) => {
    const search = new URL(request.url).searchParams.get("search");

    if (search) {
      const filteredProjects = getProjectsBySearch(search);
      return json(filteredProjects);
    }

    return json(projects);
  },
});
