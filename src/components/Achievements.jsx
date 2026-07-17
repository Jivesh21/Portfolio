import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ACHIEVEMENTS } from "../data/content";

function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref}>{count}+</span>;
}

export default function Achievements() {
  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card text-center py-8"
            >
              <p className="text-3xl font-display font-semibold gradient-text">
                <Counter value={a.value} />
              </p>
              <p className="text-xs text-slate-400 mt-2">{a.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
