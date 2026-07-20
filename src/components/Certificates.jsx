import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { CERTIFICATES } from "../data/content";

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">Certificates</span>
          <h2 className="section-heading mt-3">Recognized learning</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-0 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-base-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Award className="text-accent-400" size={28} />
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-white font-medium text-sm">{cert.title}</h4>
                <p className="text-xs text-slate-500 mt-1">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
