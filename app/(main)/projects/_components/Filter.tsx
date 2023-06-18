"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default () => {
  const [filterQuery, setFilterQuery] = useState("");
  const router = useRouter();
  const searchParams = new URLSearchParams(useSearchParams().toString());

  // When the state changes, set or remove the searchParams
  useEffect(() => {
    filterQuery.trim().length ? searchParams.set("filter", filterQuery.trim()) : searchParams.delete("filter");
    router.replace("?" + searchParams.toString());
  }, [filterQuery]);

  // Reset state when layout changes
  useEffect(() => {
    setFilterQuery("");
  }, [searchParams.get("grid")]);

  return <input type="search" maxLength={20} placeholder="Name, description, tags..." className="w-60 self-center rounded border border-black/50 p-2 shadow outline-none" value={filterQuery} onChange={e => setFilterQuery(e.target.value)} />;
};
