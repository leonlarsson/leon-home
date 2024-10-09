"use client";

import { useState } from "react";
import { postEntry } from "../lib/actions";
import Icons from "../../components/icons";

type Props = {
  showNameInput?: boolean;
};
export default ({ showNameInput }: Props) => {
  const [isWorking, setIsWorking] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isRatelimited, setIsRatelimited] = useState(false);

  // Insert entry into database
  const postEntryFunc = async (
    message: string,
    name?: string,
  ): Promise<boolean | "ratelimited"> => {
    setIsWorking(true);
    setIsError(false);
    setIsRatelimited(false);
    const entryWasInserted = await postEntry(message, name);
    setIsWorking(false);
    setIsError(entryWasInserted === false);
    setIsRatelimited(entryWasInserted === "ratelimited");
    return entryWasInserted;
  };

  return (
    <div>
      <form
        className="flex justify-center gap-2 max-[600px]:flex-col"
        onSubmit={async event => {
          event.preventDefault();
          const form = event.currentTarget;
          const message = (
            form.elements.namedItem("message") as HTMLInputElement
          ).value;
          const name = (
            form.elements.namedItem("name") as HTMLInputElement | null
          )?.value;
          const postWasOk = await postEntryFunc(message, name);
          if (postWasOk === true) form.reset();
        }}
      >
        {showNameInput && (
          <input
            className="card rounded-md p-2 outline-none disabled:cursor-not-allowed disabled:bg-neutral-300 dark:disabled:bg-neutral-600"
            type="text"
            name="name"
            placeholder="Your name"
            required
            disabled={isWorking}
            maxLength={50}
          />
        )}

        <input
          className="card rounded-md p-2 outline-none disabled:cursor-not-allowed disabled:bg-neutral-300 dark:disabled:bg-neutral-600"
          type="text"
          name="message"
          placeholder="Your message"
          required
          disabled={isWorking}
          maxLength={100}
        />

        <button
          className="card flex items-center justify-center gap-2 rounded-md p-2 disabled:cursor-not-allowed disabled:bg-neutral-300 dark:disabled:bg-neutral-600"
          type="submit"
          disabled={isWorking}
        >
          <Icons.paperPlane /> Send
        </button>
      </form>
      {(isError || isRatelimited) && (
        <span className="mt-1 text-red-500 dark:text-red-400">
          {isError ? "Failed to send message." : "You are sending too fast."}
        </span>
      )}
    </div>
  );
};
