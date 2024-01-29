"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default () => {
  const router = useRouter();
  const searchParams = new URLSearchParams(useSearchParams().toString());

  return (
    <div className="flex items-center justify-center gap-1">
      <input
        className="peer h-4 w-4 cursor-pointer accent-black dark:accent-kinda-white"
        type="checkbox"
        id="sort"
        defaultChecked={searchParams.get("sort") === "newest"}
        onChange={e => {
          const checked = e.target.checked;
          // If checked, set searchParam. Otherwise, remove the searchParam. Then replace the URL params
          checked
            ? searchParams.set("sort", "newest")
            : searchParams.delete("sort");
          router.replace("?" + searchParams.toString());
        }}
      />
      <label
        className="select-none underline-offset-2 opacity-75 transition-opacity peer-checked:underline peer-checked:opacity-100 dark:opacity-50"
        htmlFor="sort"
      >
        Sort by newest
      </label>
    </div>
  );
};
