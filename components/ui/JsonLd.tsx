import { site } from "@/lib/site";

/** Renders a JSON-LD <script> block. Never hand-write per page — use builders. */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline here (no user input).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": ["Organization", "AccountingService"],
        name: site.name,
        url: site.url,
        description: site.positioning,
        slogan: site.tagline,
        telephone: site.phone,
        email: site.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: site.hq.city,
          addressRegion: site.hq.region,
          addressCountry: "IN",
        },
        sameAs: site.socials.map((s) => s.href),
      }}
    />
  );
}

export function LocalBusinessJsonLd({
  offices,
}: {
  offices: { city: string; address: string; phone?: string; lat?: number; lng?: number }[];
}) {
  return (
    <JsonLd
      data={offices.map((o) => ({
        "@context": "https://schema.org",
        "@type": "AccountingService",
        name: `${site.name} — ${o.city}`,
        url: site.url,
        telephone: o.phone ?? site.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: o.address,
          addressLocality: o.city,
          addressCountry: "IN",
        },
        ...(o.lat && o.lng
          ? { geo: { "@type": "GeoCoordinates", latitude: o.lat, longitude: o.lng } }
          : {}),
      }))}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          item: `${site.url}${it.href}`,
        })),
      }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  href,
}: {
  name: string;
  description: string;
  href: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: name,
        name,
        description,
        url: `${site.url}${href}`,
        provider: { "@type": "Organization", name: site.name, url: site.url },
        areaServed: "IN",
      }}
    />
  );
}

export function FaqJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  if (!faqs.length) return null;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  author,
  date,
  href,
}: {
  title: string;
  description: string;
  author: string;
  date: string;
  href: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        author: { "@type": "Person", name: author },
        datePublished: date,
        publisher: { "@type": "Organization", name: site.name },
        mainEntityOfPage: `${site.url}${href}`,
      }}
    />
  );
}

export function PersonJsonLd({
  name,
  role,
  href,
}: {
  name: string;
  role: string;
  href: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Person",
        name,
        jobTitle: role,
        worksFor: { "@type": "Organization", name: site.name },
        url: `${site.url}${href}`,
      }}
    />
  );
}

export function JobPostingJsonLd({
  title,
  description,
  location,
  date,
}: {
  title: string;
  description: string;
  location: string;
  date: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title,
        description,
        datePosted: date,
        hiringOrganization: { "@type": "Organization", name: site.name },
        jobLocation: {
          "@type": "Place",
          address: { "@type": "PostalAddress", addressLocality: location, addressCountry: "IN" },
        },
      }}
    />
  );
}
