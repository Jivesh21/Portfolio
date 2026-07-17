import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

// EmailJS Setup
// EmailJS Setup
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const e = {};

    if (!form.name.trim()) e.name = "Name is required";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";

    if (form.message.trim().length < 10)
      e.message = "Message should be at least 10 characters";

    setErrors(e);

    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    if (!validate()) return;

    setStatus("sending");

    try {
   await emailjs.send(
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  {
    name: form.name,
    email: form.email,
    message: form.message,
  },
  {
    publicKey: EMAILJS_PUBLIC_KEY,
  }
);

      setStatus("sent");
      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Contact</span>

          <h2 className="section-heading mt-3">Let's Connect</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            <h3 className="text-2xl font-semibold text-white">
              Get in Touch
            </h3>

            <p className="text-slate-400 leading-relaxed">
              I'm currently looking for internship and entry-level opportunities
              in Frontend and MERN Stack Development.
              <br />
              <br />
              Whether you have an opportunity, a project idea, or simply want
              to connect, I'd be happy to hear from you.
            </p>

            {/* Email */}
            <div className="card flex items-center gap-4">
              <Mail className="text-accent-400" size={20} />

              <div>
                <p className="text-xs text-slate-500">Email</p>

                <a
                  href="mailto:jivesh2110@outlook.com"
                  className="text-white hover:text-accent-400 transition"
                >
                  jivesh2110@outlook.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="card flex items-center gap-4">
              <MapPin className="text-accent-400" size={20} />

              <div>
                <p className="text-xs text-slate-500">Location</p>

                <p className="text-white">
                  Ambala, Haryana, India
                </p>
              </div>
            </div>

            {/* GitHub */}
            <div className="card flex items-center gap-4">
              <Github className="text-accent-400" size={20} />

              <div>
                <p className="text-xs text-slate-500">GitHub</p>

                <a
                  href="https://github.com/Jivesh21"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-accent-400 transition"
                >
                  github.com/Jivesh21
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="card flex items-center gap-4">
              <Linkedin className="text-accent-400" size={20} />

              <div>
                <p className="text-xs text-slate-500">LinkedIn</p>

                <a
                  href="https://www.linkedin.com/in/jivesh-sharma-9aa2b1268/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-accent-400 transition"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 card space-y-5"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-accent-400 outline-none"
              />

              {errors.name && (
                <p className="text-xs text-red-400 mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-accent-400 outline-none"
              />

              {errors.email && (
                <p className="text-xs text-red-400 mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <textarea
                rows={5}
                placeholder="Your Message"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 resize-none focus:border-accent-400 outline-none"
              />

              {errors.message && (
                <p className="text-xs text-red-400 mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="btn-primary w-full justify-center"
            >
              {status === "idle" && (
                <>
                  Send Message <Send size={16} />
                </>
              )}

              {status === "sending" && "Sending..."}

              {status === "sent" && (
                <>
                  Sent Successfully <CheckCircle2 size={16} />
                </>
              )}

              {status === "error" && (
                <>
                  Failed <AlertCircle size={16} />
                </>
              )}
            </button>

            {status === "error" && (
              <p className="text-center text-sm text-red-400">
                Please configure EmailJS before using the contact form.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}