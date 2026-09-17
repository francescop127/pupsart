import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return ["", "/portrait", "/impact", "/community", "/human-shop", "/about"].map((path) => ({ url: `${siteUrl}${path}`, changeFrequency: "monthly" as const, priority: path ? 0.8 : 1 }));
}
