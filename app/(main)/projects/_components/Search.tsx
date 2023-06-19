"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const searchParams = new URLSearchParams(useSearchParams().toString());

  // When the state changes, set or remove the searchParams
  useEffect(() => {
    searchQuery.trim().length ? searchParams.set("search", searchQuery.trim()) : searchParams.delete("search");
    router.replace("?" + searchParams.toString());
  }, [searchQuery]);

  // Reset state when layout changes
  useEffect(() => {
    setSearchQuery("");
  }, [searchParams.get("grid")]);

  return <input type="search" maxLength={20} placeholder="Name, description, tags..." className="w-full self-center rounded border border-black/50 bg-white p-1 shadow outline-none md:w-80" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />;
};
