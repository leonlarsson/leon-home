"use client";

import { useRouter } from "next/navigation";
import { deleteEntry, editEntry } from "../lib/actions";
import { Entry } from "@/types";

export default ({ entry }: { entry: Entry }) => {
  const router = useRouter();

  const onEditClick = async () => {
    const newMessage = prompt("Enter new message (max 100 chars):", entry.body);
    if (!newMessage) return;
    if (newMessage === entry.body) return;
    if (newMessage.length > 100) return alert("Message too long or something went wrong.");
    const entryWasEdited = await editEntry(entry.id, newMessage.trim());
    if (entryWasEdited) router.refresh();
  };

  const onDeleteClick = async (refresh: boolean) => {
    const entryWasDeleted = await deleteEntry(entry.id);
    if (refresh && entryWasDeleted) router.refresh();
  };

  return (
    <span className="text-red-500 dark:text-red-400">
      <button className="hover:underline" title={`Edit entry with ID ${entry.id}.`} onClick={onEditClick}>
        [E]
      </button>{" "}
      <button className="hover:underline" title={`Delete entry with ID ${entry.id} and refresh.`} onClick={() => onDeleteClick(true)}>
        [DR]
      </button>{" "}
      <button className="hover:underline" title={`Delete entry with ID ${entry.id}.`} onClick={() => onDeleteClick(false)}>
        [D]
      </button>
    </span>
  );
};
