import type {
  Community,
  Event,
  Celebrity,
  Product,
  Creator,
  Membership,
  UUID,
} from "../types";
import { communities } from "./communities";
import { events } from "./events";
import { celebrities } from "./celebrities";
import { products } from "./products";
import { creators } from "./creators";
import { memberships } from "./memberships";

export interface DashboardStats {
  totalCommunities: number;
  totalMembers: number;
  totalEvents: number;
  totalCreators: number;
  totalProducts: number;
  totalCelebrities: number;
  totalActiveMemberships: number;
}

export interface FeaturedCommunity {
  id: UUID;
  name: string;
  slug: string;
  category: string;
  memberCount: number;
  avatar?: string;
  banner?: string;
}

export interface UpcomingEvent {
  id: UUID;
  title: string;
  slug: string;
  startTime: string;
  format: string;
  city?: string;
  country?: string;
  banner?: string;
  communityId: UUID;
  attendeeCount: number;
}

export interface TrendingCelebrity {
  id: UUID;
  displayName: string;
  slug: string;
  profession: string;
  followerCount: number;
  avatar?: string;
  isVerified: boolean;
}

export interface FeaturedProduct {
  id: UUID;
  name: string;
  slug: string;
  price: number;
  currency: string;
  category: string;
  rating: number;
  thumbnail?: string;
  communityId: UUID;
  featuredOrder: number;
}

export interface TopCreator {
  id: UUID;
  displayName: string;
  slug: string;
  category: string;
  followerCount: number;
  avatar?: string;
  isVerified: boolean;
}

export interface PopularMembership {
  id: UUID;
  name: string;
  slug: string;
  tier: string;
  price: number;
  currency: string;
  billingInterval: string;
  subscriberCount: number;
  communityId?: UUID;
}

export interface DashboardData {
  stats: DashboardStats;
  featuredCommunities: FeaturedCommunity[];
  upcomingEvents: UpcomingEvent[];
  trendingCelebrities: TrendingCelebrity[];
  featuredProducts: FeaturedProduct[];
  topCreators: TopCreator[];
  popularMemberships: PopularMembership[];
}

const toFeaturedCommunity = (c: Community): FeaturedCommunity => ({
  id: c.id,
  name: c.name,
  slug: c.slug,
  category: c.category,
  memberCount: c.memberCount,
  avatar: c.avatar?.src,
  banner: c.banner?.src,
});

const toUpcomingEvent = (e: Event): UpcomingEvent => ({
  id: e.id,
  title: e.title,
  slug: e.slug,
  startTime: e.startTime,
  format: e.format,
  city: e.location.city,
  country: e.location.country,
  banner: e.banner?.src,
  communityId: e.communityId ?? "",
  attendeeCount: e.attendeeCount,
});

const toTrendingCelebrity = (c: Celebrity): TrendingCelebrity => ({
  id: c.id,
  displayName: c.displayName,
  slug: c.slug,
  profession: c.profession,
  followerCount: c.followerCount,
  avatar: c.avatar?.src,
  isVerified: c.isVerified,
});

const toFeaturedProduct = (p: Product): FeaturedProduct => ({
  id: p.id,
  name: p.name,
  slug: p.slug,
  price: p.price,
  currency: p.currency,
  category: p.category,
  rating: p.rating,
  thumbnail: p.images[0]?.src,
  communityId: p.communityId ?? "",
  featuredOrder: p.featuredOrder ?? 999,
});

const toTopCreator = (c: Creator): TopCreator => ({
  id: c.id,
  displayName: c.displayName,
  slug: c.slug,
  category: c.category,
  followerCount: c.followerCount,
  avatar: c.avatar?.src,
  isVerified: c.isVerified,
});

const toPopularMembership = (m: Membership): PopularMembership => ({
  id: m.id,
  name: m.name,
  slug: m.slug,
  tier: m.tier,
  price: m.price,
  currency: m.currency,
  billingInterval: m.billingInterval,
  subscriberCount: m.subscriberCount,
  communityId: m.communityId,
});

const totalMembers = communities.reduce((sum, c) => sum + c.memberCount, 0);
const totalActiveMemberships = memberships
  .filter((m) => m.isActive)
  .reduce((sum, m) => sum + m.subscriberCount, 0);

const featuredCommunities = [...communities]
  .sort((a, b) => b.memberCount - a.memberCount)
  .slice(0, 6)
  .map(toFeaturedCommunity);

const upcomingEvents = [...events]
  .filter((e) => e.status === "published" || e.status === "live")
  .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime())
  .slice(0, 5)
  .map(toUpcomingEvent);

const trendingCelebrities = [...celebrities]
  .sort((a, b) => b.followerCount - a.followerCount)
  .slice(0, 5)
  .map(toTrendingCelebrity);

const featuredProducts = [...products]
  .filter((p) => p.isFeatured)
  .sort((a, b) => (a.featuredOrder ?? 999) - (b.featuredOrder ?? 999))
  .map(toFeaturedProduct);

const topCreators = [...creators]
  .sort((a, b) => b.followerCount - a.followerCount)
  .slice(0, 5)
  .map(toTopCreator);

const popularMemberships = [...memberships]
  .filter((m) => m.isActive)
  .sort((a, b) => b.subscriberCount - a.subscriberCount)
  .slice(0, 4)
  .map(toPopularMembership);

export const dashboardData: DashboardData = {
  stats: {
    totalCommunities: communities.length,
    totalMembers,
    totalEvents: events.length,
    totalCreators: creators.length,
    totalProducts: products.length,
    totalCelebrities: celebrities.length,
    totalActiveMemberships,
  },
  featuredCommunities,
  upcomingEvents,
  trendingCelebrities,
  featuredProducts,
  topCreators,
  popularMemberships,
};
