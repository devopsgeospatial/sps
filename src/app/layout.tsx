import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://spatialprime.rw";

// Organization structured data — name, location, email and website only.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.legalName,
  url: SITE_URL,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kigali",
    addressCountry: "RW",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Spatial Prime Solutions | Digital GeoAI tools for public services",
    template: "%s | Spatial Prime Solutions",
  },
  description:
    "Kigali based firm building GeoAI applications, digital public services, field apps, dashboards and infrastructure tools for governments, businesses and citizens.",
  keywords: [
    "GeoAI",
    "digital public services",
    "geospatial applications",
    "GeoAI assistants",
    "field and inspection apps",
    "dashboards and decision platforms",
    "infrastructure asset management",
    "transport and mobility tools",
    "disaster risk applications",
    "enterprise GIS",
    "ZoneAgent",
    "Kigali",
    "Rwanda",
  ],
  authors: [{ name: "Spatial Prime Solutions Ltd" }],
  openGraph: {
    title: "Spatial Prime Solutions | Digital GeoAI tools for public services",
    description:
      "We design and build GeoAI applications, platforms and decision tools that turn regulations, maps and data into instant answers and smoother public services.",
    url: SITE_URL,
    siteName: "Spatial Prime Solutions",
    locale: "en_RW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spatial Prime Solutions | Digital GeoAI tools for public services",
    description:
      "Digital tools that make spatial information usable for governments, businesses and citizens.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
