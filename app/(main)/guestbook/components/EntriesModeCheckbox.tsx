"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default () => {
  const router = useRouter();
  const searchParams = new URLSearchParams(useSearchParams().toString());

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    checked ? searchParams.set("mode", "named") : searchParams.delete("mode");
    router.replace("?" + searchParams.toString());
  };

  return (
    <div className="flex items-center gap-1">
      <input className="h-4 w-4 cursor-pointer accent-black outline-none dark:accent-kinda-white" type="checkbox" id="check" defaultChecked={searchParams.get("mode") === "named"} onChange={onCheckboxChange} />
      <label className="select-none" htmlFor="check">
        Show only named entries
      </label>
    </div>
  );
};
