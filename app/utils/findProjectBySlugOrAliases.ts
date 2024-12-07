import projects from "@/data/projects";
import type { Project } from "@/types";

export const findProjectBySlugOrAliases = (slug: string): Project | null => {
  return projects.find((project) => project.slug === slug || (project.slugAliases ?? []).includes(slug)) ?? null;
};
