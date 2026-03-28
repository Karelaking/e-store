import React from "react";
import {
  Menu03Icon,
  Search01Icon,
  ShoppingBag01Icon,
} from "@hugeicons/core-free-icons";
import { Logo } from "./Logo";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "../ui/sheet";
import { UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const SideBar = (): React.ReactNode => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          aria-label="Open menu"
          variant="ghost"
          className="p-0 w-10 h-10 rounded-full"
        >
          <HugeiconsIcon icon={Menu03Icon} />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="z-100 absolute"
        showCloseButton={false}
      >
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription className="mt-20">
            This is the sidebar
          </SheetDescription>
          <div className="mt-6 h-screen flex flex-col justify-end">
            <UserButton />
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export const Header = (): React.ReactNode => {
  return (
    <header className="w-full h-16 md:h-20 flex items-center justify-between px-4 lg:px-12 bg-background/60 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <SideBar />
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Logo />
      </div>
      <div className="w-max flex items-center gap-4">
        <HugeiconsIcon icon={Search01Icon} />
        <HugeiconsIcon icon={ShoppingBag01Icon} />
      </div>
    </header>
  );
};
