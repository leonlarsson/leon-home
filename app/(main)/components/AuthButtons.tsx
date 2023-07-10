"use client";

import { signIn, signOut } from "next-auth/react";

export const SignOut = () => {
  return (
    <button className="text-red-500 hover:underline dark:text-red-400" title="Sign out." onClick={() => signOut()}>
      Sign out
    </button>
  );
};

export const SignInGitHub = () => {
  return (
    <button className="button-with-border" title="Sign in with GitHub." onClick={() => signIn("github")}>
      <i className="fa-brands fa-github fa-xl fa-fw" /> Sign in
    </button>
  );
};

export const SignInDiscord = () => {
  return (
    <button className="button-with-border" title="Sign in with Discord." onClick={() => signIn("discord")}>
      <i className="fa-brands fa-discord fa-xl fa-fw" /> Sign in
    </button>
  );
};
