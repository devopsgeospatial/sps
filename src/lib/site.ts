// Central site configuration — single source of truth for brand + contact.

export const site = {
  name: "Spatial Prime Solutions",
  shortName: "Spatial Prime",
  legalName: "Spatial Prime Solutions Ltd",
  tagline: "GeoAI Infrastructure for Africa",
  location: "Kigali, Rwanda",
  phone: "+250 781 602 046",
  phoneHref: "tel:+250781602046",
  email: "info@spatial-prime.com",
  product: {
    name: "ZoneAgent",
    url: "https://zoneagent.live",
    blurb: "Rwanda's first AI zoning agent",
  },
} as const;

export const nav = [
  { label: "Products", href: "/#zoneagent" },
  { label: "Solutions", href: "/#services" },
  { label: "Platform", href: "https://zoneagent.live", external: true },
  { label: "Company", href: "/#about" },
] as const;
