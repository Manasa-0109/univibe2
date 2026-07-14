import type { Event, EventStatus, UUID } from "../types";
import { events } from "../mock/events";

export function getAllEvents(): Event[] {
  return [...events];
}

export function getEventById(id: UUID): Event | undefined {
  return events.find((e) => e.id === id);
}

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((e) => e.slug === slug);
}

export function getEventsByCommunity(communityId: UUID): Event[] {
  return events.filter((e) => e.communityId === communityId);
}

export function getEventsByStatus(status: EventStatus): Event[] {
  return events.filter((e) => e.status === status);
}

export function getEventsByOrganizer(organizerId: UUID): Event[] {
  return events.filter((e) => e.organizerId === organizerId);
}

export function getUpcomingEvents(limit = 5): Event[] {
  const now = Date.now();
  return [...events]
    .filter(
      (e) =>
        (e.status === "published" || e.status === "live") &&
        new Date(e.startTime).getTime() >= now,
    )
    .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime())
    .slice(0, limit);
}

export function searchEvents(query: string): Event[] {
  const q = query.toLowerCase();
  return events.filter(
    (e) =>
      e.title.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q) ||
      e.tags.some((t) => t.toLowerCase().includes(q)),
  );
}
