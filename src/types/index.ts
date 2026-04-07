/** Shared domain types — extend as you wire catalog / cart / WordPress or a new API. */

export type Money = {
  amount: number;
  currency: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: Money;
  shortDescription?: string;
  imageUrl?: string;
};

export type Category = {
  id: string;
  slug: string;
  name: string;
  parentId?: string | null;
};
