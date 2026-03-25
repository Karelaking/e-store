import { Button } from "@/components/ui/button";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="w-full min-h-dvh flex items-center justify-center">
      <Show when="signed-out">
        <SignInButton />
        <SignUpButton>
          <Button className="">
            Sign Up
          </Button>
        </SignUpButton>
      </Show>
      <Show when="signed-in">
        <UserButton />
      </Show>
    </main>
  );
}
