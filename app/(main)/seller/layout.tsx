import React from 'react'

const layout = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  return (
    <div>
      {children}
    </div>
  )
}

export default layout