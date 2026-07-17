import { Github, Linkedin, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "../data/content";

const ICONS = { Github, Linkedin, Mail };

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="h-9 w-9 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <Icon size={15} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
