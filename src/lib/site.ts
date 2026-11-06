// Central site configuration — single source of truth for brand + contact.

export const site = {
  name: "Spatial Prime Solutions",
  shortName: "Spatial Prime",
  legalName: "Spatial Prime Solutions Ltd",
  tagline: "Digital tools powered by GeoAI",
  location: "Kigali, Rwanda",
  website: "spatialprime.rw",
  email: "info@spatial-prime.com",
  product: {
    name: "ZoneAgent",
    url: "https://zoneagent.live",
    blurb: "Click on any plot and ask what can be built there",
  },
} as const;

export const nav = [
  { label: "Products", href: "/#zoneagent" },
  { label: "Solutions", href: "/#services" },
  { label: "Platform", href: "https://zoneagent.live", external: true },
  { label: "Company", href: "/#about" },
] as const;
