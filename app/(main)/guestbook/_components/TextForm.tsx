"use client";

export default ({ isPending, isMutating, onFormSubmit }: { isPending: boolean; isMutating: boolean; onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void> }) => (
  <form className="flex justify-center gap-2 max-[370px]:flex-col" onSubmit={onFormSubmit}>
    <input className="rounded border border-black/50 bg-white p-2 shadow outline-none" type="text" name="message" placeholder="Your message..." required disabled={isPending} maxLength={50} />
    <button className="rounded border border-black p-2 font-medium text-black transition-all hover:bg-black hover:text-white active:translate-y-[2px] disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500" type="submit" disabled={isMutating}>
      <i className="fa-solid fa-paper-plane" /> Send
    </button>
  </form>
);
