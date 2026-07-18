import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useSectionTheme } from "../context/ThemeContext";

/**
 * Chibi mascot hanging from a thread near the navbar.
 * - Idle pendulum swing at all times.
 * - Subtle parallax tilt following cursor X position across the page.
 * - Automatically waves once when the visitor scrolls into the Contact section.
 * - Click also triggers a wave on demand.
 */
export default function HangingMascot() {
  const [waving, setWaving] = useState(false);
  const [parallax, setParallax] = useState(0);
  const hasWavedAtContact = useRef(false);
  const { activeSection } = useSectionTheme();

  // cursor parallax — subtle horizontal tilt based on mouse position
  useEffect(() => {
    function handleMouseMove(e) {
      const ratio = e.clientX / window.innerWidth - 0.5; // -0.5 .. 0.5
      setParallax(ratio * 10); // max ~5deg either way
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // wave once automatically when contact section is reached
  useEffect(() => {
    if (activeSection === "contact" && !hasWavedAtContact.current) {
      hasWavedAtContact.current = true;
      setWaving(true);
    }
  }, [activeSection]);

  return (
    <div className="hidden sm:block fixed top-0 right-6 sm:right-16 z-40 pointer-events-none select-none">
      <motion.div
        style={{ transformOrigin: "top center" }}
        animate={{ rotate: [parallax - 6, parallax + 6, parallax - 6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center pointer-events-auto cursor-pointer"
        onClick={() => setWaving(true)}
      >
        <div className="w-px h-10 sm:h-14 bg-white/25" />

        <motion.svg
          width="64"
          height="78"
          viewBox="0 0 64 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={waving ? { y: [0, -4, 0] } : {}}
          transition={{ duration: 0.5 }}
          onAnimationComplete={() => setWaving(false)}
        >
          <path
            d="M14 34C14 24 22 17 32 17C42 17 50 24 50 34V56C50 61 46 65 41 65H23C18 65 14 61 14 56V34Z"
            fill="#7c6cff"
          />
          <line x1="28" y1="30" x2="27" y2="44" stroke="#5b4be0" strokeWidth="2" strokeLinecap="round" />
          <line x1="36" y1="30" x2="37" y2="44" stroke="#5b4be0" strokeWidth="2" strokeLinecap="round" />

          <circle cx="32" cy="18" r="15" fill="#ffd8b8" />
          <path d="M17 16C17 8 24 3 32 3C40 3 47 8 47 16C41 11 23 11 17 16Z" fill="#7c6cff" />

          <motion.g
            animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.9, 0.95, 1, 1] }}
            style={{ transformOrigin: "32px 19px" }}
          >
            <circle cx="26" cy="19" r="2" fill="#1f2333" />
            <circle cx="38" cy="19" r="2" fill="#1f2333" />
          </motion.g>

          <path d="M27 25C29 27 35 27 37 25" stroke="#1f2333" strokeWidth="1.5" strokeLinecap="round" />

          <circle cx="22" cy="23" r="2" fill="#ff9d9d" opacity="0.6" />
          <circle cx="42" cy="23" r="2" fill="#ff9d9d" opacity="0.6" />

          <motion.g
            animate={{ rotate: [-4, 4, -4] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "26px 60px" }}
          >
            <rect x="22" y="60" width="6" height="14" rx="3" fill="#2a2d3d" />
          </motion.g>
          <motion.g
            animate={{ rotate: [4, -4, 4] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "38px 60px" }}
          >
            <rect x="34" y="60" width="6" height="14" rx="3" fill="#2a2d3d" />
          </motion.g>

          <rect x="24" y="46" width="16" height="10" rx="1.5" fill="#1f2333" />
          <rect x="25.5" y="47.5" width="13" height="6" rx="1" fill="#5eead4" opacity="0.85" />

          {waving && (
            <motion.rect
              x="47"
              y="38"
              width="5"
              height="14"
              rx="2.5"
              fill="#ffd8b8"
              initial={{ rotate: 0 }}
              animate={{ rotate: [-20, 20, -20, 0] }}
              transition={{ duration: 0.6 }}
              style={{ transformOrigin: "47px 40px" }}
            />
          )}
        </motion.svg>
      </motion.div>
    </div>
  );
}
