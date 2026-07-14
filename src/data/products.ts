import type { Product, ProductCategory, UUID } from "../types";
import { products } from "../mock/products";

export function getAllProducts(): Product[] {
  return [...products];
}

export function getProductById(id: UUID): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCommunity(communityId: UUID): Product[] {
  return products.filter((p) => p.communityId === communityId);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return [...products]
    .filter((p) => p.isFeatured)
    .sort((a, b) => (a.featuredOrder ?? 999) - (b.featuredOrder ?? 999));
}

export function getTopRatedProducts(limit = 5): Product[] {
  return [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)),
  );
}
