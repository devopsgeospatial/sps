"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { urbanGrowth, riskExposure } from "@/lib/dashboard-data";

const AXIS = "#5f719a";
const GRID = "#16233d";

function Panel({
  title,
  sub,
  children,
  right,
}: {
  title: string;
  sub?: string;
  children: React.ReactNode;
  right?: React.ReactNode;
}) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-[0.88rem] font-semibold text-frost">{title}</h3>
          {sub && <p className="mt-0.5 text-[0.72rem] text-mute">{sub}</p>}
        </div>
        {right}
      </div>
      {children}
    </div>
  );
}

interface TipItem {
  name: string;
  value: number | string;
  color: string;
}
function DarkTooltip({
  active,
  payload,
  label,
  unit = "",
}: {
  active?: boolean;
  payload?: TipItem[];
  label?: string;
  unit?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-hairline bg-panel-2/95 px-3 py-2 text-[0.72rem] shadow-xl backdrop-blur">
      {label && <div className="mb-1 font-medium text-frost">{label}</div>}
      {payload.map((p) => (
        <div key={p.name} className="flex items-center gap-2 text-mute">
          <span className="size-2 rounded-full" style={{ background: p.color }} />
          <span className="capitalize">{p.name}</span>
          <span className="ml-auto font-medium text-frost">
            {p.value}
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
}

export function UrbanGrowthChart() {
  return (
    <Panel
      title="Urban growth"
      sub="New buildings detected vs. flagged for review (000s / month)"
      right={
        <div className="flex gap-3 text-[0.68rem]">
          <span className="inline-flex items-center gap-1.5 text-mute">
            <span className="size-2 rounded-full bg-accent" /> Detected
          </span>
          <span className="inline-flex items-center gap-1.5 text-mute">
            <span className="size-2 rounded-full bg-warn" /> Flagged
          </span>
        </div>
      }
    >
      <ResponsiveContainer width="100%" height={180}>
        <AreaChart data={urbanGrowth} margin={{ top: 4, right: 6, left: -18, bottom: 0 }}>
          <defs>
            <linearGradient id="gDetected" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#635bff" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#635bff" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gFlagged" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f5a623" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#f5a623" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke={GRID} vertical={false} />
          <XAxis dataKey="month" stroke={AXIS} tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
          <YAxis stroke={AXIS} tick={{ fontSize: 11 }} tickLine={false} axisLine={false} width={40} />
          <Tooltip content={<DarkTooltip unit="k" />} cursor={{ stroke: "#635bff", strokeOpacity: 0.3 }} />
          <Area type="monotone" dataKey="detected" stroke="#635bff" strokeWidth={2} fill="url(#gDetected)" />
          <Area type="monotone" dataKey="flagged" stroke="#f5a623" strokeWidth={2} fill="url(#gFlagged)" />
        </AreaChart>
      </ResponsiveContainer>
    </Panel>
  );
}

export function RiskExposureChart() {
  const total = riskExposure.reduce((s, r) => s + r.value, 0);
  return (
    <Panel title="Disaster risk exposure" sub="Share of building stock by hazard class">
      <div className="flex items-center gap-4">
        <div className="relative h-[150px] w-[150px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={riskExposure}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={48}
                outerRadius={68}
                paddingAngle={2}
                stroke="none"
              >
                {riskExposure.map((r) => (
                  <Cell key={r.name} fill={r.color} />
                ))}
              </Pie>
              <Tooltip content={<DarkTooltip unit="%" />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold tracking-[-0.02em] text-white">{total}%</span>
            <span className="text-[0.6rem] uppercase tracking-wide text-mute">mapped</span>
          </div>
        </div>
        <ul className="flex-1 space-y-2">
          {riskExposure.map((r) => (
            <li key={r.name} className="flex items-center gap-2 text-[0.76rem]">
              <span className="size-2.5 rounded-sm" style={{ background: r.color }} />
              <span className="text-frost">{r.name}</span>
              <span className="ml-auto font-medium text-mute">{r.value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </Panel>
  );
}
