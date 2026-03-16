import { Download, MessageCircle, Zap, Check, Terminal } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Download size={22} />,
    title: "Skill をダウンロード",
    description:
      "SkillPort で気になる Skill を見つけたら、表示されている1行をコピーして Claude Code に貼り付けるだけ。",
    iconColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    number: "02",
    icon: <MessageCircle size={22} />,
    title: "質問に答える",
    description:
      "Claude Code が「どのサービスを使いますか？」「URLは？」と聞いてきます。日本語で答えるだけでOK。",
    iconColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    number: "03",
    icon: <Zap size={22} />,
    title: "自動で設定完了",
    description:
      "設定ファイルの作成も、ディレクトリの配置も、コマンドの生成も、すべて Claude Code が自動で行います。",
    iconColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    number: "04",
    icon: <Check size={22} />,
    title: "自分専用コマンドで使う",
    description:
      "あなた専用のコマンド（例: /my-workspace）が生成されます。翌日からはそれを実行するだけ。",
    iconColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
];

export default function Solution() {
  return (
    <section
      id="how"
      className="relative border-t border-surface-border/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-brand-400 mb-4">
            SkillPort の仕組み
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            ダウンロードして、質問に答えるだけ。
          </h2>
          <p className="mt-4 text-text-tertiary text-base md:text-lg max-w-xl mx-auto">
            難しい操作は一切ありません。
            <br />
            Claude Code があなたの代わりにすべて設定します。
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-2xl border border-surface-border/60 bg-surface-1/60 p-7 transition-all duration-300 hover:border-surface-border hover:bg-surface-2/40"
            >
              <div className="mb-5 text-xs font-mono text-text-tertiary/40 tracking-widest">
                {step.number}
              </div>
              <div
                className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border ${step.iconColor} transition-colors`}
              >
                {step.icon}
              </div>
              <h3 className="text-base font-semibold text-text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-tertiary">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CLI Demo */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="cli-block overflow-hidden transition-all duration-300">
            {/* Title bar */}
            <div className="flex items-center gap-2 border-b border-surface-border/60 px-4 py-3">
              <Terminal size={14} className="text-text-tertiary" />
              <span className="text-xs text-text-tertiary font-medium">
                Claude Code
              </span>
              <div className="ml-auto flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-surface-3" />
                <div className="h-2.5 w-2.5 rounded-full bg-surface-3" />
                <div className="h-2.5 w-2.5 rounded-full bg-surface-3" />
              </div>
            </div>

            {/* Conversation Demo */}
            <div className="p-5 space-y-4 text-sm">
              <div>
                <span className="text-brand-400 font-medium">Claude</span>
                <span className="text-text-tertiary">
                  {" "}
                  ワークスペースに追加するサービス名を教えてください。
                </span>
              </div>
              <div>
                <span className="text-emerald-400 font-medium">あなた</span>
                <span className="text-text-primary"> ChatGPT</span>
              </div>
              <div>
                <span className="text-brand-400 font-medium">Claude</span>
                <span className="text-text-tertiary">
                  {" "}
                  URL は https://chat.openai.com でよいですか？
                </span>
              </div>
              <div>
                <span className="text-emerald-400 font-medium">あなた</span>
                <span className="text-text-primary"> はい</span>
              </div>
              <div>
                <span className="text-brand-400 font-medium">Claude</span>
                <span className="text-text-tertiary">
                  {" "}
                  使用するアカウント（メールアドレス）は？
                </span>
              </div>
              <div>
                <span className="text-emerald-400 font-medium">あなた</span>
                <span className="text-text-primary">
                  {" "}
                  example@gmail.com
                </span>
              </div>
              <div className="pt-2 border-t border-surface-border/40">
                <span className="text-brand-400 font-medium">Claude</span>
                <span className="text-text-tertiary">
                  {" "}
                  設定完了しました。{" "}
                </span>
                <span className="text-emerald-400 font-medium">
                  /my-workspace
                </span>
                <span className="text-text-tertiary">
                  {" "}
                  で起動できます。
                </span>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-text-tertiary/60">
            実際の対話セットアップのイメージ
          </p>
        </div>
      </div>
    </section>
  );
}
