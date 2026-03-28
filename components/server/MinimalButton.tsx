import Link from 'next/link'
import React from 'react'

export const MinimalButton = ({href, title}: {href: string, title: string}): React.ReactNode => {
  return (
    <Link
      href={href}
      className="w-full px-16 py-5 border border-gray-400 text-[10px] uppercase tracking-[0.4em] hover:bg-gray-200 hover:text-neutral-800 transition-all duration-500 text-center hover:text-[12px]"
    >
      {title}
    </Link>
  );
}