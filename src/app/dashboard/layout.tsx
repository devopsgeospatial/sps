import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard design mock",
  description:
    "A non-functional interface mock used to illustrate dashboard and decision-platform design. The figures shown are placeholders, not measurements.",
  // Illustrative page with placeholder figures — must not appear in search
  // results, where it could be mistaken for a live service.
  robots: { index: false, follow: false },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex items-center justify-center gap-2 bg-amber-400 px-4 py-2 text-center text-[0.8rem] font-semibold text-[#0A2540]">
        <span aria-hidden>●</span>
        Design mock — the figures on this page are placeholders for layout
        purposes, not real measurements or a live service.
      </div>
      {children}
    </>
  );
}
