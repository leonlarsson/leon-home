"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { deleteEntry, editEntry } from "../lib/actions";
import { Entry } from "@/types";

export default ({ entry }: { entry: Entry }) => {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onEditModalSaveClick = async () => {
    const newMessage = inputRef.current?.value;
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
    <>
      <EditMessageDialog entry={entry} dialogRef={dialogRef} inputRef={inputRef} saveFunc={onEditModalSaveClick} />

      <span className="me-1 inline-flex gap-2 text-base">
        <button
          className="text-blue-500 transition-colors hover:text-blue-800 dark:text-blue-300"
          title={`Edit entry message with ID ${entry.id}.`}
          onClick={() => {
            if (inputRef?.current) inputRef.current.value = entry.body;
            dialogRef.current?.showModal();
          }}
        >
          <i className="fa-solid fa-pen" />
        </button>
        <button className="text-red-500 transition-colors hover:text-red-700 dark:text-red-400" title={`Delete entry with ID ${entry.id}.`} onClick={onDeleteClick}>
          <i className="fa-solid fa-trash" />
        </button>
      </span>
    </>
  );
};

type EditDialogProps = {
  entry: Entry;
  dialogRef: React.RefObject<HTMLDialogElement>;
  inputRef: React.RefObject<HTMLInputElement>;
  saveFunc: Function;
};

const EditMessageDialog = ({ entry, dialogRef, inputRef, saveFunc }: EditDialogProps) => {
  return (
    <dialog
      className="mx-auto w-full max-w-lg rounded border bg-kinda-white p-2 backdrop:bg-black/30 backdrop:backdrop-blur-sm dark:border-white/20 dark:bg-kinda-black dark:backdrop:bg-black/50"
      onClick={e => {
        // This code handles clicks outside of the dialog, which closes it
        // const dialogDimensions = dialogRef.current?.getBoundingClientRect();
        // if (dialogDimensions && (e.clientX < dialogDimensions.left || e.clientX > dialogDimensions.right || e.clientY < dialogDimensions.top || e.clientY > dialogDimensions.bottom)) {
        //   dialogRef.current?.close();
        // }
      }}
      ref={dialogRef}
    >
      <div className="select-none text-lg font-semibold">Edit message</div>
      <div className="mb-3 select-none">Max 100 characters.</div>

      <input
        className="text-input w-full"
        type="text"
        maxLength={100}
        placeholder="Your message..."
        defaultValue={entry.body}
        ref={inputRef}
        onKeyDown={e => {
          if (e.key === "Enter") {
            e.preventDefault();
            dialogRef.current?.close();
            saveFunc();
          }
        }}
      />

      <div className="mt-2 flex justify-end gap-2">
        <button className="button-with-border" onClick={() => dialogRef.current?.close()}>
          Close
        </button>
        <button
          className="button-with-border"
          onClick={() => {
            dialogRef.current?.close();
            saveFunc();
          }}
        >
          Save
        </button>
      </div>
    </dialog>
  );
};
