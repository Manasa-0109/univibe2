import type { Membership, MembershipTier, UUID } from "../types";
import { memberships } from "../mock/memberships";

export function getAllMemberships(): Membership[] {
  return [...memberships];
}

export function getMembershipById(id: UUID): Membership | undefined {
  return memberships.find((m) => m.id === id);
}

export function getMembershipBySlug(slug: string): Membership | undefined {
  return memberships.find((m) => m.slug === slug);
}

export function getMembershipsByCommunity(communityId: UUID): Membership[] {
  return memberships.filter((m) => m.communityId === communityId);
}

export function getMembershipsByTier(tier: MembershipTier): Membership[] {
  return memberships.filter((m) => m.tier === tier);
}

export function getActiveMemberships(): Membership[] {
  return memberships.filter((m) => m.isActive);
}

export function getPopularMemberships(limit = 4): Membership[] {
  return [...memberships]
    .filter((m) => m.isActive)
    .sort((a, b) => b.subscriberCount - a.subscriberCount)
    .slice(0, limit);
}
