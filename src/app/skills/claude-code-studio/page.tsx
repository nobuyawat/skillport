import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Zap,
  Monitor,
  Eye,
  MousePointer,
  Terminal,
  Image,
  RefreshCw,
  Code2,
  Shield,
  Clock,
  Layers,
} from "lucide-react";

/* ─── Data ─── */

const stats = [
  { value: "即起動", label: "Ready状態からスタート" },
  { value: "リアルタイム", label: "変更が即座に反映" },
  { value: "API不要", label: "Claude Codeだけで完結" },
  { value: "操作可能", label: "見た目だけでなく動く" },
];

const demoSteps = [
  {
    step: "1",
    icon: <Terminal size={22} />,
    title: "「/studio」を実行する",
    description: "Claude Codeで /studio と入力するだけ。数秒でReady画面が起動します。",
    output: "ブラウザにReady画面が表示される",
    color: "text-green-400",
    border: "border-green-500/20",
  },
  {
    step: "2",
    icon: <Code2 size={22} />,
    title: "チャットでUIを指示する",
    description: "「フォームを作って」「ダッシュボードを作って」など、作りたいものを言葉で伝えます。",
    output: "Claude Codeがコードを生成し、自動で画面に反映",
    color: "text-cyan-400",
    border: "border-cyan-500/20",
  },
  {
    step: "3",
    icon: <Eye size={22} />,
    title: "リアルタイムでプレビューされる",
    description: "チャットで指示した内容が、右側のブラウザに即座に反映されます。HMR対応で、コード変更のたびに自動更新。",
    output: "UIがリアルタイムで構築されていく",
    color: "text-violet-400",
    border: "border-violet-500/20",
  },
  {
    step: "4",
    icon: <MousePointer size={22} />,
    title: "実際に操作できる",
    description: "表示されたUIは見た目だけではありません。ボタンをクリック、フォームに入力、画像をアップロード — すべて実際に動作します。",
    output: "操作した結果を見て、さらに修正指示を出せる",
    color: "text-amber-400",
    border: "border-amber-500/20",
  },
];

const features = [
  {
    icon: <Zap size={24} />,
    title: "API不要",
    subtitle: "Claude Code自体がエンジン",
    description: "外部APIキーの設定は不要です。Claude Code（Pro/Max/Team）があれば、そのまま動きます。追加コストなし。",
    color: "text-green-400",
    bgColor: "bg-green-600/20 border-green-500/30",
  },
  {
    icon: <MousePointer size={24} />,
    title: "見た目だけでなく「動く」",
    subtitle: "完全インタラクティブ",
    description: "生成されるUIはモックアップではありません。ボタン、入力欄、画像アップロード、状態遷移 — すべて実際に操作できます。",
    color: "text-cyan-400",
    bgColor: "bg-cyan-600/20 border-cyan-500/30",
  },
  {
    icon: <RefreshCw size={24} />,
    title: "HMR対応",
    subtitle: "コード変更が即座に反映",
    description: "Hot Module Replacementに対応。コードを修正するたびに、ブラウザが自動でリロードされます。「変えて」→ 即反映。",
    color: "text-violet-400",
    bgColor: "bg-violet-600/20 border-violet-500/30",
  },
];

const differences = [
  {
    label: "通常のAI開発",
    items: [
      "コードは生成されるが、動かない",
      "プレビューは静的な画像",
      "操作確認には別途デプロイが必要",
      "修正のたびにコピペ作業",
      "非エンジニアには難しい",
    ],
    bad: true,
  },
  {
    label: "Claude Code Studio",
    items: [
      "生成されたUIがその場で動く",
      "リアルタイムでプレビュー更新",
      "ブラウザ上で直接操作できる",
      "「ここ変えて」で即修正",
      "チャットだけで完結",
    ],
    bad: false,
  },
];

/* ─── Component ─── */

