import { districts, buildingPoints } from "@/lib/dashboard-data";

const statusColor: Record<string, string> = {
  verified: "#635bff",
  new: "#00d4ff",
  flagged: "#f5a623",
};

/** A floating dark dashboard preview — the product shot on the gradient. */
export function HeroMockup() {
  return (
    <div className="float-card w-full max-w-[520px] rounded-2xl border border-white/20 bg-[#0c1222] shadow-[0_30px_80px_-20px_rgba(10,37,64,0.55)]">
      {/* browser chrome */}
      <div className="flex items-center gap-2 border-b border-hairline px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-3 flex-1 rounded-md bg-white/[0.04] px-3 py-1 text-center font-mono text-[0.6rem] text-mute">
          zoneagent.live
        </div>
      </div>

      <div className="p-4">
        {/* mini KPI row */}
        <div className="grid grid-cols-3 gap-2.5">
          {[
            { l: "Buildings", v: "486k", c: "#635bff" },
            { l: "Alerts", v: "1,342", c: "#f5a623" },
            { l: "Risk idx", v: "34", c: "#00d4ff" },
          ].map((k) => (
            <div key={k.l} className="rounded-lg border border-hairline bg-white/[0.02] p-2.5">
              <div className="text-[0.55rem] uppercase tracking-wide text-mute">{k.l}</div>
              <div className="mt-0.5 text-[1.05rem] font-bold text-white">{k.v}</div>
              <div className="mt-1 h-0.5 w-full rounded-full" style={{ background: `${k.c}55` }}>
                <div className="h-full w-2/3 rounded-full" style={{ background: k.c }} />
              </div>
            </div>
          ))}
        </div>

        {/* mini map */}
        <div className="mt-2.5 overflow-hidden rounded-lg border border-hairline bg-[#070c18]">
          <svg viewBox="0 0 520 220" className="block h-[150px] w-full">
            <defs>
              <linearGradient id="mmFill" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#12203c" />
                <stop offset="100%" stopColor="#0b1526" />
              </linearGradient>
            </defs>
            <g stroke="#16233d" strokeWidth="1" opacity="0.5">
              {Array.from({ length: 11 }).map((_, i) => (
                <line key={`v${i}`} x1={i * 52} y1="0" x2={i * 52} y2="220" />
              ))}
              {Array.from({ length: 5 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 52} x2="520" y2="220" />
              ))}
            </g>
            {/* scaled district shapes */}
            <g transform="translate(20 -140) scale(0.62)">
              {districts.map((d) => (
                <path key={d.id} d={d.path} fill="url(#mmFill)" stroke="#22335a" strokeWidth="1.4" />
              ))}
              {buildingPoints.slice(0, 120).map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r="2" fill={statusColor[p.status]} opacity="0.8" />
              ))}
            </g>
            <circle cx="400" cy="70" r="5" fill="#ef4444" />
            <circle cx="400" cy="70" r="10" fill="none" stroke="#ef4444" strokeWidth="1.4" className="ping-ring" style={{ transformOrigin: "400px 70px" }} />
          </svg>
        </div>

        <div className="mt-2.5 flex items-center gap-1.5 text-[0.6rem] text-mute">
          <span className="pulse-dot size-1.5 rounded-full bg-info" />
          Live · ZoneAgent spatial intelligence
        </div>
      </div>
    </div>
  );
}
