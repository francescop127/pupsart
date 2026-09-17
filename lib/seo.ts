import type { Metadata } from "next";

// Official public origin; deployments can explicitly override it when needed.
const configuredUrl = process.env.SITE_URL || "https://pupsart.com";
export const siteUrl = configuredUrl ? new URL(configuredUrl).origin : undefined;
if (siteUrl && !/^https?:\/\//.test(siteUrl)) {
  throw new Error("SITE_URL must be an absolute HTTP or HTTPS URL.");
}

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = siteUrl ? `${siteUrl}${path}` : undefined;
  return {
    title,
    description,
    ...(url ? { alternates: { canonical: url } } : {}),
    openGraph: {
      title: `${title} — Pupsart`, description, url,
      siteName: "Pupsart", locale: "it_IT", type: "website",
      ...(siteUrl ? { images: [{ url: `${siteUrl}/images/hero-whippet-coral.webp`, alt: "Pupsart: ritratti pop personalizzati di cani" }] } : {}),
    },
    twitter: { card: "summary_large_image", title: `${title} — Pupsart`, description,
      ...(siteUrl ? { images: [`${siteUrl}/images/hero-whippet-coral.webp`] } : {}),
    },
  };
}