export default function ClaudeCodeStudioPage() {
  return (
    <div className="min-h-screen bg-surface-0 text-text-primary">
      {/* Header */}
      <header className="border-b border-surface-border/60 bg-surface-0/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center px-6">
          <a href="/" className="flex items-center gap-2 text-sm text-text-tertiary hover:text-brand-400 transition-colors">
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
              <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-semibold text-green-400">
                開発環境
              </span>
              <span className="rounded-full border border-brand-500/20 bg-brand-600/10 px-3 py-1 text-xs font-semibold text-brand-300">
                $0+
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl leading-tight">
              チャットからUIを生成し、
              <br />
              <span className="text-brand-400">その場で動かす開発環境。</span>
            </h1>
            <p className="mt-6 text-text-secondary/90 text-base md:text-lg leading-relaxed max-w-xl">
              空の「Ready」状態から、チャットで指示するだけでUIが立ち上がります。
              作られるのは見た目だけではなく、実際に操作できる画面です。
              API不要。Claude Code があれば、すぐに使えます。
            </p>
            <div className="mt-8">
              <a
                href="https://kmnworks.gumroad.com/l/kymdrs"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-600/20 transition-all hover:bg-brand-500 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                手に入れる
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img
              src="/images/claude-code-studio-thumb.png"
              alt="Claude Code Studio"
              className="w-64 md:w-80 rounded-2xl shadow-2xl shadow-brand-600/10"
            />
          </div>
        </div>
      </section>

      {/* ━━━ Stats Bar ━━━ */}
      <section className="border-y border-surface-border/40 bg-surface-1/50">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.value}>
                <p className="text-xl font-bold text-brand-400">{s.value}</p>
                <p className="text-xs text-text-tertiary mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ How It Works ━━━ */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-brand-400 mb-3">How It Works</p>
          <h2 className="text-2xl font-bold md:text-3xl">実際はこう動きます</h2>
          <p className="mt-3 text-text-tertiary max-w-lg mx-auto">
            「/studio」と入力すると、以下の4ステップで進みます
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {demoSteps.map((s) => (
            <div
              key={s.step}
              className={`rounded-2xl border ${s.border} bg-surface-1/80 p-6 transition-all hover:bg-surface-1`}
            >
              <div className="flex items-start gap-4">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-2 border border-surface-border ${s.color}`}>
                  {s.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-text-tertiary/40">STEP {s.step}</span>
                  </div>
                  <h3 className="text-sm font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-xs text-text-tertiary leading-relaxed">{s.description}</p>
                  <div className="mt-3 rounded-lg bg-brand-600/5 border border-brand-500/10 px-3 py-2">
                    <p className="text-[10px] text-brand-400/60 uppercase tracking-wider font-semibold">結果</p>
                    <p className="text-xs text-brand-300 mt-0.5">{s.output}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ━━━ Features ━━━ */}
      <section className="bg-surface-1/50 border-y border-surface-border/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-green-400 mb-3">Key Features</p>
            <h2 className="text-2xl font-bold md:text-3xl">なぜ「動く」のか</h2>
            <p className="mt-3 text-text-tertiary">この3つの技術が、チャットからの直接UI生成を実現しています</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-surface-border bg-surface-0/80 p-6">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${f.bgColor} ${f.color} mb-4`}>
                  {f.icon}
                </div>
                <h3 className="text-base font-semibold">{f.title}</h3>
                <p className={`text-xs ${f.color} mt-0.5 mb-3`}>{f.subtitle}</p>
                <p className="text-sm text-text-tertiary leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Comparison ━━━ */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-bold text-center mb-10">通常のAI開発との違い</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {differences.map((col) => (
            <div
              key={col.label}
              className={`rounded-2xl border p-6 ${
                col.bad ? "border-surface-border bg-surface-1/80" : "border-brand-500/30 bg-brand-600/5"
              }`}
            >
              <h3 className={`text-base font-semibold mb-4 ${col.bad ? "text-text-tertiary" : "text-brand-400"}`}>
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
                    <span className={col.bad ? "text-text-tertiary" : "text-text-primary"}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ━━━ Trust ━━━ */}
      <section className="bg-surface-1/50 border-y border-surface-border/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-bold text-center mb-10">こんな方におすすめ</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center gap-3 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600/20 border border-green-500/30 text-green-400">
                <Layers size={22} />
              </div>
              <h3 className="text-sm font-semibold">非エンジニア</h3>
              <p className="text-xs text-text-tertiary">コードを書かずに動くUIを作りたい方</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/20 border border-brand-500/30 text-brand-400">
                <Zap size={22} />
              </div>
              <h3 className="text-sm font-semibold">高速プロトタイピング</h3>
              <p className="text-xs text-text-tertiary">アイデアをすぐ形にしたい方</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-600/20 border border-cyan-500/30 text-cyan-400">
                <Monitor size={22} />
              </div>
              <h3 className="text-sm font-semibold">Claude Code ユーザー</h3>
              <p className="text-xs text-text-tertiary">開発体験をもっと直感的にしたい方</p>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ Final CTA ━━━ */}
      <section className="mx-auto max-w-5xl px-6 py-10 pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-brand-500/20 bg-gradient-to-br from-green-600/10 via-surface-1 to-brand-600/5 p-10 md:p-16 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-40 w-80 bg-green-500/10 blur-3xl rounded-full" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              チャットで作る。
              <br />
              その場で動かす。
            </h2>
            <p className="mt-4 text-text-tertiary text-base md:text-lg max-w-lg mx-auto">
              「/studio」を入力した瞬間から、新しい開発体験が始まります。
            </p>
            <div className="mt-8">
              <a
                href="https://kmnworks.gumroad.com/l/kymdrs"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-brand-600 px-10 py-4 text-base font-semibold text-white shadow-lg shadow-brand-600/20 transition-all hover:bg-brand-500 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                手に入れる
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
            <p className="mt-4 text-xs text-text-tertiary/60">
              $0+ — 好きな金額で取得できます
            </p>
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
