# Spatial Prime Solutions — Website

Marketing site and interactive GeoAI product showcase for **Spatial Prime Solutions**
(Kigali, Rwanda) — high-quality geospatial intelligence for infrastructure,
urbanization, disaster risk, and public service across Africa.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** with a brand design system (Stripe-inspired visual language)
- **Recharts** for data visualization · **lucide-react** for icons
- Fully static — both routes prerender as static content

## Structure

```
src/
  app/
    page.tsx              Marketing homepage
    dashboard/            GeoAI spatial-intelligence dashboard (product showcase)
    layout.tsx            Root layout, fonts (Inter), metadata
    globals.css           Design tokens + Stripe-style gradient system
  components/
    site/                 Marketing sections (Hero, Services, ZoneAgent, …)
    dashboard/            Dashboard UI (SpatialMap, Charts, AlertsFeed, …)
    ui/, brand/           Shared primitives
  lib/
    site.ts               Central site config
    dashboard-data.ts     Typed mock data layer (swap for a real API)
public/
  hero-kigali.jpg         Aerial hero image (Pexels, free license)
```

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # production build
npm start          # serve the production build
```

## Deploy

Optimized for **Vercel**: connect this repo, deploy, then add the custom domain.
The flagship zoning agent lives at **[zoneagent.live](https://zoneagent.live)**.

---

© Spatial Prime Solutions Ltd · Kigali, Rwanda
