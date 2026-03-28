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

const SideBar = (): React.ReactNode => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <HugeiconsIcon icon={Menu03Icon} />
      </SheetTrigger>
      <SheetContent side="left" className="" showCloseButton={false}>
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription className="mt-20">
            This sheet doesn&apos;t have a close button in the top-right corner.
            Click outside to close.
          </SheetDescription>
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
