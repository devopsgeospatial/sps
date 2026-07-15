import { Building2, Waves, Mountain, Activity } from "lucide-react";
import { alerts, type Alert, type AlertKind, type Severity } from "@/lib/dashboard-data";

const kindIcon: Record<AlertKind, typeof Building2> = {
  construction: Building2,
  flood: Waves,
  landslide: Mountain,
  change: Activity,
};

const sevStyle: Record<Severity, { dot: string; chip: string; label: string }> = {
  critical: { dot: "#ef4444", chip: "bg-danger/12 text-danger", label: "Critical" },
  warning: { dot: "#f5a623", chip: "bg-warn/12 text-warn", label: "Warning" },
  info: { dot: "#00d4ff", chip: "bg-info/12 text-info", label: "Info" },
};

export function AlertsFeed() {
  return (
    <div className="glass flex h-full flex-col rounded-2xl">
      <div className="flex items-center justify-between border-b border-hairline px-5 py-3.5">
        <div className="flex items-center gap-2 text-[0.82rem] font-semibold text-frost">
          <span className="pulse-dot size-1.5 rounded-full bg-danger" />
          Live alerts
        </div>
        <span className="rounded-full bg-white/[0.04] px-2 py-0.5 font-mono text-[0.62rem] text-mute">
          {alerts.length} active
        </span>
      </div>

      <ul className="scroll-dark flex-1 divide-y divide-hairline overflow-y-auto">
        {alerts.map((a: Alert) => {
          const Icon = kindIcon[a.kind];
          const sev = sevStyle[a.severity];
          return (
            <li
              key={a.id}
              className="flex gap-3 px-5 py-3.5 transition-colors hover:bg-white/[0.02]"
            >
              <span
                className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg"
                style={{ background: `${sev.dot}1f`, color: sev.dot }}
              >
                <Icon className="size-4" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className={`rounded-full px-1.5 py-0.5 text-[0.6rem] font-semibold ${sev.chip}`}>
                    {sev.label}
                  </span>
                  <span className="font-mono text-[0.62rem] text-mute">{a.time}</span>
                </div>
                <div className="mt-1 truncate text-[0.82rem] font-medium text-frost">{a.title}</div>
                <div className="text-[0.72rem] text-mute">{a.where}</div>
              </div>
            </li>
          );
        })}
      </ul>

      <button className="border-t border-hairline px-5 py-3 text-[0.75rem] font-medium text-accent transition hover:text-white">
        View all alerts →
      </button>
    </div>
  );
}
