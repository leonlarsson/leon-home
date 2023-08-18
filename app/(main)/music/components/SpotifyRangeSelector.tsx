"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

export default () => {
  const router = useRouter();
  const range = useSearchParams().get("range");
  const [pending, startTransition] = useTransition();

  const onChange = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
    startTransition(() => {
      router.replace(value !== "medium_term" ? `?range=${value}` : "?");
      router.refresh();
    });
  };

  return (
    <div>
      <label className="select-none" htmlFor="select">
        Select a range for top tracks and artists: {pending && <i className="fa-solid fa-refresh animate-spin" />}
      </label>
      <select className="mt-1 block w-full rounded border border-black/50 p-2 hover:border-black disabled:cursor-not-allowed dark:border-white/50 dark:bg-kinda-black dark:hover:border-white" id="select" defaultValue={range ?? "medium_term"} disabled={pending} onChange={onChange}>
        <option value="short_term">Last 4 weeks</option>
        <option value="medium_term">Last 6 months</option>
        <option value="long_term">Long term</option>
      </select>
    </div>
  );
};
