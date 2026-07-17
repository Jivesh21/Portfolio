import { motion } from "framer-motion";
import Reveal from "./Reveal";
import * as Icons from "lucide-react";
import { SKILLS } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <span className="section-label">Skills</span>
          <h2 className="section-heading mt-3">Tools I build with</h2>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {SKILLS.map((skill, i) => {
            const Icon = Icons[skill.icon] || Icons.Code2;
            return (
              <Reveal key={skill.name} index={i % 4} className="card relative group">
                {skill.comingSoon && (
                  <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wide px-2 py-1 rounded-full bg-white/[0.06] text-slate-400 border border-white/[0.08]">
                    Soon
                  </span>
                )}
                <div className="h-11 w-11 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-400 mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={22} />
                </div>
                <h4 className="text-white font-medium text-sm mb-3">{skill.name}</h4>

                <div className="h-1.5 w-full rounded-full bg-white/[0.06] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className={`h-full rounded-full ${
                      skill.comingSoon
                        ? "bg-slate-600"
                        : "bg-gradient-to-r from-accent-500 to-glow-cyan"
                    }`}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
