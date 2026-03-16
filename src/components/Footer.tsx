import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-surface-border/40 bg-surface-0">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center gap-1.5 md:items-start">
            <span className="text-base font-semibold text-text-primary tracking-tight">
              Skill<span className="text-brand-400">Port</span>
            </span>
            <span className="text-xs text-text-tertiary">
              非エンジニアが AI で最強になる場所
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <a
              href="#skills"
              className="text-xs text-text-tertiary hover:text-text-secondary transition-colors"
            >
              Skills
            </a>
            <a
              href="#how"
              className="text-xs text-text-tertiary hover:text-text-secondary transition-colors"
            >
              使い方
            </a>
            <a
              href="#ecosystem"
              className="text-xs text-text-tertiary hover:text-text-secondary transition-colors"
            >
              今後の展開
            </a>
            <a
              href="https://github.com/nobuyawat/workspace-bootstrap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
          </nav>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-8 border-t border-surface-border/40 pt-6 text-center">
          <p className="text-[11px] text-text-tertiary/50">
            &copy; {new Date().getFullYear()} SkillPort. Built for the Claude
            Code community.
          </p>
        </div>
      </div>
    </footer>
  );
}
