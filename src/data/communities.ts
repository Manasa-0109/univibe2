import type { Community, CommunityCategory, UUID } from "../types";
import { communities } from "../mock/communities";

export function getAllCommunities(): Community[] {
  return [...communities];
}

export function getCommunityById(id: UUID): Community | undefined {
  return communities.find((c) => c.id === id);
}

export function getCommunityBySlug(slug: string): Community | undefined {
  return communities.find((c) => c.slug === slug);
}

export function getCommunitiesByCategory(category: CommunityCategory): Community[] {
  return communities.filter((c) => c.category === category);
}

export function getFeaturedCommunities(limit = 6): Community[] {
  return [...communities]
    .sort((a, b) => b.memberCount - a.memberCount)
    .slice(0, limit);
}

export function searchCommunities(query: string): Community[] {
  const q = query.toLowerCase();
  return communities.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.tags.some((t) => t.toLowerCase().includes(q)),
  );
}
