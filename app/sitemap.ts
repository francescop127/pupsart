import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/portrait", "/impact", "/community", "/human-shop", "/about"].map((path) => ({ url: `https://pupsart-studio.sites.chatgpt.com${path}`, changeFrequency: "monthly" as const, priority: path ? 0.8 : 1 }));
}
