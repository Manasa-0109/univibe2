import { dashboardData } from "../mock/dashboard";
import type { DashboardData } from "../mock/dashboard";

export function getDashboardData(): DashboardData {
  return dashboardData;
}

export function getDashboardStats() {
  return dashboardData.stats;
}

export function getDashboardFeaturedCommunities() {
  return dashboardData.featuredCommunities;
}

export function getDashboardUpcomingEvents() {
  return dashboardData.upcomingEvents;
}

export function getDashboardTrendingCelebrities() {
  return dashboardData.trendingCelebrities;
}

export function getDashboardFeaturedProducts() {
  return dashboardData.featuredProducts;
}

export function getDashboardTopCreators() {
  return dashboardData.topCreators;
}

export function getDashboardPopularMemberships() {
  return dashboardData.popularMemberships;
}
