import React from 'react'
import { Container } from './Container'

const TrendingSection = () => {
  return (
    <Container className="flex flex-col">
      <div className='grid grid-cols-2'>
        <div>
      <span className='uppercase tracking-[0.5em] text-xs font-extralight'>Essentials</span>
      <h2 className='text-3xl font-light uppercase wrap-break-word text-manrope'>Trending Pieces</h2>
        </div>
      </div>
    </Container>
  );
}

export default TrendingSection