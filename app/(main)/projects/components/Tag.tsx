"use client";

import { ProjectTag } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";

export default ({
  tag,
  clickable,
}: {
  tag: ProjectTag;
  clickable?: boolean;
}) => {
  const router = useRouter();
  const searchParams = new URLSearchParams(useSearchParams().toString());
  const searchMatchesTag =
    searchParams.get("search")?.replace("tag:", "")?.toLowerCase() ===
    tag.name.toLowerCase();

  // Weird in order to please the Tailwind extension
  // If clickable and not already searching for this tag, make it hoverable
  // If already searching for this tag, make it a dotted border
  const className = {
    className: `select-none border-2 flex items-center gap-1 border-transparent rounded bg-blue-200 px-2 py-1 text-xs font-bold text-blue-700 transition-colors dark:bg-[#212528] dark:text-[#4b98f2] ${
      clickable && !searchMatchesTag ? "hover:border-blue-700" : ""
    } ${
      searchMatchesTag
        ? "border-dotted dark:border-blue-900 border-blue-600"
        : ""
    }`,
  };

  // If clickable and not already searching for this tag, make it a button
  return clickable && !searchMatchesTag ? (
    <button
      {...className}
      title={`See other projects including "${tag}".`}
      onClick={e => {
        // We do this to prevent the click event from bubbling up to the parent element (Copilot wrote this, but it sounds smart)
        e.preventDefault();

        // If the tag is a year, do a regular search, otherwise search for the tag
        /\d{4}/.test(tag.name)
          ? searchParams.set("search", tag.name)
          : searchParams.set("search", `tag:${tag.name}`);
        router.push(`/projects?${searchParams.toString()}`);
      }}
    >
      {tag.color && <TagColorBadge color={tag.color} />}
      {tag.name}
    </button>
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
  showBorder?: boolean;
};
export const TagColorBadge = ({
  color,
  size,
  showBorder,
}: TagColorBadgeProps) => (
  <div
    className={`size-2 rounded-full ${showBorder ? "border border-black" : ""}`}
    style={{ backgroundColor: color, width: size ?? 8, height: size ?? 8 }}
  />
);
