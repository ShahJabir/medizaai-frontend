import { GUIDES } from "@/data/guides";
import type { Guide } from "@/types/guide";

export async function getGuides(): Promise<Guide[]> {
  return GUIDES;
}

export async function getGuideBySlug(slug: string): Promise<Guide | null> {
  return GUIDES.find((guide) => guide.slug === slug) ?? null;
}

export function getAllGuideSlugs(): string[] {
  return GUIDES.map((guide) => guide.slug);
}