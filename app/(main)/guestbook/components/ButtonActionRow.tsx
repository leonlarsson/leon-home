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
    if (newMessage.length > 100) return alert("New message is too long.");
    const entryWasEdited = await editEntry(entry.id, entry.body, newMessage.trim());
    if (entryWasEdited) router.refresh();
  };

  const onDeleteClick = async () => {
    const entryWasDeleted = await deleteEntry(entry.id);
    if (entryWasDeleted) router.refresh();
  };

  return (
    <span className="me-1 inline-flex gap-2 text-base">
      <button className="text-blue-500 transition-colors hover:text-blue-800 dark:text-blue-300" title={`Edit entry with ID ${entry.id}.`} onClick={onEditClick}>
        <i className="fa-solid fa-pen" />
      </button>
      <button className="text-red-500 transition-colors hover:text-red-700 dark:text-red-400" title={`Delete entry with ID ${entry.id}.`} onClick={onDeleteClick}>
        <i className="fa-solid fa-trash" />
      </button>
    </span>
  );
};
