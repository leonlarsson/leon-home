"use client";

export default ({ isPending, isMutating, onFormSubmit }: { isPending: boolean; isMutating: boolean; onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void> }) => (
  <form className="flex justify-center gap-2 max-[370px]:flex-col" onSubmit={onFormSubmit}>
    <input className="text-input" type="text" name="message" placeholder="Your message..." required disabled={isPending} maxLength={50} />
    <button className="button-with-border" type="submit" disabled={isMutating}>
      <i className="fa-solid fa-paper-plane" /> Send
    </button>
  </form>
);
