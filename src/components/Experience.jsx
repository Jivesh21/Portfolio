import { motion } from "framer-motion";
import { Briefcase, Award, Users } from "lucide-react";
import { EXPERIENCE } from "../data/content";

const TYPE_ICON = { Internship: Briefcase, Certification: Award, Workshop: Users };

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Experience</span>
          <h2 className="section-heading mt-3">Where I've grown</h2>
        </motion.div>

        <div className="relative pl-8 border-l border-white/10 space-y-10">
          {EXPERIENCE.map((exp, i) => {
            const Icon = TYPE_ICON[exp.type] || Briefcase;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-[41px] top-0 h-8 w-8 rounded-full glass flex items-center justify-center text-accent-400">
                  <Icon size={15} />
                </span>
                <div className="card">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <span className="text-[11px] uppercase tracking-wide text-accent-400 font-semibold">
                      {exp.type}
                    </span>
                    <span className="text-xs text-slate-500">{exp.period}</span>
                  </div>
                  <h4 className="text-white font-medium">{exp.title}</h4>
                  <p className="text-sm text-slate-500 mb-2">{exp.org}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
