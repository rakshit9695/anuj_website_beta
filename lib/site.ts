/**
 * Sitewide firm constants. Contact details are PLACEHOLDERS — see CLIENT_TODO.md.
 * The firm swaps these by editing this file only.
 */
export const site = {
  name: "Anuj Desai & Associates",
  shortName: "ADA",
  legalName: "Anuj Desai & Associates",
  tagline: "India's leading Chartered Accountancy & consulting firm",
  positioning:
    "Audit, tax, regulatory, transaction and cross-border advisory — under one roof.",
  // Firm contact details (supplied by the client).
  phone: "+91 96194 56656",
  phoneHref: "tel:+919619456656",
  email: "office@anujdesaiassociates.com",
  whatsapp: "919619456656",
  whatsappMessage: "Hi ADA, I'd like to speak to an advisor.",
  // Production base URL. Used for canonical/OG/sitemap.
  url: "https://www.anujdesaiassociates.com",
  hq: {
    city: "Mumbai",
    address:
      "1703, Rajshree 11 East, Behind Ganesh Temple, Pant Nagar, Ghatkopar (East), Mumbai 400 075",
    region: "Maharashtra",
    country: "India",
    geo: { lat: 19.0863, lng: 72.9081 },
  },
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ca-anuj-desai-122547230",
      icon: "linkedin",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/anuj_desai_associates/",
      icon: "instagram",
    },
  ],
} as const;

export function whatsappUrl(message = site.whatsappMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mailtoUrl(subject = "Website enquiry") {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}
