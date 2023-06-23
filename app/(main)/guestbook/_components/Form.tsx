"use client";

// Inspired by https://leerob.io/guestbook

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { postMessage } from "../actions";
import { SignOut } from "./Auth";

export default ({ name }: { name?: string }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const isMutating = isFetching || isPending;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsFetching(true);
    setIsError(false);

    const form = e.currentTarget;
    const input = form.elements.namedItem("message") as HTMLInputElement;

    // Post message (server action)
    const postWasOk = await postMessage(input.value, name);

    setIsFetching(false);

    if (postWasOk) {
      input.value = "";
      startTransition(() => router.refresh());
    } else {
      setIsError(true);
    }
  }

  return (
    <div className="mb-1">
      {name && <SignOut />}
      <form className="flex gap-2 max-[370px]:flex-col" onSubmit={onSubmit}>
        <input className="rounded border border-black/50 bg-white p-2 shadow outline-none" type="text" name="message" placeholder="Your message..." required disabled={isPending} maxLength={50} />
        <button className="rounded border border-black p-2 font-medium text-black transition-all hover:bg-black hover:text-white active:translate-y-[2px] disabled:bg-gray-300 disabled:text-gray-500" type="submit" disabled={isMutating}>
          <i className="fa-solid fa-paper-plane" /> Send
        </button>
      </form>

      {isError && <span className="text-red-500">Failed to send message.</span>}
    </div>
  );
};
