"use server";

import { TrendingItem, trendingItems } from "@/lib/data/trending-data";

export const getTrendingItemsAction = async (): Promise<TrendingItem[]> => {
  return trendingItems;
};