"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import Icons from "../../components/icons";

export default () => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  return (
    <button title="Click to refresh." onClick={() => startTransition(() => router.refresh())}>
      <Icons.arrowRotate className={`size-6 ${pending ? "animate-spin" : ""}`} />
    </button>
  );
};
