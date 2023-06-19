"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const searchParams = new URLSearchParams(useSearchParams().toString());

  // Reset state when layout changes
  useEffect(() => {
    setSearchQuery("");
  }, [searchParams.get("grid")]);

  // On mount, set the state from searchParam
  useEffect(() => {
    const searchParam = searchParams.get("search");
    if (searchParam) setSearchQuery(searchParam);
  }, []);

  return (
    <input
      type="search"
      maxLength={20}
      placeholder="Name, description, tags..."
      className="w-full self-center rounded border border-black/50 bg-white p-1 shadow outline-none md:w-80"
      value={searchQuery}
      onChange={e => {
        const value = e.target.value;
        setSearchQuery(value);
        // If value is not empty, set searchParam. Otherwise, remove the searchParam. Then replace the URL params
        value.trim().length ? searchParams.set("search", value.trim()) : searchParams.delete("search");
        router.replace("?" + searchParams.toString());
      }}
    />
  );
};
