import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Zap,
  FileText,
  Palette,
  Upload,
  Sparkles,
  Shield,
  MessageSquare,
  Eye,
  Monitor,
  Lightbulb,
  BookOpen,
  ShieldCheck,
  HelpCircle,
  Rocket,
} from "lucide-react";

/* ─── Data ─── */

const skills = [
  { name: "/book-run", desc: "全工程ナビゲーター（司令塔）" },
  { name: "/book-seed", desc: "アイデア → 設計書" },
  { name: "/book-outline", desc: "章立て・構成設計" },
  { name: "/book-write", desc: "全章の本文生成" },
  { name: "/book-edit", desc: "通し校正・品質チェック" },
  { name: "/book-meta", desc: "タイトル・説明文・キーワード" },
  { name: "/book-cover", desc: "表紙制作ハブ" },
  { name: "/book-cover-analyze", desc: "表紙AI分析" },
  { name: "/book-cover-evaluate", desc: "表紙5項目評価" },
  { name: "/book-cover-title", desc: "タイトル最適化" },
  { name: "/book-publish", desc: "EPUB生成・KDPガイド" },
];

const demoSteps = [
  {
    step: "1",
    icon: <Lightbulb size={22} />,
    title: "テーマを入力する",
    command: "/book-seed",
    description: "「こんな本を書きたい」を箇条書きや話し言葉で入力。整理はAIがやります。",
    output: "本の設計書（brief.md）",
    color: "text-violet-400",
    border: "border-violet-500/20",
  },
  {
    step: "2",
    icon: <FileText size={22} />,
    title: "章構成が決まる",
    command: "/book-outline",
    description: "読者体験を考慮した章立てとページ配分を自動生成。順番や内容は確認して調整できます。",
    output: "章構成（outline.md）",
    color: "text-cyan-400",
    border: "border-cyan-500/20",
  },
  {
    step: "3",
    icon: <MessageSquare size={22} />,
    title: "本文が生成される",
    command: "/book-write",
    description: "章ごとに本文を生成。トーン・禁止事項・画像挿入位置も設計書に従って統一されます。",
    output: "全8章・約44,000文字",
    color: "text-green-400",
    border: "border-green-500/20",
  },
  {
    step: "4",
    icon: <Palette size={22} />,
    title: "表紙を作る",
    command: "/book-cover",
    description: "内蔵の表紙制作アプリでテンプレートを選び、プレビューを見ながらリアルタイムで調整。",
    output: "cover.jpg（KDP推奨サイズ）",
    color: "text-amber-400",
    border: "border-amber-500/20",
  },
  {
    step: "5",
    icon: <Eye size={22} />,
    title: "プレビューで確認する",
    command: "/book-publish",
    description: "画像入りのHTMLプレビューで完成形を確認。問題があればこの段階で修正できます。",
    output: "book.epub + KDPガイド一式",
    color: "text-rose-400",
    border: "border-rose-500/20",
  },
  {
    step: "6",
    icon: <Upload size={22} />,
    title: "KDPに出版する",
    command: "Claude in Chrome",
    description: "タイトル・説明文・キーワードを自動入力。カテゴリとファイルアップロードだけ手動で操作。",
    output: "Amazonに掲載（審査後）",
    color: "text-brand-400",
    border: "border-brand-500/20",
  },
];

const highlights = [
  {
    icon: <Palette size={24} />,
    title: "表紙生成",
    subtitle: "単体でも販売可能なクオリティ",
    description: "Kindle Cover Master JP が内蔵。テンプレート5種類、売れ筋構造の分析、AI最適化提案、5項目100点評価。表紙だけでもこのスキルを使う価値があります。",
    color: "text-amber-400",
    bgColor: "bg-amber-600/20 border-amber-500/30",
  },
  {
    icon: <Eye size={24} />,
    title: "プレビュー機能",
    subtitle: "出版前に完成形が見える",
    description: "画像込みのHTMLプレビューで、EPUBに変換する前に見た目を確認できます。配置崩れや文章の問題を事前に発見。修正してから出力するので失敗しません。",
    color: "text-cyan-400",
    bgColor: "bg-cyan-600/20 border-cyan-500/30",
  },
  {
    icon: <Monitor size={24} />,
    title: "KDPナビゲート",
    subtitle: "最後まで迷わない",
    description: "Claude in Chrome がKDP管理画面のフォームに自動入力。英語の設定画面もAIが日本語でガイド。手動操作が必要な箇所は事前に明示されます。",
    color: "text-brand-400",
    bgColor: "bg-brand-600/20 border-brand-500/30",
  },
];

