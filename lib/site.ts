/**
 * Sitewide firm constants. Contact details are PLACEHOLDERS — see CLIENT_TODO.md.
 * The firm swaps these by editing this file only.
 */
export const site = {
  name: "Anuj Desai & Associates",
  shortName: "ADA",
  legalName: "Anuj Desai & Associates",
  tagline: "India's rare triple-qualified CA · CS · CMA multidisciplinary firm",
  positioning:
    "Audit, tax, AIF/fund, FEMA, M&A and global-entity advisory — under one roof.",
  // PLACEHOLDER contact — client to provide
  phone: "+91 00000 00000",
  phoneHref: "tel:+910000000000",
  email: "connect@anujdesaiassociates.com",
  whatsapp: "910000000000",
  whatsappMessage: "Hi ADA, I'd like to speak to an advisor.",
  // Production base URL (placeholder). Used for canonical/OG/sitemap.
  url: "https://www.anujdesaiassociates.com",
  hq: {
    city: "Mumbai",
    address: "[CLIENT TO PROVIDE — HQ address, Mumbai]",
    region: "Maharashtra",
    country: "India",
    geo: { lat: 19.076, lng: 72.8777 },
  },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
    { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
    { label: "X", href: "https://x.com/", icon: "twitter" },
    { label: "YouTube", href: "https://www.youtube.com/", icon: "youtube" },
    { label: "Facebook", href: "https://www.facebook.com/", icon: "facebook" },
  ],
} as const;

export function whatsappUrl(message = site.whatsappMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mailtoUrl(subject = "Website enquiry") {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}
