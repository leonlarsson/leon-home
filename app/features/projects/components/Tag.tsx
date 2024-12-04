import type { ProjectTag } from "@/types";
import { Link, useSearch } from "@tanstack/react-router";

export const Tag = ({
  tag,
  clickable,
}: {
  tag: ProjectTag;
  active?: boolean;
  clickable?: boolean;
}) => {
  const { search } = useSearch({ strict: false });

  const searchMatchesTag = search?.replace("tag:", "")?.toLowerCase() === tag.name.toLowerCase();

  // Weird in order to please the Tailwind extension
  // If clickable and not already searching for this tag, make it hoverable
  // If already searching for this tag, make it a dotted border
  const props = {
    className: `select-none border-2 flex items-center gap-1 border-transparent rounded bg-blue-200 px-2 py-1 text-xs font-bold text-blue-700 transition-colors dark:bg-[#212528] dark:text-[#4b98f2] ${
      clickable && !searchMatchesTag ? "hover:border-blue-700" : ""
    } ${searchMatchesTag ? "border-dotted dark:border-blue-900 border-blue-600" : ""}`,
  };

  // If clickable and not already searching for this tag, make it a button
  return clickable && !searchMatchesTag ? (
    <Link
      to="/projects"
      search={{ search: /\d{4}/.test(tag.name) ? tag.name : `tag:${tag.name}` }}
      {...props}
      title={`See other projects including "${tag.name}".`}
    >
      {tag.color && <TagColorBadge color={tag.color} />}
      {tag.name}
    </Link>
  ) : (
    <Link {...props}>
      {tag.color && <TagColorBadge color={tag.color} />}
      {tag.name}
    </Link>
  );
};

type TagColorBadgeProps = {
  color: string;
  size?: number;
  showBorder?: boolean;
};
export const TagColorBadge = ({ color, size, showBorder }: TagColorBadgeProps) => (
  <div
    className={`size-2 rounded-full ${showBorder ? "border border-black" : ""}`}
    style={{ backgroundColor: color, width: size ?? 8, height: size ?? 8 }}
  />
);
