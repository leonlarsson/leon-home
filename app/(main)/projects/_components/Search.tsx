"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const searchParams = new URLSearchParams(useSearchParams().toString());

  // On mount and searchParam change, set the state from searchParam
  useEffect(() => {
    const searchParam = searchParams.get("search");
    setSearchQuery(searchParam ?? "");
  }, [searchParams.get("search")]);

  return (
    <input
      type="search"
      maxLength={20}
      placeholder="Name, description, year, tags..."
      className="text-input w-full self-center md:w-80"
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
