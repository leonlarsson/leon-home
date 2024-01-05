"use client";

import { signIn, signOut } from "next-auth/react";
import Icons from "./icons";

export const SignOut = () => {
  return (
    <button className="link font-normal text-red-500 dark:text-red-400" title="Sign out." onClick={() => signOut()}>
      Sign out
    </button>
  );
};

export const SignInGitHub = () => {
  return (
    <button className="button-with-border flex items-center" title="Sign in with GitHub." onClick={() => signIn("github")}>
      <Icons.github className="me-1 h-6" /> Sign in
    </button>
  );
};

export const SignInDiscord = () => {
  return (
    <button className="button-with-border flex justify-center" title="Sign in with Discord." onClick={() => signIn("discord")}>
      <Icons.discord className="me-1 h-6" /> Sign in
    </button>
  );
};
