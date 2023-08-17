"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default () => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  return (
    <button title="Click to refresh." onClick={() => startTransition(() => router.refresh())}>
      <i className={`fa-solid fa-refresh fa-sm ${pending ? "animate-spin" : ""}`} />
    </button>
  );
};
