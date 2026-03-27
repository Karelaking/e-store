import React from "react";
import { Container } from "./Container";
import TrendingCard from "./TrendingCard";
import { TrendingItem } from "@/lib/data/trending-data";
import { getTrendingItemsAction } from "@/actions";

const TrendingSection = async (): Promise<React.ReactNode> => {
  const trendingItems = await getTrendingItemsAction();

  return (
    <Container className="flex flex-col">
      <div className="grid grid-cols-3 mb-20">
        <div className="flex flex-col gap-2.5 col-span-2">
          <span className="uppercase tracking-[0.5em] text-xs font-extralight">
            Essentials
          </span>
          <h2 className="text-3xl font-light uppercase wrap-break-word text-manrope">
            Trending Pieces
          </h2>
        </div>
        <div className="flex justify-end uppercase tracking-[0.3em] text-xs font-extralight font-label w-full h-full items-end border-b border-gray-300 hover:border-gray-800 pb-2">
            Shop All Trending
        </div>
      </div>
      <div className="w-full h-max grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {trendingItems.map((item: TrendingItem) => (
          <TrendingCard key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default TrendingSection;
