"use client";

import { signIn, signOut } from "next-auth/react";

export const SignOut = () => {
  return (
    <button className="mb-2" onClick={() => signOut()}>
      <i className="fa-solid fa-lock" /> Sign out
    </button>
  );
};

export const SignInGitHub = () => {
  return (
    <button className="rounded border border-black p-2 text-black transition-colors hover:bg-black hover:text-white" title="Sign in with GitHub." onClick={() => signIn("github")}>
      <i className="fa-brands fa-github fa-xl fa-fw" /> Sign in
    </button>
  );
};

export const SignInDiscord = () => {
  return (
    <button className="rounded border border-black p-2 text-black transition-colors hover:bg-black hover:text-white" title="Sign in with Discord." onClick={() => signIn("discord")}>
      <i className="fa-brands fa-discord fa-xl fa-fw" /> Sign in
    </button>
  );
};
