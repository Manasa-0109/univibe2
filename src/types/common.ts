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

/**
 * Structured image reference. The `placeholder` URL is used during
 * development; swap `src` to a permanent CDN/asset path later without
 * touching the rest of the data model.
 */
export interface ImageRef {
  id: UUID;
  src: string;
  placeholder: string;
  altText?: string;
  width?: number;
  height?: number;
}

export interface MediaGallery {
  images: ImageRef[];
  coverImage?: ImageRef;
  thumbnail?: ImageRef;
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

export type Currency = "USD" | "EUR" | "GBP" | "JPY" | "KRW" | "CNY" | "INR";
