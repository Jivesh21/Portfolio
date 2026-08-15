import { motion } from "framer-motion";
import { GraduationCap, Target } from "lucide-react";
import profile from "../assets/profile.png";
import { EDUCATION, ACHIEVEMENTS } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">About Me</span>

          <h2 className="section-heading mt-3">
            Building full-stack products that solve real problems
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* ==================================== */}
          {/* Left Side */}
          {/* ==================================== */}

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start"
          >
            {/* Profile Image */}
            <div className="relative h-48 w-48 mb-8">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-accent-500/40 to-glow-cyan/30 blur-xl"></div>

              <div className="relative h-full w-full rounded-3xl overflow-hidden glass">
                <img
                  src={profile}
                  alt="Jivesh Sharma"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* About Text */}
            <div className="text-slate-400 leading-relaxed">
              <p>
                I'm a B.Tech Computer Science student at{" "}
                <span className="text-white font-medium">
                  Ambala College of Engineering and Applied Research
                </span>
                , focused on full-stack web development using React,
                Node.js, Express.js, and MongoDB.
              </p>

              <p className="mt-5">
                I started my journey with HTML, CSS, and JavaScript and
                progressed into building complete web applications with
                authentication, REST APIs, databases, real-time
                communication, cloud storage, and AI integration.
              </p>

              <p className="mt-5">
                My main project,{" "}
                <span className="text-white font-medium">
                  DevPulse
                </span>
                , is a production-deployed developer social platform
                featuring real-time messaging, notifications, cloud media,
                and an AI-powered developer assistant.
              </p>

              <p className="mt-5">
                I enjoy turning ideas into working products, solving
                engineering problems, and continuously improving my
                development skills through hands-on projects.
              </p>
            </div>

            {/* Career Objective */}
            <div className="mt-6 glass rounded-2xl p-5 w-full flex gap-4 items-start">
              <Target
                className="text-accent-400 shrink-0 mt-1"
                size={20}
              />

              <div>
                <h4 className="text-white font-medium mb-1">
                  Career Objective
                </h4>

                <p className="text-sm text-slate-400 leading-relaxed">
                  My goal is to begin my career as a Software Developer where
                  I can contribute to real-world products, apply my full-stack
                  development skills, and continue growing through challenging
                  engineering problems while working with experienced teams.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ==================================== */}
          {/* Right Side */}
          {/* ==================================== */}

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Education */}
            <h3 className="flex items-center gap-2 text-white font-display text-xl font-medium mb-6">
              <GraduationCap
                className="text-accent-400"
                size={22}
              />

              Education
            </h3>

            <div className="relative pl-6 border-l border-white/10 space-y-8">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-accent-400 shadow-glow-sm"></span>

                  <p className="text-xs text-accent-400 font-medium mb-1">
                    {edu.year}
                  </p>

                  <h4 className="text-white font-medium">
                    {edu.title}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {edu.org}
                  </p>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {ACHIEVEMENTS.slice(0, 4).map((a, i) => (
                <motion.div
                  key={a.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                  }}
                  className="card text-center py-6"
                >
                  <p className="text-2xl font-display font-semibold gradient-text">
                    {a.value}
                  </p>

                  <p className="text-xs text-slate-400 mt-1">
                    {a.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}