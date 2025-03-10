import type { ProjectTag as ProjectTagType } from "@/types";
import { cn } from "@/utils/cn";
import { Link, useSearch } from "@tanstack/react-router";

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
  // If already searching for this tag, make it a dotted border
  const className = {
    className: cn(
      "select-none border-2 flex items-center gap-1 border-transparent rounded px-2 py-1 text-xs font-bold transition-colors bg-blue-200/80 text-blue-700 dark:bg-[#212528] dark:text-[#4b98f2]",
      clickable && !searchMatchesTag && "hover:border-blue-700",
      searchMatchesTag && "border-dashed dark:border-blue-900 border-blue-600",
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
