import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { Kpi } from "@/lib/dashboard-data";

function Sparkline({ data, positive }: { data: number[]; positive: boolean }) {
  const w = 96;
  const h = 30;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / span) * (h - 4) - 2;
    return [x, y] as const;
  });
  const line = pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ");
  const area = `${line} L${w} ${h} L0 ${h} Z`;
  const stroke = positive ? "#22c55e" : "#f5a623";
  const id = `spark-${data.join("")}`;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="overflow-visible">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.28" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${id})`} />
      <path d={line} fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r="2" fill={stroke} />
    </svg>
  );
}

export function KpiCard({ kpi }: { kpi: Kpi }) {
  // "good" = trend up unless inverted (more flagged construction is bad)
  const good = kpi.invert ? kpi.trend === "down" : kpi.trend === "up";
  const Arrow = kpi.trend === "up" ? ArrowUpRight : ArrowDownRight;
  return (
    <div className="glass group rounded-2xl p-5 transition-colors hover:border-accent/30">
      <div className="flex items-start justify-between">
        <span className="text-[0.75rem] font-medium text-mute">{kpi.label}</span>
        <span
          className={`inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[0.68rem] font-semibold ${
            good ? "bg-ok/12 text-ok" : "bg-warn/12 text-warn"
          }`}
        >
          <Arrow className="size-3" />
          {kpi.delta}
        </span>
      </div>
      <div className="mt-2 flex items-end justify-between gap-2">
        <div className="text-[2rem] font-bold leading-none tracking-[-0.02em] text-white">
          {kpi.value}
          {kpi.unit && <span className="ml-0.5 text-[1rem] text-mute">{kpi.unit}</span>}
        </div>
        <Sparkline data={kpi.spark} positive={good} />
      </div>
    </div>
  );
}
