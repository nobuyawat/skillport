import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Zap,
  Sparkles,
  Shield,
  MessageSquare,
  Rocket,
  Gamepad2,
  Layout,
  Wrench,
  Volume2,
  CircleDollarSign,
} from "lucide-react";

/* ─── Data ─── */

const packages = [
  {
    name: "01-mcp-auto-install",
    desc: "Claudeがパソコンのファイルを操作する Filesystem MCP と、ブラウザを操作する Playwright MCP の2つのセッティングを、Claude自身が最後までサポートしてくれる",
    icon: <Wrench size={18} />,
    thumb: "/images/mcp-auto-install-thumb.png",
  },
  {
    name: "02-claude-auto-lp-deploy",
    desc: "話しかけるだけでカフェLPを作り、ClaudeがそのままWebに公開してくれる",
    icon: <Layout size={18} />,
    thumb: "/images/claude-auto-lp-deploy-thumb.png",
  },
  {
    name: "03-claude-auto-game-deploy",
    desc: "3種のゲームから選んで難易度を決めるだけ。ClaudeがそのままWebに公開してくれる",
    icon: <Gamepad2 size={18} />,
    thumb: "/images/claude-auto-game-deploy-thumb.png",
  },
];

const demoSteps = [
  {
    step: "1",
    icon: <Wrench size={22} />,
    title: "Claudeに「できること」を増やす",
    command: "mcp-auto-install",
    description: "起動プロンプトをClaude Desktopに貼るだけ。Filesystem MCP（ファイル操作）と Playwright MCP（ブラウザ操作）の設定ファイル編集を、Claude自身が最後までサポートしてくれます。",
    output: "Filesystem MCP + Playwright MCP が有効化され、Claudeが操作可能に",
    color: "text-cyan-400",
    border: "border-cyan-500/20",
  },
  {
    step: "2",
    icon: <MessageSquare size={22} />,
    title: "LPの質問に答える",
    command: "lp-deploy",
    description: "店舗テーマ・色味・コピー方向など5つの質問に答えるだけ。Claudeが内容に合わせたページを自動で組み立ててくれます。",
    output: "1枚完結のカフェLPページ",
    color: "text-violet-400",
    border: "border-violet-500/20",
  },
  {
    step: "3",
    icon: <Rocket size={22} />,
    title: "LPがWebに公開される",
    command: "自動公開",
    description: "Claudeがブラウザを自動操作して、生成したLPを無料の公開先（Netlify）にアップロード。あなたは画面を見ているだけで、すぐに使えるURLが返ってきます。",
    output: "公開URL（誰でもアクセスできるWebページ）",
    color: "text-green-400",
    border: "border-green-500/20",
  },
  {
    step: "4",
    icon: <Gamepad2 size={22} />,
    title: "ゲームを選ぶ",
    command: "game-deploy",
    description: "シューター（Xevious風）／ラリー（ラリーX風）／テトリスの3種から選択。3種×3難易度で9バリエーション。",
    output: "選択したゲームの完成品ファイル",
    color: "text-amber-400",
    border: "border-amber-500/20",
  },
  {
    step: "5",
    icon: <Volume2 size={22} />,
    title: "効果音つきでWebに公開",
    command: "自動公開",
    description: "効果音はブラウザ標準機能で自動生成、外部の音楽ファイル不要。Claudeが完成したゲームをそのままWebに公開してくれます。",
    output: "効果音つきゲームの公開URL",
    color: "text-rose-400",
    border: "border-rose-500/20",
  },
  {
    step: "6",
    icon: <Sparkles size={22} />,
    title: "自然言語で改造",
    command: "再デプロイ",
    description: "「自車を青に」「敵を倍に」「スマホでも操作可に」など、要望を話しかけるだけでClaudeが完成品を編集し、Webに再公開してくれます。",
    output: "改造済みの新URL",
    color: "text-brand-400",
    border: "border-brand-500/20",
  },
];

const highlights = [
  {
    icon: <Wrench size={24} />,
    title: "セットアップ伴走",
    subtitle: "面倒な初期設定をClaudeに任せる",
    description: "従来はメモ帳で設定ファイルを手書きし、特殊な記号付きで設定を編集する必要がありました。本キットではその全工程を Claude 自身が最後までサポートしてくれます。",
    color: "text-cyan-400",
    bgColor: "bg-cyan-600/20 border-cyan-500/30",
  },
  {
    icon: <MessageSquare size={24} />,
    title: "自然言語デプロイ",
    subtitle: "対話だけで公開まで",
    description: "コードを書かない・コマンドを覚えない。Claude Desktop に話しかけるだけで完成品が生成され、ClaudeがそのままWebに公開してくれます。あなたが操作するのはチャットだけです。",
    color: "text-violet-400",
    bgColor: "bg-violet-600/20 border-violet-500/30",
  },
  {
    icon: <Sparkles size={24} />,
    title: "改造ループ",
    subtitle: "公開後も自由に",
    description: "公開して終わりではありません。「色を変えて」「機能を足して」など話しかけるだけで Claude が完成品を直接編集し、すぐにWebへ再公開。何度でもやり直せます。",
    color: "text-rose-400",
    bgColor: "bg-rose-600/20 border-rose-500/30",
  },
];

