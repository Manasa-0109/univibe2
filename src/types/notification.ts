import type { UUID, ISODateString } from "./common";

export type NotificationType =
  | "community-update"
  | "event-reminder"
  | "event-invite"
  | "membership-update"
  | "mention"
  | "reply"
  | "follow"
  | "like"
  | "system"
  | "announcement";

export interface Notification {
  id: UUID;
  userId: UUID;
  type: NotificationType;
  title: string;
  message: string;
  isRead: boolean;
  link?: string;
  imageUrl?: string;
  createdAt: ISODateString;
}
