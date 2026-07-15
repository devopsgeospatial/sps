"use client";

import { useState } from "react";
import { Sparkles, CornerDownLeft } from "lucide-react";
import { LogoMark } from "@/components/brand/Logo";

const prompts: { q: string; a: React.ReactNode }[] = [
  {
    q: "Can I build a 4-storey apartment in Kimironko?",
    a: (
      <>
        Kimironko is <b className="text-info">R3 — Medium Density Residential</b>. 4 storeys
        are <b className="text-ok">permitted</b>. Setbacks 3m front / 2m sides, max plot
        coverage 60%. You&apos;ll need a <b className="text-frost">Class B permit</b> from RHA.
      </>
    ),
  },
  {
    q: "Which sectors have the most flagged construction?",
    a: (
      <>
        Top 3 this month: <b className="text-frost">Kimironko (612)</b>,{" "}
        <b className="text-frost">Nyamirambo (388)</b>, <b className="text-frost">Gatenga (342)</b>.
        Gasabo accounts for <b className="text-warn">46%</b> of all flags.
      </>
    ),
  },
  {
    q: "Where is flood risk highest?",
    a: (
      <>
        Elevated exposure along <b className="text-frost">Nyabugogo wetland</b> and lower{" "}
        <b className="text-frost">Gatenga</b>. 6% of building stock sits in{" "}
        <b className="text-danger">high hazard</b> zones — mostly informal settlements.
      </>
    ),
  },
];

export function ZoneAgentPanel() {
  const [active, setActive] = useState(0);
  return (
    <div className="glass flex flex-col rounded-2xl">
      <div className="flex items-center gap-2.5 border-b border-hairline px-5 py-3.5">
        <span className="inline-flex overflow-hidden rounded-lg">
          <LogoMark size={26} idSuffix="dash" />
        </span>
        <div className="flex-1">
          <div className="text-[0.82rem] font-semibold text-frost">ZoneAgent</div>
          <div className="flex items-center gap-1.5 text-[0.62rem] text-info">
            <span className="pulse-dot size-1.5 rounded-full bg-info" />
            Grounded in the Kigali Master Plan
          </div>
        </div>
        <span className="rounded-full border border-accent/30 bg-accent/12 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-accent">
          Flagship
        </span>
      </div>

      <div className="px-5 py-4">
        <div className="rounded-xl border border-hairline bg-white/[0.02] p-3.5 text-[0.8rem] leading-[1.7] text-frost">
          <div className="mb-1.5 flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-mute">
            <Sparkles className="size-3 text-accent" />
            Answer
          </div>
          {prompts[active].a}
        </div>

        <div className="mt-3 flex flex-col gap-2">
          {prompts.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`group flex items-center justify-between gap-2 rounded-lg border px-3 py-2 text-left text-[0.76rem] transition ${
                i === active
                  ? "border-accent/40 bg-accent/10 text-frost"
                  : "border-hairline text-mute hover:border-accent/30 hover:text-frost"
              }`}
            >
              <span className="truncate">{p.q}</span>
              <CornerDownLeft
                className={`size-3.5 shrink-0 transition ${
                  i === active ? "text-accent" : "text-mute group-hover:text-accent"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <a
        href="https://zoneagent.live"
        target="_blank"
        rel="noopener noreferrer"
        className="border-t border-hairline px-5 py-3 text-center text-[0.75rem] font-medium text-accent transition hover:text-white"
      >
        Open full ZoneAgent →
      </a>
    </div>
  );
}
