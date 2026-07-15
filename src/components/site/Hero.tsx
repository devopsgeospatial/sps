import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* Aerial Kigali background (diagonal-cut sheet — Stripe angle kept) */}
      <div className="hero-sheet absolute inset-x-0 top-0 h-[640px] sm:h-[720px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-kigali.jpg')" }}
          role="img"
          aria-label="Aerial view of Kigali, Rwanda — dense rooftops rising across the hills"
        />
        {/* white gradient for headline legibility on the left */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 32%, rgba(255,255,255,0.55) 58%, rgba(246,249,252,0.12) 100%)",
          }}
        />
        {/* subtle brand tint + vignette */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1000px 480px at 88% 18%, rgba(99,91,255,0.16), transparent 60%), linear-gradient(to bottom, rgba(255,255,255,0.2), transparent 30%)",
          }}
        />
      </div>

      {/* signature top gradient bar */}
      <div className="gradient-bar absolute inset-x-0 top-0 z-20 h-1" />

      <div className="relative z-10 mx-auto max-w-[1080px] px-6 pt-40 pb-28 sm:pt-44 sm:pb-36">
        <div className="max-w-[640px]">
          <h1 className="display text-[clamp(2.7rem,5.6vw,4.7rem)] text-ink">
            High-quality <span className="text-gradient">geospatial intelligence</span> solutions
          </h1>

          <p className="mt-6 max-w-[500px] text-[1.15rem] leading-[1.6] text-dark">
            We gather, combine and deliver real-time spatial insight on physical
            infrastructure, urbanization and disaster risk — turning geography into
            confident decisions for public institutions and businesses across Africa.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[1rem] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_10px_28px_rgba(99,91,255,0.35)]"
            >
              Start now <span aria-hidden>→</span>
            </Link>
            <a
              href="https://zoneagent.live"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[1rem] font-medium text-ink shadow-[0_2px_8px_rgba(10,37,64,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(10,37,64,0.14)]"
            >
              See the platform <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
