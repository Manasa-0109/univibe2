import type {
  BaseEntity,
  ImageRef,
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
  avatar?: ImageRef;
  banner?: ImageRef;
  role: UserRole;
  communityIds: UUID[];
  teamIds: UUID[];
  isVerified: boolean;
  socialLinks?: SocialLinks;
  followerCount: number;
  followingCount: number;
}
