import {
  Monitor,
  FileText,
  BookOpen,
  Star,
  Download,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

interface SkillCard {
  name: string;
  description: string;
  category: string;
  categoryColor: string;
  icon: React.ReactNode;
  rating: number;
  downloads: string;
  version: string;
  badge?: string;
  priceBadge: string;
  href?: string;
  available: boolean;
}

const skills: SkillCard[] = [
  {
    name: "Workspace Bootstrap",
    description:
      "AI 作業で使うサイトを1コマンドで全部開く。Chrome のタブ起動、アカウント切替、ログイン確認を自動化。",
    category: "ワークスペース",
    categoryColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    icon: <Monitor size={20} />,
    rating: 4.9,
    downloads: "1.2k",
    version: "v2.0.0",
    badge: "第1弾",
    priceBadge: "無料公開中",
    href: "https://github.com/nobuyawat/workspace-bootstrap",
    available: true,
  },
  {
    name: "Seed Generator",
    description:
      "Udemy 講座の台本を AI で自動生成。講座の構成や話し方のトーンまで、対話で設定できる。",
    category: "コンテンツ",
    categoryColor: "text-violet-400 bg-violet-400/10 border-violet-400/20",
    icon: <FileText size={20} />,
    rating: 4.7,
    downloads: "890",
    version: "v2.0.0",
    priceBadge: "準備中",
    available: false,
  },
  {
    name: "AI Docs Assistant",
    description:
      "プロジェクトのドキュメントを AI が自動で生成・更新。コードを読んで、わかりやすい説明を書いてくれる。",
    category: "生産性",
    categoryColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    icon: <BookOpen size={20} />,
    rating: 4.8,
    downloads: "2.1k",
    version: "v1.5.0",
    priceBadge: "準備中",
    available: false,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      <Star size={12} className="fill-amber-400 text-amber-400" />
      <span className="text-xs font-medium text-text-secondary">{rating}</span>
    </div>
  );
}

export default function SkillCards() {
  return (
    <section
      id="skills"
      className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-28"
    >
      {/* Section Header */}
      <div className="text-center mb-14">
        <p className="text-sm font-medium text-brand-400 mb-4">
          公開中の Skills
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
          今すぐ使える Skills
        </h2>
        <p className="mt-3 text-text-tertiary text-base md:text-lg">
          すべて対話形式でセットアップできます
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-5 md:grid-cols-3">
        {skills.map((skill) => {
          const CardWrapper = skill.available ? "a" : "div";
          const linkProps = skill.available
            ? {
                href: skill.href,
                target: "_blank" as const,
                rel: "noopener noreferrer",
              }
            : {};

          return (
            <CardWrapper
              key={skill.name}
              {...linkProps}
              className={`card-hover group relative flex flex-col rounded-2xl border border-surface-border bg-surface-1/80 p-6 backdrop-blur-sm ${
                skill.available
                  ? "cursor-pointer"
                  : "cursor-default opacity-60"
              }`}
            >
              {/* Badge */}
              {skill.badge && (
                <div className="absolute -top-2.5 right-4">
                  <span className="rounded-full bg-brand-600 px-3 py-0.5 text-[11px] font-bold text-white shadow-lg shadow-brand-600/20">
                    {skill.badge}
                  </span>
                </div>
              )}

              {/* Top row: Icon + Category + Price */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 border border-surface-border text-brand-400 group-hover:text-brand-300 group-hover:border-brand-500/30 transition-colors">
                  {skill.icon}
                </div>
                <div className="flex items-center gap-2">
                  {/* Price badge */}
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${
                      skill.available
                        ? "text-emerald-400 bg-emerald-400/10 border-emerald-400/20"
                        : "text-text-tertiary bg-surface-3/50 border-surface-border"
                    }`}
                  >
                    {skill.priceBadge}
                  </span>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${skill.categoryColor}`}
                  >
                    {skill.category}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-text-primary group-hover:text-brand-300 transition-colors">
                {skill.name}
              </h3>

              {/* Description */}
              <p className="mt-2 flex-1 text-sm leading-relaxed text-text-tertiary">
                {skill.description}
              </p>

              {/* CTA / Meta row */}
              {skill.available ? (
                <div className="mt-5 border-t border-surface-border/60 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <StarRating rating={skill.rating} />
                      <div className="flex items-center gap-1 text-xs text-text-tertiary">
                        <Download size={11} />
                        <span>{skill.downloads}</span>
                      </div>
                      <span className="text-[11px] text-text-tertiary/60 font-mono">
                        {skill.version}
                      </span>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs font-medium text-brand-400 group-hover:text-brand-300 transition-colors">
                      使ってみる
                      <ArrowRight
                        size={13}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </div>
              ) : (
                <div className="mt-5 flex items-center gap-4 border-t border-surface-border/60 pt-4">
                  <StarRating rating={skill.rating} />
                  <div className="flex items-center gap-1 text-xs text-text-tertiary">
                    <Download size={11} />
                    <span>{skill.downloads}</span>
                  </div>
                  <span className="text-[11px] text-text-tertiary/60 font-mono">
                    {skill.version}
                  </span>
                </div>
              )}
            </CardWrapper>
          );
        })}
      </div>

      {/* Supplementary note */}
      <div className="mt-10 flex items-start justify-center gap-2 text-center">
        <ExternalLink
          size={14}
          className="mt-0.5 flex-shrink-0 text-text-tertiary/60"
        />
        <p className="text-sm text-text-tertiary/80 leading-relaxed max-w-lg">
          現在は GitHub から無料で取得して使えます。
          ダウンロード後、Claude Code でセットアップを開始できます。
        </p>
      </div>
    </section>
  );
}
