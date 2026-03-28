import { ProductItems } from "@/types/ProductItems.interface";
import Image from "next/image";
import React from "react";

export const ProductCard = async ({
  item,
}: {
  item: ProductItems;
}): Promise<React.ReactNode> => {
  return (
    <div className="w-full h-full group cursor-pointer">
      <div className="aspect-3/4 overflow-hidden relative">
        <Image src={item.image} alt={item.name} fill className="group-hover:scale-105 transition-transform duration-300 object-cover"/>
      </div>
      <div className="w-full h-full mt-6 flex justify-between">
        <div className="">
          <h4 className="font-label text-xs uppercase tracking-[0.2em] font-medium">
            {item.name}
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