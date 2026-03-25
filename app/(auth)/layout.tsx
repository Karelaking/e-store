import React from 'react'

const layout = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  return (
    <section className='container w-full min-h-dvh mx-auto flex flex-col justify-center items-center'>{children}</section>
  )
}

export default layout