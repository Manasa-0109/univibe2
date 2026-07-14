import type { BaseEntity, ImageRef, SocialLinks } from "./common";

export type CelebrityProfession =
  | "actor"
  | "musician"
  | "athlete"
  | "influencer"
  | "model"
  | "tv-personality"
  | "comedian"
  | "other";

export type CelebrityStatus = "active" | "inactive" | "retired" | "hiatus";

export interface Celebrity extends BaseEntity {
  displayName: string;
  realName?: string;
  bio: string;
  avatar?: ImageRef;
  banner?: ImageRef;
  profession: CelebrityProfession;
  agency?: string;
  followerCount: number;
  isVerified: boolean;
  status: CelebrityStatus;
  socialLinks?: SocialLinks;
  tags: string[];
}
