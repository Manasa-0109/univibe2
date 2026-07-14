import type { Creator, CreatorCategory, UUID } from "../types";
import { creators } from "../mock/creators";

export function getAllCreators(): Creator[] {
  return [...creators];
}

export function getCreatorById(id: UUID): Creator | undefined {
  return creators.find((c) => c.id === id);
}

export function getCreatorBySlug(slug: string): Creator | undefined {
  return creators.find((c) => c.slug === slug);
}

export function getCreatorsByCategory(category: CreatorCategory): Creator[] {
  return creators.filter((c) => c.category === category);
}

export function getCreatorsByCommunity(communityId: UUID): Creator[] {
  return creators.filter((c) => c.communityIds.includes(communityId));
}

export function getCreatorsByTeam(teamId: UUID): Creator[] {
  return creators.filter((c) => c.teamIds.includes(teamId));
}

export function getTopCreators(limit = 5): Creator[] {
  return [...creators]
    .sort((a, b) => b.followerCount - a.followerCount)
    .slice(0, limit);
}

export function searchCreators(query: string): Creator[] {
  const q = query.toLowerCase();
  return creators.filter(
    (c) =>
      c.displayName.toLowerCase().includes(q) ||
      c.bio.toLowerCase().includes(q) ||
      c.tags.some((t) => t.toLowerCase().includes(q)),
  );
}
