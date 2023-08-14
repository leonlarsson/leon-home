"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import GradientBorder from "../../components/GradientBorder";

export default () => {
  const searchParams = new URLSearchParams(useSearchParams().toString());
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") ?? "");
  const router = useRouter();

  // On mount and searchParam change (when tags are clicked), set the state from searchParam
  useEffect(() => {
    const searchParam = searchParams.get("search");
    setSearchQuery(searchParam ?? "");
  }, [searchParams.get("search")]);

  return (
    <GradientBorder rounded="rounded-[5px]" padding="p-px">
      <input
        type="search"
        maxLength={20}
        placeholder="Name, description, year, tags..."
        className="text-input-base w-full"
        value={searchQuery}
        onChange={e => {
          const value = e.target.value;
          setSearchQuery(value);
          // If value is not empty, set searchParam. Otherwise, remove the searchParam. Then replace the URL params
          value.trim().length ? searchParams.set("search", value.trim()) : searchParams.delete("search");
          router.replace("?" + searchParams.toString());
        }}
      />
    </GradientBorder>
  );
};
