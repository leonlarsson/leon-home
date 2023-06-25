"use client";

import { useRouter } from "next/navigation";
import { deleteEntry } from "../actions";

export default ({ id }: { id: string }) => {
  const router = useRouter();

  const onDeleteClick = async (refresh: boolean) => {
    const postWasOk = await deleteEntry(id);
    if (refresh && postWasOk) router.refresh();
  };

  return (
    <span className="text-red-500" title={`Delete entry with ID ${id}.`}>
      <button className="hover:underline" onClick={() => onDeleteClick(true)}>
        [DR]
      </button>{" "}
      <button className="hover:underline" onClick={() => onDeleteClick(false)}>
        [D]
      </button>
    </span>
  );
};
