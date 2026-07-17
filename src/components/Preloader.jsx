import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Word list: "Hello" in different languages.
const GREETINGS = [
  "Hello",
  "Hola",
  "Bonjour",
  "Ciao",
  "Hallo",
  "Olá",
  "こんにちは",
  "안녕하세요",
  "你好",
  "नमस्ते",
  "Привет",
  "مرحبا",
];

const WORD_DURATION = 950; // ms each word is shown on screen

/**
 * Full-screen preloader that cycles through "Hello" in multiple languages
 * with cinematic fade / blur / scale / slide transitions, then hands off
 * to the app with a fade + zoom transition. Shows once per browser session.
 */
export default function Preloader({ onFinish }) {
  const [visible, setVisible] = useState(true);
  const [index, setIndex] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("preloader_shown");
    if (alreadySeen) {
      setVisible(false);
      onFinish?.();
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      if (i >= GREETINGS.length) {
        clearInterval(interval);
        setExiting(true);
        setTimeout(() => {
          sessionStorage.setItem("preloader_shown", "true");
          setVisible(false);
          onFinish?.();
        }, 1000);
      } else {
        setIndex(i);
      }
    }, WORD_DURATION);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-base-950"
          initial={{ opacity: 1 }}
          animate={{
            opacity: exiting ? 0 : 1,
            scale: exiting ? 1.15 : 1,
          }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* animated ambient gradient blobs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent-500/30 blur-[110px] animate-blob" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-glow-cyan/20 blur-[110px] animate-blob [animation-delay:2s]" />
            <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow-pink/10 blur-[120px] animate-blob [animation-delay:4s]" />
          </div>

          {/* subtle grid */}
          <div className="absolute inset-0 bg-grid-glow opacity-60" />

          {/* word */}
          <div className="relative flex h-40 w-full items-center justify-center px-6">
            <AnimatePresence mode="wait">
              <motion.span
                key={GREETINGS[index]}
                initial={{ opacity: 0, y: 40, scale: 0.85, filter: "blur(14px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -40, scale: 1.1, filter: "blur(14px)" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold gradient-text text-center"
              >
                {GREETINGS[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* progress dots */}
          <div className="absolute bottom-14 flex items-center gap-2">
            {GREETINGS.map((g, i) => (
              <span
                key={g + i}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-accent-400" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
