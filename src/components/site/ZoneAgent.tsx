import { Check, ArrowUpRight, Send } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/brand/Logo";

const features = [
  "Natural-language interface for zoning and land-use regulations",
  "Instant permit-compliance analysis by location",
  "Integrated with Rwanda's national land governance systems",
  "Built and deployed independently through Spatial Prime",
];

export function ZoneAgent() {
  return (
    <Section id="zoneagent" className="border-t border-light bg-off">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <div className="reveal mb-5 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent-light px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.05em] text-accent">
            <span className="pulse-dot size-1.5 rounded-full bg-accent" />
            Flagship product · Live
          </div>
          <h2 className="reveal display text-[clamp(1.9rem,3.6vw,2.9rem)] text-ink">
            Meet <span className="text-gradient">ZoneAgent</span> — Rwanda&apos;s first AI
            zoning agent
          </h2>
          <p className="reveal mt-4 text-[0.95rem] font-light leading-[1.8] text-gray">
            Ask any question about land use in plain language. Instant, accurate
            answers grounded in actual zoning regulations. No maps. No jargon.
            Just clear answers.
          </p>

          <ul className="reveal my-6">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 border-b border-light py-2.5 text-[0.88rem] text-dark"
              >
                <Check className="mt-0.5 size-[15px] shrink-0 text-accent" strokeWidth={2.5} />
                {f}
              </li>
            ))}
          </ul>

          <Button href="https://zoneagent.live" external variant="fill" className="reveal">
            Visit zoneagent.live
            <ArrowUpRight className="size-3.5" />
          </Button>
        </div>

        {/* Chat mockup */}
        <div className="reveal overflow-hidden rounded-2xl border border-border bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_12px_32px_rgba(0,0,0,0.06),0_32px_64px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-3 border-b border-light bg-off px-5 py-3.5">
            <span className="inline-flex overflow-hidden rounded-lg">
              <LogoMark size={30} idSuffix="chat" />
            </span>
            <div>
              <div className="text-[0.82rem] font-semibold text-ink">ZoneAgent</div>
              <div className="flex items-center gap-1.5 text-[0.68rem] text-accent">
                <span className="size-1.5 rounded-full bg-accent" />
                Online — Kigali, Rwanda
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 p-5">
            <Bubble side="user">
              Can I build a 4-storey apartment in Kimironko sector?
            </Bubble>
            <Bubble side="bot">
              Based on the Kigali Master Plan, Kimironko falls under{" "}
              <strong className="font-semibold text-accent">
                R3 — Medium Density Residential
              </strong>
              .
              <div className="mt-3 space-y-1">
                <Line>4 storeys is <strong className="font-semibold text-accent">permitted</strong> in this zone</Line>
                <Line>Required setbacks: 3m front, 2m sides</Line>
                <Line>Maximum plot coverage: 60%</Line>
              </div>
              <div className="mt-3">
                You&apos;ll need a{" "}
                <strong className="font-semibold text-accent">Class B Construction Permit</strong>{" "}
                from RHA. Want the application checklist?
              </div>
            </Bubble>
            <Bubble side="user">Yes — what documents do I need?</Bubble>
          </div>

          <div className="flex items-center gap-2.5 border-t border-light bg-off px-5 py-3.5">
            <input
              readOnly
              placeholder="Ask about any location in Rwanda…"
              className="flex-1 rounded-lg border border-light bg-white px-3.5 py-2 text-[0.75rem] text-gray outline-none"
            />
            <button className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-2 text-[0.75rem] font-semibold text-white transition hover:bg-accent-dark">
              <Send className="size-3" />
              Send
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Bubble({
  side,
  children,
}: {
  side: "user" | "bot";
  children: React.ReactNode;
}) {
  if (side === "user") {
    return (
      <div className="max-w-[88%] self-end rounded-[12px_12px_3px_12px] bg-ink px-4 py-2.5 text-[0.8rem] font-medium leading-[1.65] text-white">
        {children}
      </div>
    );
  }
  return (
    <div className="max-w-[88%] self-start rounded-[12px_12px_12px_3px] border border-light bg-off px-4 py-2.5 text-[0.8rem] leading-[1.65] text-dark">
      {children}
    </div>
  );
}

function Line({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-1.5">
      <Check className="mt-0.5 size-3.5 shrink-0 text-accent" strokeWidth={2.5} />
      <span>{children}</span>
    </div>
  );
}
