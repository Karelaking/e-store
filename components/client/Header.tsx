"use client";

import React from "react";
import { Logo } from "../server/Logo";
import {
  Menu03Icon,
  Search01Icon,
  ShoppingBag01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export const Header = (): React.ReactNode => {
  return (
    <header className="container w-full h-16 flex items-center justify-between px-4 lg:px-12 bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <HugeiconsIcon icon={Menu03Icon} onClick={() => {}} />
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
