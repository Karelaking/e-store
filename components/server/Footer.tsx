import React from "react";
import Link from "next/link";

export const Footer = (): React.ReactNode => {
  return (
    <footer className="bg-white py-24 px-8 border-t border-zinc-50">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
        <div className="col-span-1 space-y-8">
          <Link className="text-lg font-bold tracking-[0.3em] uppercase" href="#">
            Atelier Noir
          </Link>
          <p className="font-label text-[10px] uppercase tracking-widest mt-8 text-outline leading-loose">
            Modern luxury defined by <br />
            silence and precision.
          </p>
        </div>
      </div>
    </footer>
  );
};
