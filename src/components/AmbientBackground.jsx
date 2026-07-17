import { motion } from "framer-motion";
import { useSectionTheme } from "../context/ThemeContext";

/**
 * Sits behind the entire page (fixed, z-0) and smoothly cross-fades its
 * gradient colors to match the currently active section's theme.
 * Includes a full-viewport radial wash (strong, unmistakable) plus
 * corner blobs for extra depth.
 */
export default function AmbientBackground() {
  const { theme } = useSectionTheme();

  const transition = { duration: 1, ease: [0.22, 1, 0.36, 1] };

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Full-viewport color wash — the main, obvious signal */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: `radial-gradient(circle at 50% 0%, ${theme.primary}55, transparent 60%)`,
        }}
        transition={transition}
      />

      <motion.div
        className="absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full blur-[120px] animate-blob"
        animate={{ backgroundColor: theme.primary, opacity: 0.5 }}
        transition={transition}
      />
      <motion.div
        className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full blur-[120px] animate-blob [animation-delay:2s]"
        animate={{ backgroundColor: theme.secondary, opacity: 0.35 }}
        transition={transition}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px] animate-blob [animation-delay:4s]"
        animate={{ backgroundColor: theme.tertiary, opacity: 0.25 }}
        transition={transition}
      />

      <div className="absolute inset-0 bg-grid-glow opacity-40" />
    </div>
  );
}
