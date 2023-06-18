"use client";

import { useRouter } from "next/navigation";

export default () => {
  const router = useRouter();
  return <input type="search" placeholder="Filter" className="rounded p-2 shadow outline-none" onChange={e => router.replace(`?filter=${e.target.value}`)} />;
};
