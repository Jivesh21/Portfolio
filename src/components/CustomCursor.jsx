import { useEffect, useRef, useState } from "react";

/**
 * A small dot + trailing ring cursor. Grows and changes opacity when
 * hovering over interactive elements (a, button, [data-cursor-hover]).
 * Disabled automatically on touch devices.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    setEnabled(true);

    let ringX = 0;
    let ringY = 0;
    let mouseX = 0;
    let mouseY = 0;

    function handleMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
    }

    function handleOver(e) {
      const el = e.target.closest("a, button, [data-cursor-hover]");
      setHovering(Boolean(el));
      const isTextField = e.target.closest("input, textarea, select");
      setEnabled(!isTextField);
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);

    let frameId;
    function animateRing() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      frameId = requestAnimationFrame(animateRing);
    }
    animateRing();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      cancelAnimationFrame(frameId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[100] h-2 w-2 rounded-full bg-accent-400 pointer-events-none mix-blend-difference"
      />
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 z-[99] rounded-full border pointer-events-none transition-all duration-200 ease-out ${
          hovering ? "h-12 w-12 border-accent-400/70 bg-accent-400/10" : "h-8 w-8 border-white/30"
        }`}
      />
    </>
  );
}
