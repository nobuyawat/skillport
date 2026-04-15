import {
  ArrowLeft,
  Terminal,
  Chrome,
  ShoppingBag,
  Download,
  CreditCard,
  MessageSquare,
  Zap,
  ExternalLink,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Terminal size={24} />,
    title: "Claude Code を開く",
    description:
      "ターミナルで claude を起動してください。Claude Code がまだインストールされていない場合は、Anthropic の公式サイトからセットアップできます。",
    note: null,
  },
  {
    number: "02",
    icon: <Chrome size={24} />,
    title: "Claude in Chrome を接続する（推奨）",
    description:
      "ブラウザ操作を伴う Skill を使う場合は、Claude in Chrome 拡張機能をインストールして Claude Code と接続してください。",
    note: "一部の Skill（Workspace Bootstrap など）は Claude in Chrome が必要です。",
  },
  {
    number: "03",
    icon: <ShoppingBag size={24} />,
    title: "Skill を選ぶ",
    description:
      "SkillPort のトップページから、使いたい Skill を選びます。無料・有料・準備中のステータスがカードに表示されています。",
    note: null,
  },
  {
    number: "04",
    icon: <Download size={24} />,
    title: "無料 Skill を取得する",
    description:
      "無料の Skill は GitHub リポジトリから取得できます。カードの「導入する」ボタンをクリックすると、導入手順のページに移動します。",
    note: null,
  },
  {
    number: "05",
    icon: <CreditCard size={24} />,
    title: "有料 Skill を購入する",
    description:
      "有料の Skill は Gumroad で購入できます。購入後、ダウンロードしたファイルを Claude Code の所定フォルダに配置します。",
    note: "Gumroad ではクレジットカードで安全に決済できます。",
  },
  {
    number: "06",
    icon: <MessageSquare size={24} />,
    title: "Claude Code に導入文を送る",
    description:
      "各 Skill の導入ページに表示されるテキストをコピーして、Claude Code のチャットに貼り付けます。Claude Code がファイルの取得・配置を自動で行います。",
    note: null,
  },
  {
    number: "07",
    icon: <Zap size={24} />,
    title: "セットアップコマンドを実行する",
    description:
      "導入が完了したら、各 Skill のセットアップコマンド（例: /workspace-bootstrap-setup）を実行します。対話形式で設定が進むので、質問に答えるだけで完了します。",
    note: null,
  },
];

export default function StartPage() {
  return (
    <div className="min-h-screen bg-surface-0 text-text-primary">
      {/* Header */}
      <header className="border-b border-surface-border/60 bg-surface-0/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-4xl items-center px-6">
          <a
            href="/"
            className="flex items-center gap-2 text-sm text-text-readable hover:text-brand-400 transition-colors"
          >
            <ArrowLeft size={16} />
            SkillPort に戻る
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-12 text-center">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-600/10 px-4 py-1.5 text-sm text-brand-300">
            はじめての方へ
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Claude Code で
          <br />
          <span className="text-brand-400">Skill を導入する流れ</span>
        </h1>
        <p className="mt-4 text-text-readable text-base md:text-lg max-w-xl mx-auto">
          SkillPort の Skill は、すべて Claude Code から導入できます。
          <br />
          非エンジニアでも、以下の手順で迷わず始められます。
        </p>
      </section>

      {/* Requirement Box */}
      <section className="mx-auto max-w-4xl px-6 pb-12">
        <div className="rounded-2xl border border-surface-border bg-surface-1/80 p-6 md:p-8">
          <h2 className="text-lg font-semibold mb-4">必要なもの</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-600/20 border border-brand-500/30 text-brand-400">
                <Terminal size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold">Claude Code</p>
                <p className="text-xs text-text-readable mt-0.5">
                  Pro / Max / Team プラン
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-600/20 border border-cyan-500/30 text-cyan-400">
                <Chrome size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold">
                  Claude in Chrome{" "}
                  <span className="text-text-readable font-normal">
                    （推奨）
                  </span>
                </p>
                <p className="text-xs text-text-readable mt-0.5">
                  ブラウザ操作が必要な Skill 用
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-600/20 border border-emerald-500/30 text-emerald-400">
                <Chrome size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold">Chrome ブラウザ</p>
                <p className="text-xs text-text-readable mt-0.5">
                  Claude in Chrome の動作環境
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="space-y-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-2xl border border-surface-border bg-surface-1/80 p-6 md:p-8 transition-colors hover:border-brand-500/20"
            >
              <div className="flex items-start gap-5">
                {/* Step Number */}
                <div className="hidden md:flex flex-col items-center">
                  <span className="text-xs font-mono text-text-tertiary/50">
                    {step.number}
                  </span>
                  <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-xl bg-surface-2 border border-surface-border text-brand-400 group-hover:border-brand-500/30 transition-colors">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 md:hidden mb-3">
                    <span className="text-xs font-mono text-text-tertiary/50">
                      {step.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-2 border border-surface-border text-brand-400">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-base font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-text-readable leading-relaxed">
                    {step.description}
                  </p>
                  {step.note && (
                    <p className="mt-3 text-xs text-text-tertiary/70 bg-surface-2/50 rounded-lg px-3 py-2 border border-surface-border/50">
                      💡 {step.note}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-surface-border/40">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            準備ができたら、Skill を選びましょう
          </h2>
          <p className="mt-3 text-text-readable">
            無料の Skill から始められます
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/#skills"
              className="group flex items-center gap-2 rounded-xl bg-brand-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition-all hover:bg-brand-500 hover:scale-[1.02] active:scale-[0.98]"
            >
              Skill を選ぶ
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-surface-border/40 py-8">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs text-text-tertiary/50">
            © 2026 SkillPort. Built for the Claude Code community.
          </p>
        </div>
      </footer>
    </div>
  );
}
