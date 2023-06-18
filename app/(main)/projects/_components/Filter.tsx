"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default () => {
  const router = useRouter();
  const searchParams = new URLSearchParams(useSearchParams().toString());

  const handleChange = (filter: string) => {
    filter.length ? searchParams.set("filter", filter) : searchParams.delete("filter");
    router.replace("?" + searchParams.toString());
  };

  return <input type="search" placeholder="Filter" className="w-60 self-center rounded p-2 shadow outline-none" onChange={e => handleChange(e.target.value)} />;
};
