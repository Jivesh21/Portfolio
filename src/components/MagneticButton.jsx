import { useRef } from "react";
import { motion } from "framer-motion";

/**
 * Wraps any element (typically a button/link) and gives it a magnetic
 * pull toward the cursor when hovered, snapping back on leave.
 * Usage: <MagneticButton><a className="btn-primary">Click</a></MagneticButton>
 */
export default function MagneticButton({ children, strength = 0.35, className = "" }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block transition-transform duration-200 ease-out ${className}`}
      data-cursor-hover
    >
      {children}
    </motion.div>
  );
}
