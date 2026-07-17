import { motion } from "framer-motion";

/**
 * Consistent scroll-reveal wrapper used across every section so fade-up
 * timing/easing feels identical site-wide instead of ad-hoc per section.
 * Pass `index` for staggered grids (cards), or omit for single elements.
 */
export default function Reveal({
  children,
  index = 0,
  y = 28,
  duration = 0.6,
  className = "",
  once = true,
  amount = 0.3,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay: Math.min(index * 0.08, 0.4),
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
