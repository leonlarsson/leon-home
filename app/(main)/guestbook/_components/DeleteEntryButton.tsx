"use client";

import { useRouter } from "next/navigation";
import { deleteEntry } from "../actions";

export default ({ id }: { id: string }) => {
  const router = useRouter();

  const onDeleteClick = async () => {
    const postWasOk = await deleteEntry(id);
    if (postWasOk) router.refresh();
  };

  return (
    <button className="text-red-500 hover:underline" title={`Delete entry with ID ${id}`} onClick={onDeleteClick}>
      [Delete]
    </button>
  );
};
