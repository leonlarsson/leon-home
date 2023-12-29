"use client";

import { ButtonHTMLAttributes } from "react";

export default (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} onClick={() => window.print()}>
      {props.children}
    </button>
  );
};
