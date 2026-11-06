"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { nav } from "@/lib/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The hero is a pale sheet (white gradient over the Kigali photo), so the
  // nav keeps dark text at all times; only the bar background reacts to scroll.

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-[0_1px_10px_rgba(10,37,64,0.06)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[68px] max-w-[1080px] items-center px-6">
        <Logo className="mr-8 text-[1.3rem] text-ink" />

        <div className="hidden flex-1 items-center gap-1 md:flex">
          {nav.map((item) => {
            const external = item.href.startsWith("http");
            const cls =
              "inline-flex items-center gap-1 rounded-md px-3 py-2 text-[0.95rem] font-medium text-dark transition hover:text-ink";
            const inner = (
              <>
                {item.label}
                {item.href.startsWith("/#") && <ChevronDown className="size-3.5 opacity-70" />}
              </>
            );
            return external ? (
              <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className={cls}>
                {inner}
              </a>
            ) : (
              <Link key={item.href} href={item.href} className={cls}>
                {inner}
              </Link>
            );
          })}
        </div>

        <div className="ml-auto hidden items-center gap-4 md:flex">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-[0.95rem] font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-accent-dark hover:shadow-[0_6px_18px_rgba(99,91,255,0.35)]"
          >
            Request a consultation
            <span aria-hidden>→</span>
          </Link>
        </div>

        <button
          className="ml-auto flex size-10 items-center justify-center rounded-lg text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-light bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => {
              const cls =
                "rounded-lg px-2 py-2.5 text-[1rem] font-medium text-dark hover:bg-off";
              return item.href.startsWith("http") ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className={cls}
                >
                  {item.label}
                </a>
              ) : (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={cls}>
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-accent px-4 py-2.5 text-center text-[0.95rem] font-medium text-white"
            >
              Request a consultation →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
