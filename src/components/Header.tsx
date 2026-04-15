"use client";

import { useState } from "react";
import { Menu, X, Github } from "lucide-react";

const navItems = [
  { label: "Skills", href: "#skills" },
  { label: "使い方", href: "/start" },
  { label: "今後の展開", href: "#ecosystem" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-surface-border/60 bg-surface-0/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600/20 border border-brand-500/30 group-hover:bg-brand-600/30 transition-colors">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-brand-400"
            >
              <path
                d="M2 4L8 1L14 4V12L8 15L2 12V4Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M8 1V15"
                stroke="currentColor"
                strokeWidth="1.5"
                opacity="0.5"
              />
              <path
                d="M2 4L8 7L14 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
                opacity="0.5"
              />
            </svg>
          </div>
          <span className="text-lg font-semibold tracking-tight text-text-primary">
            Skill<span className="text-brand-400">Port</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-sm text-text-secondary transition-colors hover:text-text-primary hover:bg-surface-2/60"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://github.com/nobuyawat/workspace-bootstrap"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 rounded-lg p-2 text-text-readable transition-colors hover:text-text-primary hover:bg-surface-2/60"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <div className="ml-3 h-5 w-px bg-surface-border" />
          <a
            href="#skills"
            className="ml-3 rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-brand-500 hover:shadow-lg hover:shadow-brand-600/20"
          >
            Skill を試す
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-text-secondary md:hidden hover:bg-surface-2"
          aria-label="メニュー"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="border-t border-surface-border bg-surface-1/95 backdrop-blur-xl px-6 py-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm text-text-secondary hover:text-text-primary hover:bg-surface-2/60"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://github.com/nobuyawat/workspace-bootstrap"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-text-secondary hover:text-text-primary hover:bg-surface-2/60"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="#skills"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block rounded-lg bg-brand-600 px-4 py-2.5 text-center text-sm font-medium text-white"
          >
            Skill を試す
          </a>
        </nav>
      )}
    </header>
  );
}
