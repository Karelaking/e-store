import React from 'react'
import { Container } from './Container'
import { ProductItems } from '@/types/ProductItems.interface';
import { ProductCard } from './ProductCard';
import { getNewArrivalsAction } from '@/actions';
import { MinimalButton } from './MinimalButton';

export const NewArrivalsSection = async (): Promise<React.ReactNode> => {
  const newArrivalsItems = await getNewArrivalsAction();

  return (
    <Container className="flex flex-col py-32">
      <div className="text-center mb-20">
        <span className="font-label text-[10px] uppercase tracking-[0.5em] text-gray-400 mb-4 block">
          Seasonal Drop
        </span>
        <h2 className="font-headline text-3xl font-light tracking-tight text-on-surface uppercase">
          New Arrivals
        </h2>
      </div>
      <div className="w-full h-max grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
        {newArrivalsItems.map((item: ProductItems) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      <MinimalButton href="/new-arrivals" title="Shop All New Arrivals" />
    </Container>
  );
}
