"use client";

import { useRef } from "react";
import { deleteEntry, editEntry } from "../lib/actions";
import { Entry } from "@/types";

export default ({ entry }: { entry: Entry }) => {
  const editDialogRef = useRef<HTMLDialogElement>(null);
  const deleteDialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onEditModalSaveClick = async () => {
    const newMessage = inputRef.current?.value;
    if (!newMessage) return;
    if (newMessage === entry.body) return;
    if (newMessage.length > 100) return alert("New message is too long.");
    editEntry(entry.id, entry.body, newMessage.trim());
  };

  const onDeleteModalConfirmClick = async () => {
    deleteEntry(entry.id);
  };

  return (
    <>
      <EditMessageDialog entry={entry} editDialogRef={editDialogRef} inputRef={inputRef} saveFunc={onEditModalSaveClick} />
      <DeleteMessageDialog entry={entry} deleteDialogRef={deleteDialogRef} deleteFunc={onDeleteModalConfirmClick} />

      <span className="me-2 inline-flex gap-1 text-base">
        <button
          className="button-with-border !px-1 !py-0"
          title={`Edit entry message with ID ${entry.id}.`}
          onClick={() => {
            if (inputRef?.current) inputRef.current.value = entry.body;
            editDialogRef.current?.showModal();
          }}
        >
          <i className="fa-solid fa-pen fa-fw" />
        </button>
        <button className="button-with-border !px-1 !py-0" title={`Delete entry with ID ${entry.id}.`} onClick={() => deleteDialogRef.current?.showModal()}>
          <i className="fa-solid fa-trash fa-fw" />
        </button>
      </span>
    </>
  );
};

type EditDialogProps = {
  entry: Entry;
  editDialogRef: React.RefObject<HTMLDialogElement>;
  inputRef: React.RefObject<HTMLInputElement>;
  saveFunc: Function;
};

const EditMessageDialog = ({ entry, editDialogRef, inputRef, saveFunc }: EditDialogProps) => {
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
      ref={editDialogRef}
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
            editDialogRef.current?.close();
            saveFunc();
          }
        }}
      />

      <div className="mt-2 flex justify-end gap-2">
        <button className="button-with-border" onClick={() => editDialogRef.current?.close()}>
          Cancel
        </button>
        <button
          className="button-with-border"
          onClick={() => {
            editDialogRef.current?.close();
            saveFunc();
          }}
        >
          Save
        </button>
      </div>
    </dialog>
  );
};

type DeleteDialogProps = {
  entry: Entry;
  deleteDialogRef: React.RefObject<HTMLDialogElement>;
  deleteFunc: Function;
};

const DeleteMessageDialog = ({ entry, deleteDialogRef, deleteFunc }: DeleteDialogProps) => {
  return (
    <dialog
      className="mx-auto max-w-lg rounded border bg-kinda-white p-2 backdrop:bg-black/30 backdrop:backdrop-blur-sm dark:border-white/20 dark:bg-kinda-black dark:backdrop:bg-black/50"
      onClick={e => {
        // This code handles clicks outside of the dialog, which closes it
        // const dialogDimensions = deleteDialogRef.current?.getBoundingClientRect();
        // if (dialogDimensions && (e.clientX < dialogDimensions.left || e.clientX > dialogDimensions.right || e.clientY < dialogDimensions.top || e.clientY > dialogDimensions.bottom)) {
        //   deleteDialogRef.current?.close();
        // }
      }}
      ref={deleteDialogRef}
    >
      <div className="mb-3 select-none text-lg font-semibold">Delete entry</div>
      <div className="select-none">
        <q>{entry.body}</q>
      </div>

      <div className="mt-2 flex justify-end gap-2">
        <button className="button-with-border" onClick={() => deleteDialogRef.current?.close()}>
          Cancel
        </button>
        <button
          className="button-with-border hover:!bg-red-600"
          onClick={() => {
            deleteDialogRef.current?.close();
            deleteFunc();
          }}
        >
          Delete
        </button>
      </div>
    </dialog>
  );
};
