import type {
  BaseEntity,
  ImageRef,
  SocialLinks,
  UUID,
} from "./common";

export type CreatorCategory =
  | "artist"
  | "streamer"
  | "writer"
  | "video"
  | "musician"
  | "designer"
  | "developer"
  | "other";

export interface Creator extends BaseEntity {
  displayName: string;
  bio: string;
  avatar?: ImageRef;
  banner?: ImageRef;
  category: CreatorCategory;
  communityIds: UUID[];
  teamIds: UUID[];
  contentCount: number;
  followerCount: number;
  isVerified: boolean;
  socialLinks?: SocialLinks;
  tags: string[];
}
