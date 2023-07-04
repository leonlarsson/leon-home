"use client";

import { useRouter } from "next/navigation";

export default ({ tag, clickable }: { tag: string; clickable?: boolean }) => {
  const router = useRouter();

  const className = `tag-pill ${clickable && "border border-transparent hover:border-blue-700"}`;

  return clickable ? (
    <button className={className} title={`See other projects with the tag "${tag.toUpperCase()}".`} onClick={() => router.push(`/projects?search=${tag}`)}>
      {tag}
    </button>
  ) : (
    <div className={className}>{tag}</div>
  );
};