const differences = [
  {
    label: "従来の方法",
    items: [
      "bat ファイルを手書き、JSON を手編集",
      "LPもゲームもゼロから自分で書く",
      "Web公開には専用ツールや手動アップロードが必要",
      "Claude 有料プラン前提",
      "改造はゼロから書き直し",
    ],
    bad: true,
  },
  {
    label: "Claude AutoDeploy Suite",
    items: [
      "環境構築は Claude が最後までサポート",
      "質問に答えるだけ／ゲーム選ぶだけで生成",
      "Claudeがブラウザを操作して自動でWeb公開",
      "Claude Desktop 無料プランで動作",
      "「色変えて」で部分修正 → 即再デプロイ",
    ],
    bad: false,
  },
];

/* ─── Component ─── */

export default function ClaudeAutoDeploySuitePage() {
  return (
    <div className="min-h-screen bg-surface-0 text-text-primary">
      {/* Header */}
      <header className="border-b border-surface-border/60 bg-surface-0/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center px-6">
          <a
            href="/"
            className="flex items-center gap-2 text-sm text-text-secondary hover:text-brand-400 transition-colors"
          >
            <ArrowLeft size={16} />
            SkillPort に戻る
          </a>
        </div>
      </header>

      {/* ━━━ Hero ━━━ */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-14">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <div className="mb-5 flex items-center gap-3">
              <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-400">
                自動デプロイ
              </span>
              <span className="rounded-full border border-brand-500/20 bg-brand-600/10 px-3 py-1 text-xs font-semibold text-brand-300">
                3 Packages 統合
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl leading-tight">
              無料プランだけで、
              <br />
              <span className="text-brand-400">Webに公開するまで完結。</span>
            </h1>
            <p className="mt-6 text-text-readable/90 text-base md:text-lg leading-relaxed max-w-xl">
              初期設定 → LP制作 → ゲーム制作と公開の全工程を、Claude Desktop に
              話しかけるだけで完結させる3パッケージ統合キット。
              ClaudeがそのままWebに公開してくれて、公開後の改造も
              「色を変えて」と話しかけるだけで反映されます。
            </p>
            <div className="mt-8">
              <a
                href="https://kmnworks.gumroad.com/l/caoozr"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-600/20 transition-all hover:bg-brand-500 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                ¥1,980 で手に入れる
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img
              src="/images/claude-autodeploy-suite-thumb.png"
              alt="Claude AutoDeploy Suite"
              className="w-64 md:w-80 rounded-2xl shadow-2xl shadow-brand-600/10"
            />
          </div>
        </div>
      </section>

      {/* ━━━ Proof Bar ━━━ */}
      <section className="border-y border-surface-border/40 bg-surface-1/50">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-brand-400">3</p>
              <p className="text-xs text-text-secondary mt-1">統合パッケージ数</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-brand-400">9</p>
              <p className="text-xs text-text-secondary mt-1">ゲーム×難易度バリエーション</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-brand-400">¥0</p>
              <p className="text-xs text-text-secondary mt-1">月額費用（無料プラン）</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-brand-400">∞</p>
              <p className="text-xs text-text-secondary mt-1">自然言語改造回数</p>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ How It Works ━━━ */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-brand-400 mb-3">How It Works</p>
          <h2 className="text-2xl font-bold md:text-3xl">実際はこう動きます</h2>
          <p className="mt-3 text-text-secondary max-w-lg mx-auto">
            起動プロンプトを貼るだけで、Claudeが工程を順に進めてくれます。
            あなたが答えるのはゲーム選択・難易度・要望だけ。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {demoSteps.map((s) => (
            <div
              key={s.step}
              className={`rounded-2xl border ${s.border} bg-surface-1/80 p-6 transition-all hover:bg-surface-1`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-2 border border-surface-border ${s.color}`}
                >
                  {s.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-text-tertiary/40">STEP {s.step}</span>
                    <code className={`text-xs font-mono ${s.color}`}>{s.command}</code>
                  </div>
                  <h3 className="text-sm font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-xs text-text-secondary leading-relaxed">{s.description}</p>
                  <div className="mt-3 rounded-lg bg-brand-600/5 border border-brand-500/10 px-3 py-2">
                    <p className="text-[10px] text-brand-400/60 uppercase tracking-wider font-semibold">出力</p>
                    <p className="text-xs text-brand-300 mt-0.5">{s.output}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ━━━ Key Features ━━━ */}
      <section className="bg-surface-1/50 border-y border-surface-border/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-amber-400 mb-3">Key Features</p>
            <h2 className="text-2xl font-bold md:text-3xl">なぜ自然言語だけで完結するのか</h2>
            <p className="mt-3 text-text-secondary">この3つの仕組みが、コードを書かない開発を支えています</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-2xl border border-surface-border bg-surface-0/80 p-6"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl border ${h.bgColor} ${h.color} mb-4`}
                >
                  {h.icon}
                </div>
                <h3 className="text-base font-semibold">{h.title}</h3>
                <p className={`text-xs ${h.color} mt-0.5 mb-3`}>{h.subtitle}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Comparison ━━━ */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-bold text-center mb-10">通常の方法との違い</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {differences.map((col) => (
            <div
              key={col.label}
              className={`rounded-2xl border p-6 ${
                col.bad ? "border-surface-border bg-surface-1/80" : "border-brand-500/30 bg-brand-600/5"
              }`}
            >
              <h3
                className={`text-base font-semibold mb-4 ${
                  col.bad ? "text-text-readable" : "text-brand-400"
                }`}
              >
                {col.label}
              </h3>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    {col.bad ? (
                      <span className="mt-0.5 text-text-tertiary/40">—</span>
                    ) : (
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-400" />
                    )}
                    <span className={col.bad ? "text-text-readable" : "text-text-primary"}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ━━━ 3 Packages ━━━ */}
      <section className="bg-surface-1/50 border-y border-surface-border/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-bold text-center mb-3">同梱される 3 パッケージ</h2>
          <p className="text-text-secondary text-center mb-10">独立して使えて、組み合わせると一気通貫</p>
          <div className="grid md:grid-cols-3 gap-5">
            {packages.map((p) => (
              <div
                key={p.name}
                className="flex flex-col rounded-2xl border border-surface-border bg-surface-0/80 overflow-hidden"
              >
                <div className="overflow-hidden bg-[#0a0a1a]">
                  <img src={p.thumb} alt={p.name} className="w-full h-48 object-contain" />
                </div>
                <div className="flex flex-col gap-3 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-600/10 border border-brand-500/20 text-brand-400">
                      {p.icon}
                    </div>
                    <code className="text-xs font-mono text-brand-400 truncate">{p.name}</code>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Trust ━━━ */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-bold text-center mb-10">安心して使える理由</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center gap-3 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400">
              <Shield size={22} />
            </div>
            <h3 className="text-sm font-semibold">実証済み</h3>
            <p className="text-xs text-text-readable">Mac / Windows 両対応。複数PCで動作確認</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/20 border border-brand-500/30 text-brand-400">
              <Zap size={22} />
            </div>
            <h3 className="text-sm font-semibold">無料プラン対応</h3>
            <p className="text-xs text-text-readable">Claude Desktop 有料プラン不要で全工程動作</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-600/20 border border-amber-500/30 text-amber-400">
              <Volume2 size={22} />
            </div>
            <h3 className="text-sm font-semibold">外部依存ゼロ</h3>
            <p className="text-xs text-text-readable">効果音は Web Audio API で内蔵、単一HTMLで完結</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-600/20 border border-cyan-500/30 text-cyan-400">
              <CircleDollarSign size={22} />
            </div>
            <h3 className="text-sm font-semibold">買い切り</h3>
            <p className="text-xs text-text-readable">¥1,980 一度払うだけ、サブスクリプションなし</p>
          </div>
        </div>
      </section>

      {/* ━━━ Final CTA ━━━ */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-brand-500/20 bg-gradient-to-br from-brand-600/10 via-surface-1 to-sky-600/5 p-10 md:p-16 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-40 w-80 bg-brand-500/10 blur-3xl rounded-full" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              環境構築から公開まで、
              <br />
              迷わない。
            </h2>
            <p className="mt-4 text-text-secondary text-base md:text-lg max-w-lg mx-auto">
              話しかけるだけで、Webに作品が出ます。
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="https://kmnworks.gumroad.com/l/caoozr"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-brand-600 px-10 py-4 text-base font-semibold text-white shadow-lg shadow-brand-600/20 transition-all hover:bg-brand-500 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                ¥1,980 で手に入れる
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
            <p className="mt-4 text-xs text-text-tertiary/60">Gumroad で安全に決済できます</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-surface-border/40 py-8">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-xs text-text-tertiary/50">
            © 2026 SkillPort. Built for the Claude Code community.
          </p>
        </div>
      </footer>
    </div>
  );
}
