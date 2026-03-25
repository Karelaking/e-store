import React from "react";
import { Logo } from "./Logo";
import { Button } from "../ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Menu03Icon,
  Search01Icon,
  ShoppingBag01Icon,
} from "@hugeicons/core-free-icons";
import { checkUser } from "@/lib/checkUser";

export const Header = async (): Promise<React.ReactNode> => {
  await checkUser()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
  return (
    <header className="container w-full h-16 flex items-center justify-between px-4 lg:px-12 bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <Button variant="ghost" size="sm" className="lg:hidden size-8">
        <HugeiconsIcon icon={Menu03Icon} />
      </Button>
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
