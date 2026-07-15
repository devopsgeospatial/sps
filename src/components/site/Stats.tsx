const stats = [
  { num: "4+", label: "years delivering production geospatial intelligence" },
  { num: "1st", label: "AI zoning agent deployed in East Africa — ZoneAgent" },
  { num: "4", label: "focus areas: infrastructure, urbanization, disaster risk & public service" },
  { num: "24/7", label: "real-time spatial monitoring from satellite, field & enterprise data" },
];

export function Stats() {
  return (
    <section className="border-b border-light bg-white px-6 py-16">
      <div className="mx-auto max-w-[1080px]">
        <p className="reveal mb-10 text-center text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-gray">
          Trusted geospatial intelligence across Africa&apos;s public sector
        </p>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.num} className="reveal text-center">
              <div className="display text-[clamp(2.4rem,4vw,3.2rem)] text-gradient">
                {s.num}
              </div>
              <div className="mx-auto mt-2 max-w-[200px] text-[0.86rem] leading-[1.5] text-gray">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
