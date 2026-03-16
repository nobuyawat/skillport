import { ArrowRight, Github, Rocket } from "lucide-react";

const WB_REPO = "https://github.com/nobuyawat/workspace-bootstrap";

export default function Cta() {
  return (
    <section className="relative border-t border-surface-border/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-brand-500/20 bg-gradient-to-br from-brand-600/10 via-surface-1 to-cyan-600/5 p-10 md:p-16 text-center">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-40 w-80 bg-brand-500/10 blur-3xl rounded-full" />

          <div className="relative z-10">
            {/* Free badge */}
            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1 text-sm font-semibold text-emerald-400">
                無料公開中
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
              まずは Workspace Bootstrap を
              <br className="hidden sm:block" />
              試してみてください。
            </h2>
            <p className="mt-4 text-text-tertiary text-base md:text-lg max-w-lg mx-auto">
              AI 作業環境の構築が、どれだけ簡単になるか体験できます。
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="/setup/workspace-bootstrap"
                className="group flex items-center gap-2 rounded-xl bg-brand-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition-all hover:bg-brand-500 hover:shadow-xl hover:shadow-brand-600/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Rocket size={16} />
                無料で試す
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href={WB_REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-surface-border bg-surface-2/50 px-8 py-4 text-sm font-semibold text-text-primary transition-all hover:border-brand-500/30 hover:bg-surface-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Github size={16} />
                GitHub を見る
              </a>
            </div>

            {/* Supplementary note */}
            <p className="mt-6 text-xs text-text-tertiary/60 max-w-md mx-auto leading-relaxed">
              将来的には SkillPort 上からワンクリック導入に対応予定です
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
