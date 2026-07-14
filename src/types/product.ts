import type {
  BaseEntity,
  Currency,
  MediaImage,
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
  images: MediaImage[];
  category: ProductCategory;
  inventory: number;
  communityId?: UUID;
  rating: number;
  reviewCount: number;
  isActive: boolean;
  sku?: string;
  tags: string[];
}
