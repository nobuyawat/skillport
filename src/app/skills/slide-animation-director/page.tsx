import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Zap,
  FileText,
  Presentation,
  Image,
  Download,
  Sparkles,
  Shield,
  Eye,
  Monitor,
  Lightbulb,
  MousePointerClick,
  Layers,
  Rocket,
} from "lucide-react";

/* ─── Data ─── */

const demoSteps = [
  {
    step: "1",
    icon: <FileText size={22} />,
    title: "原稿を入力する",
    command: "/slide-animation-director",
    description: "台本テキストを貼り付け、またはプロジェクト内の台本ファイルを指定。枚数とモード（compact / balanced / detailed）を選択。",
    output: "スライド構成データ（JSON）",
    color: "text-violet-400",
    border: "border-violet-500/20",
  },
  {
    step: "2",
    icon: <Sparkles size={22} />,
    title: "スライドが自動生成される",
    command: "AI分析 + 生成",
    description: "台本をビジュアル判定し、最適なスライドタイプ（icon-grid, comparison, flow等）を自動選択。アニメーション付きで生成。",
    output: "アニメーション付きHTMLスライド",
    color: "text-cyan-400",
    border: "border-cyan-500/20",
  },
  {
    step: "3",
    icon: <MousePointerClick size={22} />,
    title: "プレビューで編集する",
    command: "ブラウザ操作",
    description: "HTMLプレビューでスライドを確認。画像枠をドラッグで作成し、四角・角丸・円の形状で自由配置。前面/背面の制御も可能。",
    output: "編集済みスライド + 画像配置",
    color: "text-green-400",
    border: "border-green-500/20",
  },
  {
    step: "4",
    icon: <Download size={22} />,
    title: "PPTXを出力する",
    command: "PPTX出力ボタン",
    description: "ワンクリックでPowerPointファイルを生成。テキストの色分け、円形・角丸画像のCanvas事前クロップによる高精度な形状再現。",
    output: "slides.pptx（即プレゼン可能）",
    color: "text-rose-400",
    border: "border-rose-500/20",
  },
];

const highlights = [
  {
    icon: <Layers size={24} />,
    title: "自由配置エディタ",
    subtitle: "テンプレに縛られない",
    description: "ドラッグで画像枠を作成し、四角・角丸・円の形状を選択。サイズ変更、移動、前面/背面の制御まで直感操作。テンプレ固定ではなく、思考ベースで配置できるUI。",
    color: "text-rose-400",
    bgColor: "bg-rose-600/20 border-rose-500/30",
  },
  {
    icon: <Eye size={24} />,
    title: "プレビュー ≒ 出力",
    subtitle: "見たままがPPTXになる",
    description: "HTMLプレビューとPPTX出力の見た目を高精度で一致させる設計。Canvas APIで円形・角丸画像を事前クロップし、pptxgenjsの不安定な丸め処理を回避。",
    color: "text-cyan-400",
    bgColor: "bg-cyan-600/20 border-cyan-500/30",
  },
  {
    icon: <Sparkles size={24} />,
    title: "ビジュアル判定AI",
    subtitle: "台本から最適なスライドタイプを選択",
    description: "台本の内容を分析し、statement・icon-grid・comparison・flow・visual等13種類のスライドタイプから最適なものを自動選択。テキスト30%・ビジュアル40%・実演連携30%の構成比を目指す。",
    color: "text-brand-400",
    bgColor: "bg-brand-600/20 border-brand-500/30",
  },
];

const differences = [
  {
    label: "従来のスライド作成",
    items: [
      "PowerPointを手動で1枚ずつ作る",
      "テンプレートに縛られる",
      "AI生成しても編集できない",
      "画像配置は固定レイアウトのみ",
      "プレビューと出力が一致しない",
    ],
    bad: true,
  },
  {
    label: "Slide Animation Director",
    items: [
      "台本から一括自動生成",
      "13種類のスライドタイプを自動選択",
      "生成後も自由に画像配置・編集",
      "ドラッグで任意の位置・形状に配置",
      "HTMLプレビュー ≒ PPTX出力",
    ],
    bad: false,
  },
];

