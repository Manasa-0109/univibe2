import type {
  BaseEntity,
  ISODateString,
  SocialLinks,
  UUID,
  Visibility,
} from "./common";

export type CommunityCategory =
  | "k-pop"
  | "k-drama"
  | "tollywood"
  | "bollywood"
  | "kollywood"
  | "mollywood"
  | "pollywood"
  | "indian-music"
  | "indian-sports"
  | "creators";

export interface Community extends BaseEntity {
  name: string;
  description: string;
  avatarUrl?: string;
  bannerUrl?: string;
  category: CommunityCategory;
  memberCount: number;
  isVerified: boolean;
  visibility: Visibility;
  ownerId: UUID;
  socialLinks?: SocialLinks;
  tags: string[];
  rules?: string[];
}

export interface CommunityMember {
  id: UUID;
  communityId: UUID;
  userId: UUID;
  role: "owner" | "admin" | "moderator" | "member";
  joinedAt: ISODateString;
}
