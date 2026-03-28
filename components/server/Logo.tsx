import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Logo = (): React.ReactNode => {
  return (
    <div className="flex justify-center items-center w-full">
      <Link href="/" className="relative w-24 h-10 aspect-video">
        <Image
          src="/logo.png"
          alt="E-STORE"
          fill
          sizes={"(max-width: 768px) 150px, (max-width: 1200px) 200px, 240px"}
          loading="eager"
        />
      </Link>
    </div>
  );
};
