import Icons from "@/features/icons/icons";
import { useQueryClient } from "@tanstack/react-query";
import { createServerFn } from "@tanstack/start";
import { useState } from "react";
import { postEntry } from "../functions";

const postEntryServerFn = createServerFn({ method: "POST" })
  .validator((data: { name: string; message: string }) => data)
  .handler(async (ctx) => {
    const { name, message } = ctx.data;
    const postWasOk = await postEntry(message, name);
    return postWasOk;
  });

type GuestbookSendMessageSectionProps = {
  showNameInput?: boolean;
};

export const GuestbookSendMessageSection = (props: GuestbookSendMessageSectionProps) => {
  const queryClient = useQueryClient();
  const [isWorking, setIsWorking] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isRatelimited, setIsRatelimited] = useState(false);

  return (
    <div>
      <form
        encType="multipart/form-data"
        className="flex justify-center gap-2 max-[600px]:flex-col"
        onSubmit={async (event) => {
          event.preventDefault();
          const form = event.currentTarget;
          const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
          const message = (form.elements.namedItem("message") as HTMLInputElement).value;

          setIsWorking(true);
          setIsError(false);
          setIsRatelimited(false);
          const postWasOk = await postEntryServerFn({ data: { name, message } });
          setIsWorking(false);
          setIsError(postWasOk === false);
          setIsRatelimited(postWasOk === "ratelimited");

          if (postWasOk === true) {
            queryClient.invalidateQueries({ queryKey: ["guestbook", "entryData"] });
            form.reset();
          }
        }}
      >
        {props.showNameInput && (
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
