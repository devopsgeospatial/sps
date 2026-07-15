import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GeoAI Dashboard",
  description:
    "Live spatial intelligence for Kigali — AI building detection, urban change alerts, disaster risk exposure, and ZoneAgent zoning intelligence.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
