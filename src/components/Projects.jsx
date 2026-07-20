import { useRef } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "../data/content";

function ProjectCard({ project, index }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -8;
    const rotateY = ((x - rect.width / 2) / rect.width) * 8;
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
  };

  const resetTilt = () => {
    if (ref.current) ref.current.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
     className="card overflow-hidden p-0 flex flex-col h-full transition-transform duration-300 ease-out"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-950 via-transparent to-transparent" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-white font-display text-lg font-medium mb-2">{project.title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="btn-ghost py-2 px-4 text-xs flex-1 justify-center"
  >
    <Github size={15} /> Code
  </a>

  {project.demo && (
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary py-2 px-4 text-xs flex-1 justify-center"
    >
      <ExternalLink size={15} /> Live Demo
    </a>
  )}
</div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">Projects</span>
          <h2 className="section-heading mt-3">Projects That Reflect My Learning</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
