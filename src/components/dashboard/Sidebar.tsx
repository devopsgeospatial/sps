"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutGrid,
  ScanSearch,
  Activity,
  ShieldAlert,
  Map,
  FileBarChart,
  ArrowLeft,
  MapPin,
} from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { dashboardMeta } from "@/lib/dashboard-data";

const navItems = [
  { icon: LayoutGrid, label: "Overview", active: true },
  { icon: ScanSearch, label: "Building detection" },
  { icon: Activity, label: "Urban change" },
  { icon: ShieldAlert, label: "Disaster risk" },
  { icon: Map, label: "Land governance" },
  { icon: FileBarChart, label: "Reports" },
];

export function Sidebar() {
  const [active, setActive] = useState("Overview");
  return (
    <aside className="hidden w-60 shrink-0 flex-col border-r border-hairline bg-panel/60 lg:flex">
      <div className="flex h-16 items-center border-b border-hairline px-5">
        <Logo className="text-[1.15rem] text-white" />
      </div>

      <nav className="flex-1 space-y-1 p-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const on = active === item.label;
          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[0.82rem] font-medium transition ${
                on
                  ? "bg-accent/15 text-white"
                  : "text-mute hover:bg-white/[0.03] hover:text-frost"
              }`}
            >
              <Icon className={`size-[17px] ${on ? "text-accent" : ""}`} />
              {item.label}
              {on && <span className="ml-auto size-1.5 rounded-full bg-accent" />}
            </button>
          );
        })}
      </nav>

      <div className="space-y-3 border-t border-hairline p-4">
        <div className="rounded-xl border border-hairline bg-white/[0.02] p-3">
          <div className="flex items-center gap-2 text-[0.78rem] font-semibold text-frost">
            <MapPin className="size-3.5 text-accent" />
            {dashboardMeta.region}
          </div>
          <div className="mt-1 text-[0.68rem] text-mute">{dashboardMeta.coverage}</div>
        </div>
        <Link
          href="/"
          className="flex items-center gap-2 px-1 text-[0.76rem] font-medium text-mute transition hover:text-frost"
        >
          <ArrowLeft className="size-3.5" />
          Back to site
        </Link>
      </div>
    </aside>
  );
}
