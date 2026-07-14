import type {
  BaseEntity,
  ImageRef,
  SocialLinks,
  UUID,
} from "./common";

export type TeamCategory =
  | "esports"
  | "content"
  | "music"
  | "creative"
  | "community"
  | "other";

export interface Team extends BaseEntity {
  name: string;
  description: string;
  avatar?: ImageRef;
  banner?: ImageRef;
  communityId: UUID;
  category: TeamCategory;
  memberCount: number;
  ownerId: UUID;
  socialLinks?: SocialLinks;
  tags: string[];
}

export interface TeamMember {
  id: UUID;
  teamId: UUID;
  userId: UUID;
  role: "captain" | "member" | "substitute" | "coach";
  joinedAt: string;
}
