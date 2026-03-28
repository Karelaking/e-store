import React from 'react'
import { Container } from './Container'
import Link from 'next/link';
import Image from 'next/image';

const links = [
  { name: "Shop Top", href: "/shop-top" },
  { name: "Shop Bottoms", href: "/new-arrivals" },
  { name: "Shop Outerwear", href: "/best-sellers" },
  { name: "View All", href: "/sale" },
];

const HeroSection = () => {
  return (
    <Container className='px-0'>
      <section className="border-b border-zinc-100 pb-10">
        <div className="min-h-dvh grid grid-cols-1 md:grid-cols-2 items-center mb-12">
          <div className="bg-zinc-800 w-full h-full flex items-center justify-center absolute">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEGOimlLAfBMYR_cp8NdBQy6Oa2nqI8uKo6qhBq9g3SJtZRRHl-_p38IA9WCe_2036XYelq-pOj0UP1pisnfN4XpomKuJwL-ALrzVFRCcs-CqNhO7B4lZ4yc3RPKBNzUtc5RH_zoNCs6TlnimvwxjZSyuW_Gz2N-HxrZ65Qgf0YjbT1Oj70dkapSN1R-ZA8JoLcFTQ2DpsmNkhuPhJ0BTbQ-pcc1SscySR24ImE_LUXx_SY2fGYOpvYtzTY92fm-2yZv9lur4E41B5"
              alt="Hero Image"
              loading='eager'
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover w-full h-full grayscale-20 transition-all duration-300"
            />
          </div>
        </div>
        <div className="mx-auto px-2 grid grid-cols-2 md:grid-cols-4 gap-4">
          {links.map((link) => (
            <Link
              className="group text-center"
              href={link.href}
              key={link.name}
            >
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