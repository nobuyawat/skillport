import {
  Search,
  Share2,
  Megaphone,
  PenTool,
  Code2,
  Layers,
} from "lucide-react";

const upcomingSkills = [
  {
    icon: <Search size={18} />,
    name: "Research Assistant",
    description: "Web 調査を AI で自動化",
    status: "開発中",
  },
  {
    icon: <Megaphone size={18} />,
    name: "SNS Automation",
    description: "SNS 投稿の作成・予約を支援",
    status: "企画中",
  },
  {
    icon: <PenTool size={18} />,
    name: "Content Generator",
    description: "ブログ・記事の下書きを自動生成",
    status: "企画中",
  },
  {
    icon: <Code2 size={18} />,
    name: "Dev Workflow",
    description: "開発作業の自動化パイプライン",
    status: "企画中",
  },
  {
    icon: <Layers size={18} />,
    name: "Udemy Builder",
    description: "Udemy 講座の構成・台本・スライド",
    status: "開発中",
  },
  {
    icon: <Share2 size={18} />,
    name: "あなたの Skill?",
    description: "自作 Skill を SkillPort で公開",
    status: "募集中",
  },
];

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="relative border-t border-surface-border/40 bg-surface-1/20"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-brand-400 mb-4">
            今後の展開
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            Skills はこれからどんどん増えます。
          </h2>
          <p className="mt-4 text-text-tertiary text-base md:text-lg max-w-xl mx-auto">
            リサーチ、SNS、コンテンツ制作、開発...
            <br />
            あらゆる作業を Skills で自動化できる世界を目指しています。
          </p>
        </div>

        {/* Upcoming Skills Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-4 rounded-xl border border-surface-border/60 bg-surface-1/40 px-5 py-4 transition-all hover:border-surface-border hover:bg-surface-2/30"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-surface-2 border border-surface-border text-text-tertiary">
                {skill.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-text-primary truncate">
                    {skill.name}
                  </h3>
                  <span className="flex-shrink-0 rounded-full bg-surface-3 px-2 py-0.5 text-[10px] font-medium text-text-tertiary">
                    {skill.status}
                  </span>
                </div>
                <p className="text-xs text-text-tertiary mt-0.5">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="mt-16 text-center">
          <div className="inline-block rounded-2xl border border-surface-border/40 bg-surface-1/40 px-8 py-6 md:px-12 md:py-8">
            <p className="text-lg font-medium text-text-secondary md:text-xl leading-relaxed">
              SkillPort の目標は、
              <br className="sm:hidden" />
              <span className="text-text-primary font-bold">
                すべての人が AI の力を使いこなせる
              </span>
              <br />
              ようになること。
            </p>
            <p className="mt-3 text-sm text-text-tertiary">
              Skills を追加するたびに、あなたの AI 能力が拡張されます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
