import type { BaseEntity, SocialLinks } from "./common";

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
  avatarUrl?: string;
  bannerUrl?: string;
  profession: CelebrityProfession;
  agency?: string;
  followerCount: number;
  isVerified: boolean;
  status: CelebrityStatus;
  socialLinks?: SocialLinks;
  tags: string[];
}
