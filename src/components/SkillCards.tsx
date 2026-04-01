import {
  Monitor,
  FileText,
  BookOpen,
  Code2,
  Star,
  Download,
  ArrowRight,
  ExternalLink,
  Clock,
  Presentation,
} from "lucide-react";

type SkillStatus = "free" | "paid" | "coming-soon";

interface SkillCard {
  name: string;
  description: string;
  category: string;
  categoryColor: string;
  icon: React.ReactNode;
  thumbnail?: string;
  rating: number;
  downloads: string;
  version: string;
  badge?: string;
  status: SkillStatus;
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
    thumbnail: "/images/workspace-bootstrap-thumb.png",
    rating: 0,
    downloads: "",
    version: "v2.0.0",
    badge: "第1弾",
    status: "free",
    priceBadge: "無料公開中",
    href: "/setup/workspace-bootstrap",
    available: true,
  },
  {
    name: "Claude Code Studio",
    description:
      "チャットでUIを作り、目の前で動かす。API不要のAI開発環境。空のReady画面からチャット指示でUIが生えていく。",
    category: "開発環境",
    categoryColor: "text-green-400 bg-green-400/10 border-green-400/20",
    icon: <Code2 size={20} />,
    thumbnail: "/images/claude-code-studio-thumb.png",
    rating: 0,
    downloads: "",
    version: "v1.0.0",
    badge: "NEW",
    status: "paid",
    priceBadge: "$0+",
    href: "/skills/claude-code-studio",
    available: true,
  },
  {
    name: "Kindle Publishing Suite",
    description:
      "アイデアからKindle出版まで、1コマンドで完走。全11スキルが企画・執筆・校正・表紙・EPUB・KDP登録を自動化。購入 → 解凍 → /book-run で完了。",
    category: "収益化",
    categoryColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    icon: <BookOpen size={20} />,
    thumbnail: "/images/kindle-publishing-suite-thumb.png",
    rating: 0,
    downloads: "",
    version: "v2.0.0",
    badge: "¥2,980",
    status: "paid",
    priceBadge: "有料",
    href: "/skills/kindle-publishing-suite",
    available: true,
  },
  {
    name: "Slide Animation Director",
    description:
      "AIでスライドを「作る」から「編集する」へ。台本からスライド生成＋自由配置編集＋PPTX出力まで一気通貫。",
    category: "コンテンツ",
    categoryColor: "text-rose-400 bg-rose-400/10 border-rose-400/20",
    icon: <Presentation size={20} />,
    thumbnail: "/images/slide-animation-director-thumb.png",
    rating: 0,
    downloads: "",
    version: "v1.0.0",
    status: "coming-soon" as SkillStatus,
    priceBadge: "準備中",
    available: false,
  },
  {
    name: "Seed Generator",
    description:
      "Udemy 講座の台本を AI で自動生成。講座の構成や話し方のトーンまで、対話で設定できる。",
    category: "コンテンツ",
    categoryColor: "text-violet-400 bg-violet-400/10 border-violet-400/20",
    icon: <FileText size={20} />,
    rating: 0,
    downloads: "",
    version: "v2.0.0",
    status: "coming-soon",
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
    rating: 0,
    downloads: "",
    version: "v1.5.0",
    status: "coming-soon",
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
          Skill Store
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
          あなたの作業を変える Skills
        </h2>
        <p className="mt-3 text-text-tertiary text-base md:text-lg">
          無料から有料まで。すべて Claude Code で動きます
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-5 md:grid-cols-3">
        {skills.map((skill) => {
          const CardWrapper = skill.available ? "a" : "div";
          const isExternal = skill.href?.startsWith("http");
          const linkProps = skill.available
            ? {
                href: skill.href,
                ...(isExternal
                  ? { target: "_blank" as const, rel: "noopener noreferrer" }
                  : {}),
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

              {/* Thumbnail */}
              {skill.thumbnail && (
                <div className="mb-4 -mx-6 -mt-6 overflow-hidden rounded-t-2xl">
                  <img src={skill.thumbnail} alt={skill.name} className="w-full h-48 object-contain bg-[#0a0a1a]" />
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
              {skill.status === "free" || skill.status === "paid" ? (
                <div className="mt-5 border-t border-surface-border/60 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {skill.rating > 0 && <StarRating rating={skill.rating} />}
                      {skill.downloads && (
                        <div className="flex items-center gap-1 text-xs text-text-tertiary">
                          <Download size={11} />
                          <span>{skill.downloads}</span>
                        </div>
                      )}
                      <span className="text-[11px] text-text-tertiary/60 font-mono">
                        {skill.version}
                      </span>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs font-medium text-brand-400 group-hover:text-brand-300 transition-colors">
                      {skill.status === "paid" ? "購入する" : isExternal ? "取得する" : "導入する"}
                      <ArrowRight
                        size={13}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </div>
              ) : (
                <div className="mt-5 border-t border-surface-border/60 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-[11px] text-text-tertiary/60 font-mono">
                        {skill.version}
                      </span>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs font-medium text-text-tertiary/50">
                      <Clock size={12} />
                      近日公開
                    </span>
                  </div>
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
