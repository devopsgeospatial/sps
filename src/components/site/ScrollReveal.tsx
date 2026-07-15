"use client";

import { useEffect } from "react";

/**
 * Adds `.visible` to any `.reveal` element as it scrolls into view.
 * Progressive enhancement — content is fully visible without JS via CSS fallback
 * only when reduced-motion is set; otherwise this drives the entrance.
 */
export function ScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}
