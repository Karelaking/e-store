import React from 'react'
import { Container } from './Container'
import Link from 'next/link';

const links = [
  { name: "Shop Top", href: "/shop-top" },
  { name: "Shop Bottoms", href: "/new-arrivals" },
  { name: "Shop Outerwear", href: "/best-sellers" },
  { name: "View All", href: "/sale" },
];

const HeroSection = () => {
  return (
    <Container>
      <section className="py-12 border-b border-zinc-100">
        <div className="mx-auto px-2 grid grid-cols-2 md:grid-cols-4 gap-4">
          {links.map((link) => (
            <Link className="group text-center" href={link.href} key={link.name}>
              <span className="font-label text-[10px] uppercase tracking-[0.3em] text-gray-400 group-hover:text-on-surface transition-colors">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
}

export default HeroSection