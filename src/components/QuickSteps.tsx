import { Download, MessageCircle, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Download size={22} />,
    title: "Skill をダウンロード",
    description: "SkillPort から使いたい Skill を選ぶ",
  },
  {
    number: "02",
    icon: <MessageCircle size={22} />,
    title: "質問に答える",
    description: "Claude Code がセットアップを案内",
  },
  {
    number: "03",
    icon: <Rocket size={22} />,
    title: "AI ワークスペース完成",
    description: "あなた専用の AI 作業環境が完成",
  },
];

export default function QuickSteps() {
  return (
    <section id="how" className="relative border-t border-surface-border/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        {/* Lead-in message (moved from Hero) */}
        <p className="mx-auto mb-16 max-w-xl text-center text-base leading-relaxed text-text-tertiary md:text-lg">
          SkillPort の Skills は、ダウンロードして質問に答えるだけ。
          <br className="hidden sm:block" />
          GitHub の知識もターミナルの操作も必要ありません。
        </p>

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-brand-400 mb-4">使い方</p>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            たった 3 ステップで完了
          </h2>
        </div>

        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center"
            >
              {/* Connector line (hidden on mobile and last item) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-brand-500/40 to-brand-500/10" />
              )}

              {/* Icon circle */}
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-surface-border bg-surface-1/80 text-brand-400 mb-6 transition-colors hover:border-brand-500/30 hover:bg-surface-2/50">
                {step.icon}
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-[11px] font-bold text-white">
                  {step.number}
                </span>
              </div>

              {/* Text */}
              <h3 className="text-base font-semibold text-text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-text-tertiary leading-relaxed max-w-[220px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
