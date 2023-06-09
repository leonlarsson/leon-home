"use client";

import { useRouter } from "next/navigation";
import { deletePost } from "../lib/actions";

export default ({ id }: { id: string }) => {
  const router = useRouter();

  const onDeleteClick = async () => {
    const deleteWasOk = await deletePost(id);
    if (deleteWasOk) router.refresh();
  };

  return (
    <button className="button-with-border mt-4 dark:hover:!border-red-500 hover:bg-red-500" title={`Delete post with ID ${id}.`} onClick={onDeleteClick}>
      Delete
    </button>
  );
};