const features = [
  { name: "台本 → スライド生成", desc: "ビジュアル判定AIで最適タイプを自動選択" },
  { name: "アニメーション付きプレビュー", desc: "fade / slide / scale / pop のスタガー表示" },
  { name: "画像枠ドラッグ作成", desc: "四角・角丸・円の3形状に対応" },
  { name: "画像アップロード", desc: "cover / contain / fill のfit調整" },
  { name: "前面/背面制御", desc: "重なり順をワンクリックで変更" },
  { name: "JSON保存", desc: "画像枠情報をデータとしてエクスポート" },
  { name: "PPTX出力", desc: "テキスト色分け・Canvas形状クロップ対応" },
  { name: "枚数 × モード指定", desc: "compact / balanced / detailed の3モード" },
];

/* ─── Component ─── */

export default function SlideAnimationDirectorPage() {
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

      {/* ━━━ ① Hero ━━━ */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-14">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <div className="mb-5 flex items-center gap-3">
              <span className="rounded-full border border-rose-400/20 bg-rose-400/10 px-3 py-1 text-xs font-semibold text-rose-400">
                コンテンツ
              </span>
              <span className="rounded-full border border-brand-500/20 bg-brand-600/10 px-3 py-1 text-xs font-semibold text-brand-300">
                Coming Soon
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl leading-tight">
              台本からスライドまで、
              <br />
              <span className="text-brand-400">1コマンドで完結。</span>
            </h1>
            <p className="mt-6 text-text-secondary/90 text-base md:text-lg leading-relaxed max-w-xl">
              AIスライド生成＋自由配置編集＋PPTX出力までを一体化した
              次世代スライド制作ツール。
              生成して終わりではなく、プレビュー上で画像を自由に配置・編集し、
              そのままPowerPointファイルとして出力できます。
            </p>
            <div className="mt-8">
              <span className="group inline-flex items-center justify-center gap-2 rounded-xl border border-rose-500/30 bg-rose-600/10 px-8 py-4 text-base font-semibold text-rose-400">
                <Clock size={16} />
                Coming Soon
              </span>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img
              src="/images/slide-animation-director-thumb.png"
              alt="Slide Animation Director"
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
              <p className="text-2xl font-bold text-brand-400">13</p>
              <p className="text-xs text-text-tertiary mt-1">スライドタイプ</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-brand-400">3</p>
              <p className="text-xs text-text-tertiary mt-1">生成モード</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-brand-400">3</p>
              <p className="text-xs text-text-tertiary mt-1">画像形状（四角・角丸・円）</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-brand-400">1</p>
              <p className="text-xs text-text-tertiary mt-1">コマンドで完結</p>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ ② 問題提起 ━━━ */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-2xl border border-surface-border bg-surface-1/80 p-8 md:p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-600/20 border border-rose-500/30 text-rose-400">
              <Presentation size={22} />
            </div>
            <div>
              <h2 className="text-xl font-bold">スライド作成の3つの壁</h2>
              <p className="text-sm text-text-tertiary mt-1">多くの人が直面する課題</p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-rose-400" />
              <div>
                <p className="text-sm font-semibold">スライド作成が面倒</p>
                <p className="text-xs text-text-tertiary mt-1 leading-relaxed">
                  1枚ずつレイアウトを考え、テキストを配置し、画像を調整する。
                  講座やプレゼンのたびにこの作業を繰り返すのは非効率です。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-rose-400" />
              <div>
                <p className="text-sm font-semibold">テンプレートに縛られる</p>
                <p className="text-xs text-text-tertiary mt-1 leading-relaxed">
                  既存のスライドツールはテンプレート前提。
                  自分の伝えたい内容に合わせたレイアウトを自由に組めない。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-rose-400" />
              <div>
                <p className="text-sm font-semibold">AI生成はできるが編集ができない</p>
                <p className="text-xs text-text-tertiary mt-1 leading-relaxed">
                  AIでスライドを生成できるツールはあるが、
                  生成後の編集・画像配置・微調整ができない。生成して終わり。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ ③ 使い方 ━━━ */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-brand-400 mb-3">How It Works</p>
          <h2 className="text-2xl font-bold md:text-3xl">4ステップで完成</h2>
          <p className="mt-3 text-text-tertiary max-w-lg mx-auto">
            「/slide-animation-director」と入力するだけ。
            原稿の入力からPPTX出力まで、対話形式で進みます。
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
                    <code className={`text-xs font-mono ${s.color}`}>{s.command}</code>
                  </div>
                  <h3 className="text-sm font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-xs text-text-tertiary leading-relaxed">{s.description}</p>
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

      {/* ━━━ ④ Key Features ━━━ */}
      <section className="bg-surface-1/50 border-y border-surface-border/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-rose-400 mb-3">Key Features</p>
            <h2 className="text-2xl font-bold md:text-3xl">生成 + 編集 + 出力を一体化</h2>
            <p className="mt-3 text-text-tertiary">この3つの機能が、スライド制作を変えます</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <div key={h.title} className="rounded-2xl border border-surface-border bg-surface-0/80 p-6">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${h.bgColor} ${h.color} mb-4`}>
                  {h.icon}
                </div>
                <h3 className="text-base font-semibold">{h.title}</h3>
                <p className={`text-xs ${h.color} mt-0.5 mb-3`}>{h.subtitle}</p>
                <p className="text-sm text-text-tertiary leading-relaxed">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Comparison ━━━ */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-bold text-center mb-10">従来の方法との違い</h2>
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

      {/* ━━━ Features List ━━━ */}
      <section className="bg-surface-1/50 border-y border-surface-border/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-bold text-center mb-3">搭載機能</h2>
          <p className="text-text-tertiary text-center mb-10">1コマンドに統合された機能群</p>
          <div className="grid gap-3 md:grid-cols-2">
            {features.map((f) => (
              <div key={f.name} className="flex items-center gap-4 rounded-xl border border-surface-border bg-surface-0/80 px-5 py-3.5">
                <span className="text-sm font-semibold text-brand-400 shrink-0">{f.name}</span>
                <span className="text-sm text-text-tertiary">{f.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ ⑥ 今後の展開 ━━━ */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-bold text-center mb-10">今後の展開</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center gap-3 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-600/20 border border-rose-500/30 text-rose-400">
              <Monitor size={22} />
            </div>
            <h3 className="text-sm font-semibold">レンダリング強化</h3>
            <p className="text-xs text-text-tertiary">HTMLプレビューとPPTX出力の完全一致を目指す</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/20 border border-brand-500/30 text-brand-400">
              <Zap size={22} />
            </div>
            <h3 className="text-sm font-semibold">テンプレート拡張</h3>
            <p className="text-xs text-text-tertiary">スライドタイプの追加とカスタムテーマ対応</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-600/20 border border-cyan-500/30 text-cyan-400">
              <Sparkles size={22} />
            </div>
            <h3 className="text-sm font-semibold">アニメーション強化</h3>
            <p className="text-xs text-text-tertiary">複雑なビルドアニメーションとトランジション</p>
          </div>
        </div>
      </section>

      {/* ━━━ ⑦ Final CTA ━━━ */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-brand-500/20 bg-gradient-to-br from-brand-600/10 via-surface-1 to-rose-600/5 p-10 md:p-16 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-40 w-80 bg-brand-500/10 blur-3xl rounded-full" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              スライド制作を、
              <br />
              もっとシンプルに。
            </h2>
            <p className="mt-4 text-text-tertiary text-base md:text-lg max-w-lg mx-auto">
              台本さえあれば、あとはAIが最適なスライドを提案し、
              あなたが自由に仕上げる。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <span className="group inline-flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-600/10 px-10 py-4 text-base font-semibold text-rose-400">
                <Clock size={16} />
                Coming Soon
              </span>
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-xl border border-surface-border bg-surface-2/50 px-8 py-4 text-sm font-semibold text-text-primary transition-all hover:border-brand-500/30 hover:bg-surface-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Rocket size={16} />
                他のスキルを見る
              </a>
            </div>
            <p className="mt-4 text-xs text-text-tertiary/60">
              公開までお待ちください
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
