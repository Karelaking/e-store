import React from "react";
import { Logo } from "./Logo";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

export const Header = (): React.ReactNode => {
  return (
    <header className="container w-full h-16 flex items-center justify-between px-4 lg:px-12 ">
      <Logo />
      <nav></nav>
      <div className="w-max flex items-center gap-4">
        <Show when="signed-out">
          <SignInButton>
            <Button className=" cursor-pointer">Sign In</Button>
          </SignInButton>
          <SignUpButton>
            <Button className=" cursor-pointer">Sign Up</Button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </header>
  );
};
