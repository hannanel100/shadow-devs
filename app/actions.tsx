"use client";
import { Button } from "@/components";
import { signIn, signOut } from "next-auth/react";

export function SignOut() {
  return (
    <Button
      onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
      text="sign out"
      type="button"
    />
  );
}

export function SignIn() {
  return (
    <Button
      onClick={() => signIn("github")}
      text="login with github"
      type="button"
      icon="github"
    />
  );
}
