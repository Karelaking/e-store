import React from "react";
import { Container } from "./Container";
import { ProductCard } from "./ProductCard";
import { MinimalButton } from "./MinimalButton";
import { getTrendingItemsAction } from "@/actions";
import { ProductItems } from "@/types/ProductItems.interface";

export const TrendingSection = async (): Promise<React.ReactNode> => {
  const trendingItems = await getTrendingItemsAction();

  return (
    <Container className="flex flex-col">
      <div className="grid grid-cols-3 my-20">
        <div className="flex flex-col gap-2.5 col-span-2">
          <span className="uppercase tracking-[0.5em] text-xs font-extralight">
            Essentials
          </span>
          <h2 className="text-3xl font-light uppercase wrap-break-word text-manrope pr-6">
            Trending Pieces
          </h2>
        </div>
        <div className="flex justify-end uppercase tracking-[0.3em] text-xs font-extralight font-label w-full h-full items-end border-b border-gray-300 hover:border-gray-800 pb-2">
            Shop All Trending
        </div>
      </div>
      <div className="w-full h-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {trendingItems.map((item: ProductItems) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      <MinimalButton href="/trending" title="Shop All Trending" />
    </Container>
  );
};