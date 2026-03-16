import { ArrowRight, Sparkles, Rocket, Github } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-52 md:pb-40 hero-gradient grid-pattern noise">
      {/* Center fade overlay — softens grid behind text */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_70%_50%_at_50%_45%,rgba(6,8,15,0.85),transparent)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Badge */}
        <div className="mb-10 opacity-0 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-600/10 px-4 py-1.5 text-sm text-brand-300">
            <Sparkles size={14} className="text-brand-400" />
            Early Access 公開中
          </span>
        </div>

        {/* Main Copy */}
        <h1 className="opacity-0 animate-fade-in-up animate-delay-100">
          <span className="block text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15]">
            非エンジニアが
            <br />
            <span className="text-brand-400">AI</span>
            で最強になる場所。
          </span>
        </h1>

        {/* Sub Copy */}
        <p className="mt-7 text-lg font-medium tracking-wide text-text-secondary/90 md:text-xl opacity-0 animate-fade-in-up animate-delay-200">
          Claude Code を拡張する{" "}
          <span className="text-brand-400">AI</span> スキルの配布サイト
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center opacity-0 animate-fade-in-up animate-delay-300">
          <a
            href="/setup/workspace-bootstrap"
            className="group flex items-center gap-2 rounded-xl bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-600/20 transition-all hover:bg-brand-500 hover:shadow-xl hover:shadow-brand-600/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Rocket size={16} />
            Claude でかんたん導入
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="https://github.com/nobuyawat/workspace-bootstrap"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-surface-border/80 bg-surface-2/60 px-8 py-4 text-base font-semibold text-text-primary transition-all hover:border-brand-500/30 hover:bg-surface-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Github size={16} />
            GitHub で確認
          </a>
        </div>
      </div>
    </section>
  );
}
