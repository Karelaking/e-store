import React from 'react'
import { cn } from '@/lib/utils'

export const Container = ({ children, className }: { children: React.ReactNode; className?: string }): React.ReactNode => {
  return (
    <section className={cn('mx-auto max-w-8xl min-h-dvh px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </section>
  )
}
