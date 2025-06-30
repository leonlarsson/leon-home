import { Link, useSearch } from "@tanstack/react-router";
import type { ProjectTag as ProjectTagType } from "../../../types";
import { cn } from "../../../utils/cn";

export const ProjectTag = ({
  tag,
  clickable,
}: {
  tag: ProjectTagType;
  active?: boolean;
  clickable?: boolean;
}) => {
  const { search } = useSearch({ strict: false });

  const searchMatchesTag = search?.replace("tag:", "")?.toLowerCase() === tag.name.toLowerCase();
  const isYearTag = /\d{4}/.test(tag.name);

  // Weird in order to please the Tailwind extension
  // If clickable and not already searching for this tag, make it hoverable
  // If already searching for this tag, change the background color
  const className = {
    className: cn(
      "flex items-center gap-1 bg-neutral-200 dark:bg-neutral-800 rounded-lg px-[10px] py-[6px] transition-colors duration-75 select-none text-xs font-medium text-kinda-black/80 dark:text-kinda-white/80",
      clickable && !searchMatchesTag && "hover:bg-neutral-300 dark:hover:bg-neutral-700",
      searchMatchesTag && "bg-neutral-500/40 dark:bg-neutral-600/60 text-kinda-black dark:text-kinda-white",
    ),
  };

  return clickable && !searchMatchesTag ? (
    <Link
      to="/projects"
      search={(prev) => {
        // If year tag, navigate to year:nnnn, else tag:tagname
        return { ...prev, search: isYearTag ? `year:${tag.name}` : `tag:${tag.name}` };
      }}
      {...className}
      title={isYearTag ? `View projects from ${tag.name}` : `View projects tagged with ${tag.name}`}
    >
      {tag.color && <TagColorBadge color={tag.color} />}
      {tag.name}
    </Link>
  ) : (
    <div {...className}>
      {tag.color && <TagColorBadge color={tag.color} />}
      {tag.name}
    </div>
  );
};

type TagColorBadgeProps = {
  color: string;
  size?: number;
  useBlackBorder?: boolean;
};

export const TagColorBadge = ({ color, size = 8, useBlackBorder }: TagColorBadgeProps) => (
  <div
    className={cn("rounded-full", useBlackBorder ? "border border-black" : "ring-black/50 dark:ring-white/50 ring-1")}
    style={{
      backgroundColor: color,
      width: size,
      height: size,
    }}
  />
);
