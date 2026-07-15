import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type Variant = "fill" | "outline" | "ghost";
type Size = "md" | "sm";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] whitespace-nowrap";

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-[0.9rem]",
  sm: "px-4 py-2 text-[0.85rem]",
};

const variants: Record<Variant, string> = {
  fill: "bg-ink text-white hover:bg-accent hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(99,91,255,0.28)]",
  outline:
    "border-[1.5px] border-border text-ink hover:border-ink hover:-translate-y-0.5",
  ghost: "text-dark hover:text-ink hover:bg-black/[0.03]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "fill",
  size = "md",
  arrow = false,
  className = "",
  children,
  href,
  external,
  ...rest
}: CommonProps & {
  href?: string;
  external?: boolean;
} & Partial<ComponentProps<"button">>) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && (
        <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={cls} {...(rest as ComponentProps<"button">)}>
      {inner}
    </button>
  );
}
