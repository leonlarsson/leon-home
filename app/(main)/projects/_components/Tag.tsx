"use client";

import { useRouter } from "next/navigation";

export default ({ tag, clickable }: { tag: string; clickable?: boolean }) => {
  const router = useRouter();

  const className = `tag-pill ${clickable && "border-2 border-transparent hover:border-blue-700"}`;

  return clickable ? (
    <button
      className={className}
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
    <div className={className}>{tag}</div>
  );
};
