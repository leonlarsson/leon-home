import type { ButtonHTMLAttributes } from "react";

export const CVPrintButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} onClick={() => window.print()}>
      {props.children}
    </button>
  );
};
