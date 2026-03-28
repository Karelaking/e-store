"use client";

import React from "react";
import Link from "next/link";
import {
  Menu03Icon,
  Search01Icon,
  ShoppingBag01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Logo } from "./Logo";

const sidebarMenuItems = [
  { href: "/", label: "Home", helper: "Featured collections" },
  { href: "/trending", label: "Trending", helper: "Best sellers now" },
  {
    href: "/new-arrivals",
    label: "New Arrivals",
    helper: "Latest seasonal drop",
  },
  { href: "/onboarding", label: "Onboarding", helper: "Complete profile" },
  { href: "/seller", label: "Seller", helper: "Manage your shop" },
];

const SideBar = (): React.ReactNode => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          aria-label="Open menu"
          variant="ghost"
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
          <SheetDescription className="mt-8 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Discover
          </SheetDescription>
          <nav className="mt-4 flex flex-col gap-2">
            {sidebarMenuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between rounded-xl border border-border/70 bg-background px-4 py-3 transition-colors hover:bg-accent/70"
              >
                <span className="flex flex-col gap-1">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-foreground">
                    {item.label}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    {item.helper}
                  </span>
                </span>
                <HugeiconsIcon
                  icon={ShoppingBag01Icon}
                  className="size-4 text-muted-foreground transition-colors group-hover:text-foreground"
                />
              </Link>
            ))}
          </nav>
          <div className="mt-8 h-full border-t border-border/70 pt-6">
            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Account
            </p>
            <UserButton />
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export const Header = (): React.ReactNode => {
  return (
    <header className="w-full h-16 md:h-20 flex items-center justify-between px-4 lg:px-12 bg-background/60 backdrop-blur-sm border-b border-border sticky top-0 z-100">
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
