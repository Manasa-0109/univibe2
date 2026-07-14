import type { PaginatedMeta } from "./common";
import type { Community } from "./community";
import type { Team } from "./team";
import type { Creator } from "./creator";
import type { Celebrity } from "./celebrity";
import type { Event } from "./event";
import type { Product } from "./product";
import type { User } from "./user";

export type SearchEntityType =
  | "community"
  | "team"
  | "creator"
  | "celebrity"
  | "event"
  | "product"
  | "user";

export type SearchResultItem =
  | { type: "community"; entity: Community }
  | { type: "team"; entity: Team }
  | { type: "creator"; entity: Creator }
  | { type: "celebrity"; entity: Celebrity }
  | { type: "event"; entity: Event }
  | { type: "product"; entity: Product }
  | { type: "user"; entity: User };

export interface SearchResult extends PaginatedMeta {
  query: string;
  results: SearchResultItem[];
}
