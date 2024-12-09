import projects from "@/data/projects";
import type { Project } from "@/types";

const tagPrefix = "tag:";
const yearPrefix = "year:";

export const findProjectsBySearch = (search: string): Project[] => {
  const exactTagSearch = search.startsWith(tagPrefix);
  const exactYearSearch = search.startsWith(yearPrefix);

  if (exactTagSearch) {
    return projects.filter((project) =>
      project.tags.some((tag) => tag.name.toLowerCase() === search.replace(tagPrefix, "").toLowerCase()),
    );
  }

  if (exactYearSearch) {
    return projects.filter((project) => project.year === search.replace(yearPrefix, ""));
  }

  return projects.filter((project) =>
    [
      project.slug,
      ...(project.slugAliases ?? []),
      project.name,
      ...(typeof project.description === "string" ? [project.description] : project.description),
      project.shortDescription,
      project.year,
      project.link?.replace("https://", ""),
      ...project.tags.map((tag) => tag.name),
    ].some((item) => item?.toLowerCase().includes(search.toLowerCase())),
  );
};
