import type {
  BaseEntity,
  Currency,
  UUID,
} from "./common";

export type MembershipTier = "bronze" | "silver" | "gold" | "platinum" | "diamond";

export type BillingInterval = "monthly" | "quarterly" | "annually" | "one-time";

export interface MembershipBenefit {
  id: string;
  title: string;
  description?: string;
}

export interface Membership extends BaseEntity {
  name: string;
  description: string;
  tier: MembershipTier;
  price: number;
  currency: Currency;
  billingInterval: BillingInterval;
  benefits: MembershipBenefit[];
  communityId?: UUID;
  subscriberCount: number;
  isActive: boolean;
}
