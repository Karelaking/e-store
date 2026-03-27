import { ProductItems } from "@/types/ProductItems.interface";
import { newArrivalsItems } from "@/lib/data/new-arrivals";

export const getNewArrivalsAction = async (): Promise<ProductItems[]> => {
  return newArrivalsItems;
};