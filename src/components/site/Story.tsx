import { Section, SectionLabel } from "@/components/ui/Section";

const values = [
  { label: "Mission", text: "Practical GeoAI that enhances operational decisions across Africa." },
  { label: "Vision", text: "The trusted regional GeoAI partner for lasting impact." },
  { label: "Approach", text: "Engineering-first. Ground truth over theory. Adoption over sophistication." },
  { label: "Reach", text: "Rwanda today. East Africa tomorrow. Africa always." },
];

export function Story() {
  return (
    <Section id="about" className="border-t border-light bg-white">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionLabel>Our Story</SectionLabel>
          <h2 className="reveal display text-[clamp(1.9rem,3.4vw,2.7rem)] text-ink">
            Built in Kigali.
            <br />
            <span className="text-gradient">Deployed</span> across Rwanda.
            <br />
            Scaling across Africa.
          </h2>
        </div>

        <div className="reveal space-y-5 text-[0.95rem] font-light leading-[1.9] text-gray">
          <p>
            Spatial Prime Solutions was founded by a geospatial practitioner who
            spent years building and operating GeoAI systems for Rwanda&apos;s
            most critical public-sector initiatives — infrastructure, urban
            intelligence, land governance, and disaster resilience.
          </p>
          <p>
            Working at the intersection of government institutions, satellite
            data, and machine learning, the same pattern emerged:{" "}
            <strong className="font-semibold text-ink">
              organisations investing in technology but struggling to extract
              operational value
            </strong>{" "}
            because implementations weren&apos;t designed for African ground truth.
          </p>
          <p>
            Spatial Prime was founded to change that equation — not by importing
            international frameworks, but by building from Rwanda outward.{" "}
            <span className="font-medium text-accent">ZoneAgent</span>, Rwanda&apos;s
            first natural-language zoning intelligence platform, was developed
            independently as proof that GeoAI built for local context delivers
            what generic solutions cannot.
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
