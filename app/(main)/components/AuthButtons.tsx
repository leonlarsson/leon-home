"use client";

import { signIn, signOut } from "next-auth/react";
import Icons from "./icons";

export const SignOut = () => {
  return (
    <button
      className="link font-normal text-red-500 dark:text-red-400"
      title="Sign out."
      onClick={() => signOut()}
    >
      Sign out
    </button>
  );
};

export const SignInGitHub = () => {
  return (
    <button
      className="card flex items-center gap-1 p-2"
      title="Sign in with GitHub."
      onClick={() => signIn("github")}
    >
      <Icons.github className="h-5" /> Sign in
    </button>
  );
};

export const SignInDiscord = () => {
  return (
    <button
      className="card flex items-center gap-1 p-2"
      title="Sign in with Discord."
      onClick={() => signIn("discord")}
    >
      <Icons.discord className="h-5" /> Sign in
    </button>
  );
};
