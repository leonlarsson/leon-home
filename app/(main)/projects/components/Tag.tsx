"use client";

import { useRouter } from "next/navigation";

export default ({ tag, clickable }: { tag: string; clickable?: boolean }) => {
  const router = useRouter();

  // Weird in order to please the Tailwind extension
  const className = {
    className: `rounded bg-blue-200 px-2 py-1 text-xs font-bold text-blue-700 transition-colors group-hover:bg-slate-700 group-hover:text-white dark:bg-[#212528] dark:text-[#4b98f2] dark:group-hover:bg-[#212528] dark:group-hover:text-[#4b98f2] ${
      clickable && "border-2 border-transparent hover:border-blue-700"
    }`
  };

  return clickable ? (
    <button
      {...className}
      title={`See other projects including "${tag}".`}
      onClick={e => {
        // We do this to prevent the click event from bubbling up to the parent element (Copilot wrote this, but it sounds smart)
        e.preventDefault();
        router.push(`/projects?search=${tag}`);
      }}
    >
      {tag}
    </button>
  ) : (
    <div {...className}>{tag}</div>
  );
};
