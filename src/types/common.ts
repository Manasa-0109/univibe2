export type UUID = string;
export type Slug = string;
export type ISODateString = string;

export interface BaseEntity {
  id: UUID;
  slug: Slug;
  createdAt: ISODateString;
  updatedAt: ISODateString;
}

export interface SocialLinks {
  website?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
  discord?: string;
  facebook?: string;
  twitch?: string;
}

export type Visibility = "public" | "private" | "members-only";

export type EntityStatus = "active" | "inactive" | "archived" | "draft";

export interface MediaImage {
  id: UUID;
  url: string;
  altText?: string;
  width?: number;
  height?: number;
}

export interface MediaGallery {
  images: MediaImage[];
  coverImage?: MediaImage;
  thumbnail?: MediaImage;
}

export interface PaginatedMeta {
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

export interface PaginationParams {
  page?: number;
  perPage?: number;
  sortBy?: string;
  sortDir?: "asc" | "desc";
}

export type Currency = "USD" | "EUR" | "GBP" | "JPY" | "KRW" | "CNY";
