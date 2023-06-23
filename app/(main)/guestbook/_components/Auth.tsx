"use client";

import { signIn, signOut } from "next-auth/react";

export const SignOut = () => {
  return (
    <button className="mb-2" onClick={() => signOut()}>
      <i className="fa-solid fa-lock" /> Sign out
    </button>
  );
};

export const SignIn = () => {
  return (
    <button className="mb-4 rounded border border-black p-2 text-black transition-colors hover:bg-black hover:text-white" onClick={() => signIn("github")}>
      <i className="fa-brands fa-github fa-xl me-1" /> Sign in with GitHub
    </button>
  );
};
