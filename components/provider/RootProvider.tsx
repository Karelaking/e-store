import React from "react";
import { TooltipProvider } from "../ui/tooltip";
import { ThemeProvider } from "./ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";

const RootProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  return (
    <ClerkProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <TooltipProvider>{children}</TooltipProvider>
      </ThemeProvider>
    </ClerkProvider>
  );
};

export default RootProvider;
