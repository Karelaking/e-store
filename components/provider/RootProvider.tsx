import React from 'react'
import { TooltipProvider } from '../ui/tooltip'
import { ThemeProvider } from './ThemeProvider'

const RootProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
}

export default RootProvider