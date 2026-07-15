import {
  Building2,
  Building,
  ShieldAlert,
  Landmark,
  Layers3,
  Bot,
} from "lucide-react";
import { Section, SectionLabel, SectionTitle } from "@/components/ui/Section";

const services = [
  {
    icon: Building2,
    tint: "from-[#635bff] to-[#8b83ff]",
    title: "Infrastructure Intelligence",
    desc: "Real-time spatial insight on physical assets — energy, telecom, transport and utilities — to plan, monitor and protect the networks a country runs on.",
  },
  {
    icon: Building,
    tint: "from-[#0073e6] to-[#00d4ff]",
    title: "Urbanization & Land Analytics",
    desc: "See how cities actually grow. Track expansion, land use and development pressure to guide planning, land governance and real-estate decisions.",
  },
  {
    icon: ShieldAlert,
    tint: "from-[#00b8d4] to-[#00d4ff]",
    title: "Disaster Risk Management",
    desc: "Model flood, landslide and climate hazards against people and assets — turning terrain, rainfall and settlement data into early warning and resilience.",
  },
  {
    icon: Landmark,
    tint: "from-[#7a73ff] to-[#635bff]",
    title: "Public Service & Governance",
    desc: "Location intelligence for the public sector — service coverage, compliance and evidence-based policy that decision-makers can act on with confidence.",
  },
  {
    icon: Layers3,
    tint: "from-[#635bff] to-[#0073e6]",
    title: "Geospatial Data Platforms",
    desc: "We gather and combine satellite, field and enterprise data into decision-ready platforms, dashboards and APIs your teams can trust and maintain.",
  },
  {
    icon: Bot,
    tint: "from-[#0073e6] to-[#635bff]",
    title: "GeoAI Agents & Decision Support",
    desc: "Ask questions in plain language and get grounded answers — like ZoneAgent — bringing spatial expertise to everyone, not just GIS specialists.",
  },
];

export function Services() {
  return (
    <Section id="services" className="bg-off">
      <SectionLabel>What We Do</SectionLabel>
      <SectionTitle className="max-w-[680px]">
        Geospatial intelligence that delivers{" "}
        <span className="text-gradient">real business value</span>
      </SectionTitle>
      <p className="reveal mt-4 max-w-[560px] text-[1rem] leading-[1.7] text-dark">
        We work across sectors to gather, combine and deliver real-time insight on
        infrastructure, human behavior and the built environment — with a deep focus
        on urbanization, disaster resilience and public service across Africa.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.title} className="reveal">
              <div
                className={`mb-4 flex size-11 items-center justify-center rounded-xl bg-gradient-to-br ${s.tint} shadow-[0_8px_18px_-6px_rgba(99,91,255,0.5)]`}
              >
                <Icon className="size-5 text-white" strokeWidth={1.8} />
              </div>
              <h3 className="text-[1.05rem] font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-[0.92rem] leading-[1.65] text-dark">{s.desc}</p>
              <a
                href="#contact"
                className="mt-3 inline-flex items-center gap-1 text-[0.9rem] font-medium text-accent transition hover:gap-1.5"
              >
                Learn more <span aria-hidden>→</span>
              </a>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
