import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = (): React.ReactNode => {
  return (
    <div className="flex justify-center items-center w-full">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="E-STORE"
          style={{
            width: "auto",
            height: "auto"
          }}
          width={80}
          height={40}
          loading="eager"
        />
      </Link>
    </div>
  );
};
