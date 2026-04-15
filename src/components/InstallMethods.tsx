import { Chrome, Github, ArrowRight, Zap, Terminal } from "lucide-react";

export default function InstallMethods() {
  return (
    <section
      id="install"
      className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-28"
    >
      {/* Section Header */}
      <div className="text-center mb-14">
        <p className="text-sm font-medium text-brand-400 mb-4">導入方法</p>
        <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
          Skills を導入する方法
        </h2>
        <p className="mt-3 text-text-readable text-base md:text-lg">
          SkillPort の Skills は 2 つの方法で導入できます
        </p>
      </div>

      {/* Two Methods */}
      <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        {/* Method 1: Claude in Chrome */}
        <div className="relative rounded-2xl border border-brand-500/30 bg-gradient-to-b from-brand-600/5 to-surface-1/80 p-8 backdrop-blur-sm">
          {/* Recommended badge */}
          <div className="absolute -top-3 left-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-brand-600/30">
              <Zap size={12} />
              おすすめ
            </span>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/10 border border-brand-500/20 text-brand-400 mb-6 mt-1">
            <Chrome size={22} />
          </div>

          <h3 className="text-lg font-bold text-text-primary mb-2">
            Claude in Chrome を使う
          </h3>
          <p className="text-sm text-text-readable mb-6 leading-relaxed">
            セットアップページを開いて Claude に依頼するだけ。
            <br />
            コマンド操作は不要です。
          </p>

          {/* Steps */}
          <div className="space-y-3 mb-8">
            {[
              "Claude in Chrome を開く",
              "セットアップページを開く",
              "Claude に依頼する",
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-600/20 text-[11px] font-bold text-brand-400">
                  {i + 1}
                </span>
                <span className="text-sm text-text-secondary">{step}</span>
              </div>
            ))}
          </div>

          <a
            href="/setup/workspace-bootstrap"
            className="group inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-500 hover:shadow-lg hover:shadow-brand-600/25 hover:scale-[1.02] active:scale-[0.98]"
          >
            Claude でかんたん導入
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Method 2: GitHub */}
        <div className="rounded-2xl border border-surface-border bg-surface-1/80 p-8 backdrop-blur-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-2 border border-surface-border text-text-readable mb-6">
            <Terminal size={22} />
          </div>

          <h3 className="text-lg font-bold text-text-primary mb-2">
            手動導入（エンジニア向け）
          </h3>
          <p className="text-sm text-text-readable mb-6 leading-relaxed">
            GitHub から直接クローンして導入します。
            <br />
            ターミナル操作に慣れている方向け。
          </p>

          {/* Steps */}
          <div className="space-y-3 mb-8">
            {[
              "GitHub リポジトリを開く",
              "README の手順に沿って導入",
              "Claude Code でセットアップ実行",
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-surface-3/60 text-[11px] font-bold text-text-readable">
                  {i + 1}
                </span>
                <span className="text-sm text-text-readable">{step}</span>
              </div>
            ))}
          </div>

          <a
            href="https://github.com/nobuyawat/workspace-bootstrap"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl border border-surface-border bg-surface-2/60 px-6 py-3 text-sm font-semibold text-text-primary transition-all hover:border-brand-500/30 hover:bg-surface-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Github size={14} />
            GitHub で確認する
          </a>
        </div>
      </div>
    </section>
  );
}
