import {
  Landmark,
  Bot,
  ClipboardCheck,
  LayoutDashboard,
  Wrench,
  Route,
  ShieldAlert,
  Layers3,
} from "lucide-react";
import { Section, SectionLabel, SectionTitle } from "@/components/ui/Section";

const services = [
  {
    icon: Landmark,
    tint: "from-[#635bff] to-[#8b83ff]",
    title: "Digital Public Services",
    desc: "Citizen facing applications for planning, permits and land information, so people get answers without visiting an office.",
  },
  {
    icon: Bot,
    tint: "from-[#0073e6] to-[#635bff]",
    title: "GeoAI Assistants",
    desc: "Natural language tools grounded in official regulations and data, such as ZoneAgent.",
  },
  {
    icon: ClipboardCheck,
    tint: "from-[#00b8d4] to-[#00d4ff]",
    title: "Field & Inspection Apps",
    desc: "Mobile and web applications for data collection, inspection workflows and case management.",
  },
  {
    icon: LayoutDashboard,
    tint: "from-[#7a73ff] to-[#635bff]",
    title: "Dashboards & Decision Platforms",
    desc: "Executive dashboards, web maps and APIs that bring data into daily decisions.",
  },
  {
    icon: Wrench,
    tint: "from-[#0073e6] to-[#00d4ff]",
    title: "Infrastructure Asset Management",
    desc: "Digital inventories, condition monitoring and maintenance planning tools for roads, utilities and public assets.",
  },
  {
    icon: Route,
    tint: "from-[#635bff] to-[#0073e6]",
    title: "Transport & Mobility Tools",
    desc: "Route planning, network analysis and digital tools for transport operators and planning authorities.",
  },
  {
    icon: ShieldAlert,
    tint: "from-[#00d4ff] to-[#0073e6]",
    title: "Disaster Risk Applications",
    desc: "Digital tools that help institutions assess hazards and plan preparedness.",
  },
  {
    icon: Layers3,
    tint: "from-[#8b83ff] to-[#635bff]",
    title: "Enterprise GIS, Integration & Training",
    desc: "Platform design, system integration, data pipelines, and capacity building so teams can run and maintain their own tools.",
  },
];

export function Services() {
  return (
    <Section id="services" className="bg-off">
      <SectionLabel>What We Do</SectionLabel>
      <SectionTitle className="max-w-[680px]">
        Digital tools built on{" "}
        <span className="text-gradient">spatial data and GeoAI</span>
      </SectionTitle>
      <p className="reveal mt-4 max-w-[560px] text-[1rem] leading-[1.7] text-dark">
        We build applications, platforms and decision tools for public
        institutions, development partners and businesses — from citizen facing
        services to the systems teams rely on every day.
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
