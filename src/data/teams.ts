import type { Team, UUID } from "../types";
import { teams } from "../mock/teams";

export function getAllTeams(): Team[] {
  return [...teams];
}

export function getTeamById(id: UUID): Team | undefined {
  return teams.find((t) => t.id === id);
}

export function getTeamBySlug(slug: string): Team | undefined {
  return teams.find((t) => t.slug === slug);
}

export function getTeamsByCommunity(communityId: UUID): Team[] {
  return teams.filter((t) => t.communityId === communityId);
}

export function getTeamsByCategory(category: Team["category"]): Team[] {
  return teams.filter((t) => t.category === category);
}

export function searchTeams(query: string): Team[] {
  const q = query.toLowerCase();
  return teams.filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.tags.some((tag) => tag.toLowerCase().includes(q)),
  );
}
