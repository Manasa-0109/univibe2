import type {
  BaseEntity,
  SocialLinks,
  UUID,
} from "./common";

export type UserRole =
  | "member"
  | "creator"
  | "community-admin"
  | "moderator"
  | "super-admin";

export interface User extends BaseEntity {
  username: string;
  email: string;
  displayName: string;
  bio?: string;
  avatarUrl?: string;
  bannerUrl?: string;
  role: UserRole;
  communityIds: UUID[];
  teamIds: UUID[];
  isVerified: boolean;
  socialLinks?: SocialLinks;
  followerCount: number;
  followingCount: number;
}
