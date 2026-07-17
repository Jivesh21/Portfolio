import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently active based on scroll position.
 * Uses the section whose top edge is closest to (but above) a reference
 * line near the top of the viewport. More reliable than IntersectionObserver
 * for sections taller than the viewport.
 */
export default function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    function handleScroll() {
      const referenceLine = window.innerHeight * 0.35;
      let current = elements[0]?.id;

      for (const el of elements) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= referenceLine) {
          current = el.id;
        }
      }
      setActive((prev) => (prev !== current ? current : prev));
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sectionIds]);

  return active;
}
