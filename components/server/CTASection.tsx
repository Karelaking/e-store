import React from 'react'
import { Container } from './Container'

export const CTASection = (): React.ReactNode => {
  return (
    <Container className="py-48 px-6 text-center bg-white border-t border-zinc-100">
      <div className="mx-auto space-y-12">
        <div className="space-y-4">
          <span className="font-label text-[10px] uppercase tracking-[0.6em] text-outline">
            The Atelier List
          </span>
        </div>
      </div>
    </Container>
  );
}