"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default ({ tag, clickable }: { tag: string; clickable?: boolean }) => {
  const router = useRouter();
  const searchParams = new URLSearchParams(useSearchParams().toString());
  const searchMatchesTag = searchParams.get("search")?.toLowerCase() === tag.toLowerCase();

  // Weird in order to please the Tailwind extension
  // If clickable and not already searching for this tag, make it hoverable
  // If already searching for this tag, make it a dotted border
  const className = {
    className: `select-none border-2 border-transparent rounded bg-blue-200 px-2 py-1 text-xs font-bold text-blue-700 transition-colors dark:bg-[#212528] dark:text-[#4b98f2] ${clickable && !searchMatchesTag ? "hover:border-blue-700" : ""} ${
      searchMatchesTag ? "border-dotted dark:border-blue-900 border-blue-500" : ""
    }`
  };

  // If clickable and not already searching for this tag, make it a button
  return clickable && !searchMatchesTag ? (
    <button
      {...className}
      title={`See other projects including "${tag}".`}
      onClick={e => {
        // We do this to prevent the click event from bubbling up to the parent element (Copilot wrote this, but it sounds smart)
        e.preventDefault();
        searchParams.set("search", tag);
        router.push(`/projects?${searchParams.toString()}`);
      }}
    >
      {tag}
    </button>
  ) : (
    <div {...className}>{tag}</div>
  );
};
