import { Section, SectionLabel } from "@/components/ui/Section";

const values = [
  { label: "Approach", text: "Engineering first." },
  { label: "Standard", text: "Built for adoption." },
  { label: "Measure", text: "If people do not use it, it does not count." },
  { label: "Base", text: "Kigali, Rwanda." },
];

export function Story() {
  return (
    <Section id="about" className="border-t border-light bg-white">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionLabel>Founders</SectionLabel>
          <h2 className="reveal display text-[clamp(1.9rem,3.4vw,2.7rem)] text-ink">
            Founded in Kigali by
            <br />
            <span className="text-gradient">three geospatial</span>
            <br />
            practitioners.
          </h2>
        </div>

        <div className="reveal space-y-5 text-[0.95rem] font-light leading-[1.9] text-gray">
          <p>
            Founded in Kigali by three geospatial practitioners combining
            expertise in{" "}
            <strong className="font-semibold text-ink">
              GeoAI and digital government systems, infrastructure management, and
              transportation
            </strong>
            , with years of applied experience delivering geospatial solutions for
            public institutions across East Africa.
          </p>
          <p>
            <span className="font-medium text-accent">How we work:</span>{" "}
            engineering first, built for adoption. If people do not use it, it does
            not count.
          </p>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-light bg-light sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.label} className="bg-white p-5">
                <div className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-accent">
                  {v.label}
                </div>
                <div className="mt-1.5 text-[0.9rem] leading-[1.6] text-dark">
                  {v.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
