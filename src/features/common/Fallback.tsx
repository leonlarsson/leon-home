import { Link } from "@tanstack/react-router";
import type { FC, PropsWithChildren } from "react";

type FallbackProps = {
  text: string;
};

export const Fallback: FC<PropsWithChildren<FallbackProps>> = ({ children, text }) => {
  return (
    <div className="flex gap-2 flex-col items-center justify-center p-4 container mx-auto">
      <div className="text-2xl font-bold">{text}</div>
      <Link className="link" to="/">
        Go back home
      </Link>
      {children}
    </div>
  );
};
