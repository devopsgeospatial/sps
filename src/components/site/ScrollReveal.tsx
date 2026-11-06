"use client";

import { useEffect } from "react";

/**
 * Adds `.visible` to any `.reveal` element as it scrolls into view.
 *
 * `.reveal` starts at opacity 0, so anything this misses stays invisible.
 * Three guards against that:
 *   1. elements already on screen at mount are revealed immediately;
 *   2. an IntersectionObserver handles the rest on scroll;
 *   3. a timed sweep reveals everything left over, in case the observer
 *      misses an element during a fast scroll.
 * Visitors without JS are covered by the <noscript> rule in layout.tsx.
 */
export function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const show = (el: Element) => el.classList.add("visible");

    if (!("IntersectionObserver" in window)) {
      els.forEach(show);
      return;
    }

    // 1. anything in view on load should not wait for a scroll event
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) show(el);
    });

    // 2. reveal the rest as they arrive
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show(e.target);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => {
      if (!el.classList.contains("visible")) obs.observe(el);
    });

    // 3. safety net — never leave content permanently hidden
    const sweep = window.setTimeout(() => {
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 1.5) show(el);
      });
    }, 2500);

    return () => {
      obs.disconnect();
      window.clearTimeout(sweep);
    };
  }, []);

  return null;
}
