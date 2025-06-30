import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import Icons from "../../icons/icons";
import { $postGuestbookEntry } from "../functions";

type GuestbookSendMessageSectionProps = {
  showNameInput?: boolean;
};

export const GuestbookSendMessageSection = (props: GuestbookSendMessageSectionProps) => {
  const queryClient = useQueryClient();
  const formRef = useRef<HTMLFormElement>(null);

  const { mutate, data, isError, isPending } = useMutation({
    mutationFn: $postGuestbookEntry,
    onSuccess: (result) => {
      if (result === true) {
        queryClient.invalidateQueries({ queryKey: ["guestbook", "entries"] });
        formRef.current?.reset();
      }
    },
  });
  const isRatelimited = data === "ratelimited";

  return (
    <div>
      <form
        encType="multipart/form-data"
        className="flex justify-center gap-2 max-[600px]:flex-col"
        ref={formRef}
        onSubmit={async (event) => {
          event.preventDefault();
          const form = event.currentTarget;
          const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
          const message = (form.elements.namedItem("message") as HTMLInputElement).value;
          mutate({ data: { name, message } });
        }}
      >
        {props.showNameInput && (
          <input
            className="card rounded-md p-2 outline-none disabled:cursor-not-allowed disabled:bg-neutral-300 dark:disabled:bg-neutral-600"
            type="text"
            name="name"
            placeholder="Your name"
            required
            disabled={isPending}
            maxLength={50}
          />
        )}

        <input
          className="card rounded-md p-2 outline-none disabled:cursor-not-allowed disabled:bg-neutral-300 dark:disabled:bg-neutral-600"
          type="text"
          name="message"
          placeholder="Your message"
          required
          disabled={isPending}
          maxLength={100}
        />

        <button
          className="card flex items-center justify-center gap-2 rounded-md p-2 disabled:cursor-not-allowed disabled:bg-neutral-300 dark:disabled:bg-neutral-600"
          type="submit"
          disabled={isPending}
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
