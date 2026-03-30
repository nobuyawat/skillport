import { ArrowUp, Sparkles } from "lucide-react";

export default function Cta() {
  return (
    <section className="relative border-t border-surface-border/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-brand-500/20 bg-gradient-to-br from-brand-600/10 via-surface-1 to-cyan-600/5 p-10 md:p-16 text-center">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-40 w-80 bg-brand-500/10 blur-3xl rounded-full" />

          <div className="relative z-10">
            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-400/20 bg-brand-400/10 px-4 py-1 text-sm font-semibold text-brand-400">
                <Sparkles size={14} />
                無料 Skill あり
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
              あなたの作業を
              <br className="hidden sm:block" />
              AI で変えてみませんか。
            </h2>
            <p className="mt-4 text-text-tertiary text-base md:text-lg max-w-lg mx-auto">
              無料の Skill から始められます。Claude Code があれば、すぐに使えます。
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href="#skills"
                className="group flex items-center gap-2 rounded-xl bg-brand-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition-all hover:bg-brand-500 hover:shadow-xl hover:shadow-brand-600/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                Skill を見る
                <ArrowUp
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
