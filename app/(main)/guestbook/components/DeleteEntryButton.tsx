"use client";

import { useRouter } from "next/navigation";
import { deleteEntry } from "../lib/actions";

export default ({ id }: { id: string }) => {
  const router = useRouter();

  const onDeleteClick = async (refresh: boolean) => {
    const postWasOk = await deleteEntry(id);
    if (refresh && postWasOk) router.refresh();
  };

  return (
    <span className="text-red-500 dark:text-red-400">
      <button className="hover:underline" title={`Delete entry with ID ${id} and refresh.`} onClick={() => onDeleteClick(true)}>
        [DR]
      </button>{" "}
      <button className="hover:underline" title={`Delete entry with ID ${id}.`} onClick={() => onDeleteClick(false)}>
        [D]
      </button>
    </span>
  );
};
