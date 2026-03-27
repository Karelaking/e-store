import Image from "next/image";
import React from "react";
import { TrendingItem } from "@/lib/data/trending-data";

const TrendingCard = async ({
  item,
}: {
  item: TrendingItem;
}): Promise<React.ReactNode> => {
  return (
    <div className="w-full h-full group cursor-pointer">
      <div className="aspect-3/4 overflow-hidden relative">
        <Image src={item.imageUrl} alt={item.title} fill className="group-hover:scale-105 transition-transform duration-300"/>
      </div>
      <div className="w-full h-full mt-6 flex justify-between">
        <div className="">
          <h4 className="font-label text-xs uppercase tracking-[0.2em] font-medium">
            {item.title}
          </h4>
          <p className="font-label text-[10px] text-outline mt-1 uppercase tracking-widest">
            {item.description}
          </p>
        </div>
        <span className="font-label text-xs">${item.price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default TrendingCard;
