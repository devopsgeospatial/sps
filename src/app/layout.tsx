import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Spatial Prime Solutions | GeoAI for Africa",
    template: "%s | Spatial Prime Solutions",
  },
  description:
    "Spatial Prime Solutions delivers high-quality geospatial intelligence — real-time insight on infrastructure, urbanization, disaster risk, and public service across Africa. Based in Kigali, Rwanda.",
  keywords: [
    "geospatial intelligence",
    "GeoAI",
    "spatial analytics",
    "Rwanda",
    "Africa",
    "infrastructure intelligence",
    "urbanization",
    "disaster risk management",
    "public service",
    "land governance",
    "ZoneAgent",
    "Kigali",
  ],
  authors: [{ name: "Spatial Prime Solutions Ltd" }],
  openGraph: {
    title: "Spatial Prime Solutions | GeoAI for Africa",
    description:
      "High-quality geospatial intelligence — real-time insight on infrastructure, urbanization, disaster risk, and public service, grounded in Rwanda and scaling across the continent.",
    url: SITE_URL,
    siteName: "Spatial Prime Solutions",
    locale: "en_RW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spatial Prime Solutions | GeoAI for Africa",
    description:
      "GeoAI infrastructure for infrastructure, urbanization, and disaster challenges across Africa.",
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
      <body>{children}</body>
    </html>
  );
}
