import type { ReactNode } from "react";

export function Section({
  id,
  className = "",
  inner = "max-w-[1140px]",
  children,
}: {
  id?: string;
  className?: string;
  inner?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`relative px-6 py-28 sm:px-10 ${className}`}>
      <div className={`mx-auto ${inner}`}>{children}</div>
    </section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="reveal mb-3 font-mono text-[0.68rem] font-medium uppercase tracking-[0.12em] text-accent">
      {children}
    </div>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`reveal display text-[clamp(1.9rem,3.6vw,2.9rem)] text-ink ${className}`}
    >
      {children}
    </h2>
  );
}

export function SectionSub({ children }: { children: ReactNode }) {
  return (
    <p className="reveal mt-4 max-w-[540px] text-[1rem] font-light leading-[1.75] text-gray">
      {children}
    </p>
  );
}
