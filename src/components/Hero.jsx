import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import { SOCIAL_LINKS } from "../data/content";
import MagneticButton from "./MagneticButton";
import HeroScene from "./HeroScene";

const ROLES = [
  "Frontend Developer",
  "React Learner",
  "B.Tech CSE Student",
  "Building Modern Web Apps"
];
const ICONS = { Github, Linkedin, Mail };

function useTypingEffect(words, speed = 80, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        setText((t) => (deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)));
      }, deleting ? speed / 2 : speed);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const typed = useTypingEffect(ROLES);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="section-label block">
            Hello, I'm Jivesh Sharma 👋
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1]"
          >
            Hi, I'm <span className="gradient-text">Jivesh Sharma</span>
            <br />
            <span className="text-slate-300 text-3xl sm:text-4xl lg:text-5xl">
              {typed}
              <span className="inline-block w-[2px] h-8 bg-accent-400 ml-1 align-middle animate-pulse" />
            </span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 text-slate-400 text-lg max-w-lg leading-relaxed">
  I'm a B.Tech Computer Science student at Ambala College of Engineering,
  currently learning MERN Stack . I enjoy building
  responsive web applications, solving real-world problems, and continuously
  improving my skills through hands-on projects.
</motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <MagneticButton>
              <a href="#projects" className="btn-primary">
                View Projects <ArrowRight size={18} />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="/resume.pdf" download className="btn-ghost">
                Download Resume <Download size={18} />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="#contact" className="btn-ghost">
                Contact Me
              </a>
            </MagneticButton>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-4">
            {SOCIAL_LINKS.map((s) => {
              const Icon = ICONS[s.icon];
              return (
                <MagneticButton key={s.label} strength={0.5}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="glass h-11 w-11 flex items-center justify-center rounded-full text-slate-300 hover:text-white hover:border-accent-400/50 transition-all"
                  >
                    <Icon size={18} />
                  </a>
                </MagneticButton>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative h-80 w-80 sm:h-[26rem] sm:w-[26rem]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-500/40 via-glow-cyan/20 to-glow-pink/30 blur-2xl animate-pulse" />
            <div className="absolute inset-4 rounded-[2.5rem] glass overflow-hidden">
              <HeroScene />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
