import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = (): React.ReactNode => {
  return (
    <div className="flex justify-center items-center w-full">
      <Link href="/" className="relative w-24 h-10 aspect-video">
        <Image
          src="/logo.png"
          alt="E-STORE"
          fill
          sizes=""
          loading="eager"
        />
      </Link>
    </div>
  );
};
