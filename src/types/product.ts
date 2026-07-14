import type {
  BaseEntity,
  Currency,
  ImageRef,
  UUID,
} from "./common";

export type ProductCategory =
  | "apparel"
  | "accessories"
  | "digital"
  | "physical"
  | "limited-edition"
  | "bundle"
  | "other";

export interface Product extends BaseEntity {
  name: string;
  description: string;
  price: number;
  currency: Currency;
  images: ImageRef[];
  category: ProductCategory;
  inventory: number;
  communityId?: UUID;
  rating: number;
  reviewCount: number;
  isActive: boolean;
  isFeatured: boolean;
  featuredOrder?: number;
  sku?: string;
  tags: string[];
}
