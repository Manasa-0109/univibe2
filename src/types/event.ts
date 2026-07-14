import type {
  BaseEntity,
  ISODateString,
  SocialLinks,
  UUID,
  Visibility,
} from "./common";

export type EventStatus =
  | "draft"
  | "published"
  | "live"
  | "ended"
  | "cancelled";

export type EventFormat = "in-person" | "online" | "hybrid";

export interface EventLocation {
  venueName?: string;
  address?: string;
  city?: string;
  country?: string;
  lat?: number;
  lng?: number;
  onlineUrl?: string;
}

export interface Event extends BaseEntity {
  title: string;
  description: string;
  bannerUrl?: string;
  format: EventFormat;
  startTime: ISODateString;
  endTime: ISODateString;
  location: EventLocation;
  communityId?: UUID;
  organizerId: UUID;
  attendeeCount: number;
  capacity?: number;
  status: EventStatus;
  visibility: Visibility;
  socialLinks?: SocialLinks;
  tags: string[];
}

export interface EventAttendee {
  id: UUID;
  eventId: UUID;
  userId: UUID;
  status: "going" | "interested" | "not-going";
  registeredAt: ISODateString;
}
