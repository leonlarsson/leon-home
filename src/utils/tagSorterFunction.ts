import type { ProjectTag } from "../types";

export const tagSorterFunction = (a: ProjectTag, b: ProjectTag) => {
  // 1. Tags with a color value should come first
  // 2. Sort by name
  if (a.color && !b.color) return -1;
  if (!a.color && b.color) return 1;
  return a.name.localeCompare(b.name);
};