const differences = [
  {
    label: "従来の方法",
    items: [
      "ツールを複数探して組み合わせる",
      "工程ごとに手順を調べる",
      "表紙は外注 or 別ツール",
      "KDP登録は手探り",
      "数週間〜数ヶ月かかる",
    ],
    bad: true,
  },
  {
    label: "Kindle Publishing Suite",
    items: [
      "11スキルが統合済み",
      "/book-run 1コマンドで全工程ナビ",
      "表紙制作アプリ内蔵",
      "KDP登録をClaude in Chromeが補助",
      "実証済みの工程（7時間で出版完了）",
    ],
    bad: false,
  },
];

/* ─── Component ─── */

export default function KindlePublishingSuitePage() {
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
              <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-400">
                収益化
              </span>
              <span className="rounded-full border border-brand-500/20 bg-brand-600/10 px-3 py-1 text-xs font-semibold text-brand-300">
                11 Skills 統合
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl leading-tight">
              通常数週間かかるKindle出版工程を、
              <br />
              <span className="text-brand-400">1日で完結。</span>
            </h1>
            <p className="mt-6 text-text-secondary/90 text-base md:text-lg leading-relaxed max-w-xl">
              実際に私は7時間で出版し、その後収益化まで到達しました。
              この仕組みで再現できるのは、アイデア整理から出版までの流れです。
              ただしこれは&ldquo;AI任せ&rdquo;ではなく、構成・調整まで含めて仕上げる設計です。
              専門知識がなくても、手順に沿って進めれば出版までの工程を再現できます。
            </p>
            <div className="mt-8">
              <a
                href="https://kmnworks.gumroad.com/l/trwpwt"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-600/20 transition-all hover:bg-brand-500 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                今すぐ手に入れる
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img
              src="/images/kindle-publishing-suite-thumb.png"
              alt="Kindle Publishing Suite"
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
              <p className="text-2xl font-bold text-brand-400">7時間</p>
              <p className="text-xs text-text-tertiary mt-1">構想から出版まで</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-brand-400">11</p>
              <p className="text-xs text-text-tertiary mt-1">統合スキル数</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-brand-400">44,406</p>
              <p className="text-xs text-text-tertiary mt-1">自動生成された文字数</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-brand-400">86%</p>
              <p className="text-xs text-text-tertiary mt-1">工程の自動化率</p>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ ② 実際はこう動きます ━━━ */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-brand-400 mb-3">How It Works</p>
          <h2 className="text-2xl font-bold md:text-3xl">実際はこう動きます</h2>
          <p className="mt-3 text-text-tertiary max-w-lg mx-auto">
            「/book-run」と入力すると、以下の6ステップをナビゲートします。
            各ステップで内容を確認しながら進められます。
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

      {/* ━━━ ④ なぜこの仕組みは完成できるのか ━━━ */}
      <section className="bg-surface-1/50 border-y border-surface-border/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-amber-400 mb-3">Key Features</p>
            <h2 className="text-2xl font-bold md:text-3xl">なぜこの仕組みは完成できるのか</h2>
            <p className="mt-3 text-text-tertiary">この3つの機能が、途中で止まらない設計を支えています</p>
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

      {/* ━━━ ⑤ AI本って大丈夫？ ━━━ */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-2xl border border-surface-border bg-surface-1/80 p-8 md:p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h2 className="text-xl font-bold">AI本って大丈夫？</h2>
              <p className="text-sm text-text-tertiary mt-1">よくある不安にお答えします</p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-400" />
              <div>
                <p className="text-sm font-semibold">量産AI本ではありません</p>
                <p className="text-xs text-text-tertiary mt-1 leading-relaxed">
                  このスキルは「生成して終わり」ではなく、各工程で内容を確認・修正しながら進める設計です。
                  章ごとにトーンを調整し、校正で品質を整え、プレビューで最終確認する。人間の判断が入る仕組みになっています。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-400" />
              <div>
                <p className="text-sm font-semibold">構成・調整まで含めた設計</p>
                <p className="text-xs text-text-tertiary mt-1 leading-relaxed">
                  AIが生成するのは「下書き」です。そこから文体の調整、事実確認、構成の見直しをナビゲーターが促します。
                  実際のテストでも、文体修正だけで2回の書き直しを行っています。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-400" />
              <div>
                <p className="text-sm font-semibold">自分の内容として仕上げられる</p>
                <p className="text-xs text-text-tertiary mt-1 leading-relaxed">
                  入力するのはあなた自身のアイデアと経験です。AIはそれを構造化し、文章にする作業を担当します。
                  最終的な内容の責任と著作権は、あなたにあります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ Comparison ━━━ */}
      <section className="bg-surface-1/50 border-y border-surface-border/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-bold text-center mb-10">通常の方法との違い</h2>
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
        </div>
      </section>

      {/* ━━━ 11 Skills ━━━ */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-bold text-center mb-3">含まれる 11 スキル</h2>
        <p className="text-text-tertiary text-center mb-10">すべてが連携して動く統合パッケージ</p>
        <div className="grid gap-3 md:grid-cols-2">
          {skills.map((s) => (
            <div key={s.name} className="flex items-center gap-4 rounded-xl border border-surface-border bg-surface-1/80 px-5 py-3.5">
              <code className="text-sm font-mono text-brand-400 shrink-0">{s.name}</code>
              <span className="text-sm text-text-tertiary">{s.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ━━━ Trust ━━━ */}
      <section className="bg-surface-1/50 border-y border-surface-border/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-bold text-center mb-10">安心して使える理由</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center gap-3 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400">
                <Shield size={22} />
              </div>
              <h3 className="text-sm font-semibold">実証済み</h3>
              <p className="text-xs text-text-tertiary">開発者自身が7時間で1冊出版。KDPで販売中</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/20 border border-brand-500/30 text-brand-400">
                <Zap size={22} />
              </div>
              <h3 className="text-sm font-semibold">非エンジニア向け</h3>
              <p className="text-xs text-text-tertiary">プログラミング不要。対話するだけで完結</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-600/20 border border-amber-500/30 text-amber-400">
                <Clock size={22} />
              </div>
              <h3 className="text-sm font-semibold">継続的に改善</h3>
              <p className="text-xs text-text-tertiary">実運用テストで5点の改善を反映済み（v2）</p>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ ⑥ 無料で始める導線 ━━━ */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-2xl border border-surface-border bg-surface-1/80 p-8 md:p-10 text-center">
          <p className="text-sm text-text-tertiary mb-2">まずは無料で試したい方へ</p>
          <h3 className="text-xl font-bold">Workspace Bootstrap で体験する</h3>
          <p className="mt-3 text-sm text-text-tertiary max-w-md mx-auto">
            SkillPort の無料スキルで Claude Code の操作感を体験できます。
            有料スキルと同じ仕組みで動くので、導入の流れがわかります。
          </p>
          <div className="mt-6">
            <a
              href="/setup/workspace-bootstrap"
              className="inline-flex items-center gap-2 rounded-xl border border-brand-500/30 bg-brand-600/10 px-8 py-3 text-sm font-semibold text-brand-400 transition-all hover:bg-brand-600/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Rocket size={16} />
              無料で始める
            </a>
          </div>
        </div>
      </section>

      {/* ━━━ ⑦ Final CTA ━━━ */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-brand-500/20 bg-gradient-to-br from-brand-600/10 via-surface-1 to-amber-600/5 p-10 md:p-16 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-40 w-80 bg-brand-500/10 blur-3xl rounded-full" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              あなたの知識を、
              <br />
              商品にしませんか？
            </h2>
            <p className="mt-4 text-text-tertiary text-base md:text-lg max-w-lg mx-auto">
              アイデアさえあれば、あとは Claude Code が一緒に作ってくれます。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://kmnworks.gumroad.com/l/trwpwt"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-brand-600 px-10 py-4 text-base font-semibold text-white shadow-lg shadow-brand-600/20 transition-all hover:bg-brand-500 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                今すぐ手に入れる
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="/setup/workspace-bootstrap"
                className="inline-flex items-center gap-2 rounded-xl border border-surface-border bg-surface-2/50 px-8 py-4 text-sm font-semibold text-text-primary transition-all hover:border-brand-500/30 hover:bg-surface-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Rocket size={16} />
                無料で始める
              </a>
            </div>
            <p className="mt-4 text-xs text-text-tertiary/60">
              Gumroad で安全に決済できます
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
