import type { Metadata } from "next";
import { site } from "@/lib/site";

/** Build per-page metadata: title, description, canonical, OG/Twitter. */
export function buildMetadata({
  title,
  description,
  path,
  type = "website",
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  noindex?: boolean;
}): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url,
      type,
      siteName: site.name,
    },
    twitter: { card: "summary_large_image", title, description },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
  };
}

/** Mumbai/India geo-targeting meta for local-SEO pages. */
export const geoMeta = {
  "geo.placename": "Mumbai",
  "geo.region": "IN-MH",
  "geo.position": `${site.hq.geo.lat};${site.hq.geo.lng}`,
  ICBM: `${site.hq.geo.lat}, ${site.hq.geo.lng}`,
};
