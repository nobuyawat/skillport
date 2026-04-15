import { X } from "lucide-react";

const painPoints = [
  "GitHub の操作がわからない",
  "ZIPファイルをどこに置けばいいかわからない",
  "設定ファイルの書き方が難しい",
  "ターミナルのコマンドが怖い",
];

export default function Problem() {
  return (
    <section className="relative border-t border-surface-border/40 bg-surface-1/20">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <p className="text-sm font-medium text-brand-400 mb-4 text-center md:text-left">
            SkillPort が解決する問題
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl text-center md:text-left">
            AI ツールは増えている。
            <br />
            <span className="text-text-readable">
              でも、使いこなせる人は少ない。
            </span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-text-readable md:text-lg text-center md:text-left">
            Claude Code には便利な Skills（自動化ツール）がたくさんあります。
            <br />
            しかし多くの人が、導入の段階でつまずいています。
          </p>

          {/* Pain points */}
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {painPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 rounded-xl border border-red-500/10 bg-red-500/5 px-5 py-4"
              >
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-500/10">
                  <X size={14} className="text-red-400" />
                </div>
                <span className="text-sm text-text-secondary">{point}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-lg font-medium text-text-secondary md:text-xl md:text-left">
            SkillPort は、この問題を解決するために作られました。
          </p>
        </div>
      </div>
    </section>
  );
}
