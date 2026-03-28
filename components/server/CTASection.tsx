import React from 'react'
import { Container } from './Container'
import { MinimalButton } from './MinimalButton';

export const CTASection = (): React.ReactNode => {
  return (
    <Container className="py-48 px-6 text-center bg-white border-t border-zinc-100 flex flex-col items-center">
      <div className="mx-auto space-y-12">
        <div className="flex flex-col items-center gap-4">
          <span className="font-label text-[10px] uppercase tracking-[0.6em] text-outline">
            The Atelier List
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-extralight text-on-surface">
            Early Access Only
          </h2>
          <p className="font-body text-on-surface-variant font-light leading-relaxed">
            Join our inner circle for priority access to seasonal drops, limited
            edition releases, and invitations to private viewing events.
          </p>
          <form action="" className="mx-auto relative group flex flex-col items-center w-full mt-10">
            <input
              type="text"
              className="w-full py-5 border border-gray-400 text-[10px] uppercase tracking-[0.4em] hover:bg-gray-200 hover:text-white transition-all duration-500 text-center hover:text-[12px]"
              placeholder="Enter you email"
            />
            <button className='mt-12 w-full py-5 bg-on-surface text-white text-[10px] uppercase tracking-[0.4em] bg-zinc-800 transition-colors'>Subscribe</button>
          </form>
        </div>
      </div>
    </Container>
  );
}