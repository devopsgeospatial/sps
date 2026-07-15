"use client";

import { useState } from "react";
import { Building2, Radar, Layers, ShieldAlert } from "lucide-react";
import {
  districts,
  buildingPoints,
  alerts,
  type District,
} from "@/lib/dashboard-data";

const riskColor: Record<string, string> = {
  low: "#22c55e",
  moderate: "#00d4ff",
  elevated: "#f5a623",
  high: "#ef4444",
};

const statusColor: Record<string, string> = {
  verified: "#635bff",
  new: "#00d4ff",
  flagged: "#f5a623",
};

const alertColor: Record<string, string> = {
  info: "#00d4ff",
  warning: "#f5a623",
  critical: "#ef4444",
};

type LayerKey = "buildings" | "alerts" | "zoning" | "risk";

const layerDefs: { key: LayerKey; label: string; icon: typeof Radar }[] = [
  { key: "buildings", label: "Buildings", icon: Building2 },
  { key: "alerts", label: "Change alerts", icon: Radar },
  { key: "zoning", label: "Zoning", icon: Layers },
  { key: "risk", label: "Risk overlay", icon: ShieldAlert },
];

export function SpatialMap() {
  const [layers, setLayers] = useState<Record<LayerKey, boolean>>({
    buildings: true,
    alerts: true,
    zoning: false,
    risk: false,
  });
  const [hover, setHover] = useState<District | null>(null);

  const toggle = (k: LayerKey) =>
    setLayers((s) => ({ ...s, [k]: !s[k] }));

  return (
    <div className="glass relative overflow-hidden rounded-2xl">
      {/* header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-hairline px-5 py-3.5">
        <div>
          <div className="flex items-center gap-2 text-[0.82rem] font-semibold text-frost">
            <span className="pulse-dot size-1.5 rounded-full bg-info" />
            Kigali spatial monitor
          </div>
          <div className="mt-0.5 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-mute">
            SPS-Detect v4 · Sentinel-2 + PlanetScope
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {layerDefs.map(({ key, label, icon: Icon }) => {
            const on = layers[key];
            return (
              <button
                key={key}
                onClick={() => toggle(key)}
                aria-pressed={on}
                className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.7rem] font-medium transition ${
                  on
                    ? "border-accent/40 bg-accent/15 text-frost"
                    : "border-hairline bg-white/[0.02] text-mute hover:text-frost"
                }`}
              >
                <Icon className="size-3" />
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* map canvas */}
      <div className="relative">
        <svg
          viewBox="0 0 800 520"
          className="block h-[340px] w-full sm:h-[420px]"
          role="img"
          aria-label="Interactive map of Kigali districts with detected buildings and alerts"
        >
          <defs>
            <radialGradient id="mapGlow" cx="50%" cy="42%" r="60%">
              <stop offset="0%" stopColor="#0d1830" />
              <stop offset="100%" stopColor="#05070f" />
            </radialGradient>
            <linearGradient id="districtFill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#12203c" />
              <stop offset="100%" stopColor="#0b1526" />
            </linearGradient>
            <pattern
              id="zoningHatch"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line x1="0" y1="0" x2="0" y2="10" stroke="#635bff" strokeWidth="1.4" opacity="0.4" />
            </pattern>
            <radialGradient id="sweep" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.25" />
              <stop offset="70%" stopColor="#00d4ff" stopOpacity="0" />
            </radialGradient>
            <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.4" />
            </filter>
          </defs>

          <rect width="800" height="520" fill="url(#mapGlow)" />

          {/* grid */}
          <g stroke="#16233d" strokeWidth="1" opacity="0.55">
            {Array.from({ length: 16 }).map((_, i) => (
              <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="520" />
            ))}
            {Array.from({ length: 11 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 50} x2="800" y2={i * 50} />
            ))}
          </g>

          {/* radar sweep */}
          <g style={{ transformOrigin: "400px 260px", animation: "sweep 8s linear infinite" }}>
            <path d="M400 260 L400 40 A220 220 0 0 1 590 150 Z" fill="url(#sweep)" />
          </g>

          {/* districts */}
          {districts.map((d) => {
            const isHover = hover?.id === d.id;
            return (
              <g
                key={d.id}
                onMouseEnter={() => setHover(d)}
                onMouseLeave={() => setHover(null)}
                className="cursor-pointer"
              >
                <path
                  d={d.path}
                  fill="url(#districtFill)"
                  stroke={isHover ? "#635bff" : "#22335a"}
                  strokeWidth={isHover ? 2.4 : 1.4}
                  className="transition-[stroke,stroke-width] duration-200"
                />
                {layers.zoning && <path d={d.path} fill="url(#zoningHatch)" />}
                {layers.risk && (
                  <path d={d.path} fill={riskColor[d.risk]} opacity={0.16} />
                )}
                <text
                  x={d.labelAt[0]}
                  y={d.labelAt[1]}
                  textAnchor="middle"
                  className="pointer-events-none select-none font-mono"
                  fontSize="12"
                  fill={isHover ? "#dbe4f5" : "#5f719a"}
                  style={{ letterSpacing: "0.08em" }}
                >
                  {d.name.toUpperCase()}
                </text>
              </g>
            );
          })}

          {/* building points */}
          {layers.buildings &&
            buildingPoints.map((p, i) => (
              <circle
                key={i}
                cx={p.x}
                cy={p.y}
                r={p.status === "flagged" ? 2.6 : 1.8}
                fill={statusColor[p.status]}
                opacity={p.status === "verified" ? 0.72 : 0.95}
              />
            ))}

          {/* alert markers */}
          {layers.alerts &&
            alerts.map((a) => (
              <g key={a.id}>
                <circle
                  cx={a.at[0]}
                  cy={a.at[1]}
                  r="6"
                  fill="none"
                  stroke={alertColor[a.severity]}
                  strokeWidth="1.5"
                  className="ping-ring"
                  style={{ transformOrigin: `${a.at[0]}px ${a.at[1]}px` }}
                />
                <circle cx={a.at[0]} cy={a.at[1]} r="9" fill={alertColor[a.severity]} opacity="0.18" filter="url(#soft)" />
                <circle cx={a.at[0]} cy={a.at[1]} r="3.4" fill={alertColor[a.severity]} />
              </g>
            ))}
        </svg>

        {/* hover info card */}
        {hover && (
          <div className="pointer-events-none absolute left-4 top-4 w-52 rounded-xl border border-hairline bg-panel-2/95 p-3.5 shadow-xl backdrop-blur">
            <div className="text-[0.82rem] font-semibold text-frost">{hover.name} District</div>
            <div className="mt-2.5 space-y-1.5 text-[0.72rem]">
              <Row label="Buildings" value={hover.buildings.toLocaleString()} />
              <Row label="New / month" value={`+${hover.newThisMonth.toLocaleString()}`} />
              <Row label="Flagged" value={hover.flagged.toLocaleString()} accent="#f5a623" />
              <Row label="Compliance" value={`${hover.compliance}%`} />
              <div className="flex items-center justify-between pt-0.5">
                <span className="text-mute">Risk</span>
                <span
                  className="rounded-full px-2 py-0.5 text-[0.62rem] font-semibold capitalize"
                  style={{ color: riskColor[hover.risk], background: `${riskColor[hover.risk]}22` }}
                >
                  {hover.risk}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* legend */}
        <div className="absolute bottom-3 left-4 flex flex-wrap gap-x-4 gap-y-1.5 rounded-lg border border-hairline bg-panel/80 px-3 py-2 text-[0.66rem] text-mute backdrop-blur">
          <LegendDot color="#635bff" label="Verified" />
          <LegendDot color="#00d4ff" label="New" />
          <LegendDot color="#f5a623" label="Flagged" />
          <LegendDot color="#ef4444" label="Critical alert" />
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent?: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-mute">{label}</span>
      <span className="font-medium" style={{ color: accent ?? "#dbe4f5" }}>
        {value}
      </span>
    </div>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="size-2 rounded-full" style={{ background: color }} />
      {label}
    </span>
  );
}
