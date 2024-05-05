"use client";

import { useContext } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { GuestbookContextType, GuestbookContext } from "./GuestbookContext";

export default () => {
  const router = useRouter();
  const { showTimestamps, setShowTimestamps } = useContext(
    GuestbookContext,
  ) as GuestbookContextType;
  const searchParams = new URLSearchParams(useSearchParams().toString());

  const onNamedEntriesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    checked ? searchParams.set("named", "true") : searchParams.delete("named");
    router.replace("?" + searchParams.toString());
  };

  return (
    <div className="flex flex-wrap">
      <div className="me-3 flex items-center gap-1">
        <input
          className="peer h-4 w-4 cursor-pointer accent-black dark:accent-kinda-white"
          type="checkbox"
          id="named"
          defaultChecked={searchParams.get("named") === "true"}
          onChange={onNamedEntriesChange}
        />
        <label
          className="select-none underline-offset-2 opacity-80 transition-opacity peer-checked:underline peer-checked:opacity-100"
          htmlFor="named"
        >
          Show only named entries
        </label>
      </div>

      <div className="flex items-center gap-1">
        <input
          className="peer h-4 w-4 cursor-pointer accent-black dark:accent-kinda-white"
          type="checkbox"
          id="timestamps"
          defaultChecked={showTimestamps}
          onChange={e => setShowTimestamps(e.target.checked)}
        />
        <label
          className="select-none underline-offset-2 opacity-80 transition-opacity peer-checked:underline peer-checked:opacity-100"
          htmlFor="timestamps"
        >
          Show timestamps
        </label>
      </div>
    </div>
  );
};
