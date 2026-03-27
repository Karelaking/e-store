"use server";

import { trendingItems } from "@/lib/data/trending-data";
import { ProductItems } from "@/types/ProductItems.interface";

export const getTrendingItemsAction = async (): Promise<ProductItems[]> => {
  return trendingItems;
};