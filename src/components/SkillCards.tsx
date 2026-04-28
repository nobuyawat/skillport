import {
  Monitor,
  BookOpen,
  Code2,
  Star,
  Download,
  ArrowRight,
  ExternalLink,
  Clock,
  Rocket,
} from "lucide-react";

type SkillStatus = "free" | "paid" | "coming-soon";
type SkillEnv = "code" | "desktop" | "both";

const ENV_LABELS: Record<SkillEnv, { label: string; className: string }> = {
  code: {
    label: "Claude Code",
    className: "text-violet-300 bg-violet-500/10 border-violet-400/20",
  },
  desktop: {
    label: "Claude Desktop",
    className: "text-orange-300 bg-orange-500/10 border-orange-400/20",
  },
  both: {
    label: "Code / Desktop",
    className: "text-text-readable bg-surface-2/60 border-surface-border",
  },
};

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
  env: SkillEnv;
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
    env: "code",
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
    env: "code",
  },
  {
    name: "Claude AutoDeploy Suite",
    description:
      "Claude Desktop 無料プランだけで、LPやゲームを話しかけて作り、ClaudeがそのままWebに公開してくれる3パッケージ統合キット。公開後の改造も話しかけるだけ。",
    category: "自動デプロイ",
    categoryColor: "text-sky-400 bg-sky-400/10 border-sky-400/20",
    icon: <Rocket size={20} />,
    thumbnail: "/images/claude-autodeploy-suite-thumb.png",
    rating: 0,
    downloads: "",
    version: "v1.0.0",
    badge: "NEW",
    status: "paid",
    priceBadge: "有料",
    href: "/skills/claude-autodeploy-suite",
    available: true,
    env: "desktop",
  },
  {
    name: "Kindle Publishing Suite",
    description:
      "アイデアからKindle出版まで、1コマンドで完走。全11スキルが企画・執筆・校正・表紙・EPUB・KDP登録を自動化。KDP入力はDesktopチャット連携でコピペ一発。",
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
    env: "code",
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
        <p className="mt-3 text-text-readable text-base md:text-lg">
          無料から有料まで。Claude Code / Claude Desktop で動きます
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
                        : "text-text-readable bg-surface-3/50 border-surface-border"
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

              {/* Environment badge */}
              <div className="mt-2">
                <span
                  className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-medium tracking-wide ${ENV_LABELS[skill.env].className}`}
                >
                  {ENV_LABELS[skill.env].label}
                </span>
              </div>

              {/* Description */}
              <p className="mt-2 flex-1 text-sm leading-relaxed text-text-readable">
                {skill.description}
              </p>

              {/* CTA / Meta row */}
              {skill.status === "free" || skill.status === "paid" ? (
                <div className="mt-5 border-t border-surface-border/60 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {skill.rating > 0 && <StarRating rating={skill.rating} />}
                      {skill.downloads && (
                        <div className="flex items-center gap-1 text-xs text-text-readable">
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
          ダウンロード後、Claude Code または Claude Desktop でセットアップを開始できます。
        </p>
      </div>
    </section>
  );
}
