"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export default () => {
  const input = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const searchParams = new URLSearchParams(useSearchParams().toString());

  const handleChange = (filter: string) => {
    filter.length ? searchParams.set("filter", filter) : searchParams.delete("filter");
    router.replace("?" + searchParams.toString());
  };

  useEffect(() => {
    if (searchParams.size === 1) input.current!.value = "";
  }, [searchParams]);

  return <input type="search" placeholder="Name, description, tags..." className="w-60 self-center rounded border border-black/50 p-2 shadow outline-none" onChange={e => handleChange(e.target.value.trim())} ref={input} />;
};
