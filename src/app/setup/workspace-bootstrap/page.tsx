"use client";

import { useState } from "react";
import {
  Copy,
  Check,
  ArrowLeft,
  Chrome,
  Terminal,
  Sparkles,
  Info,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";

const PROMPT_TEXT = `workspace-bootstrap を導入してください。

GitHub リポジトリ: https://github.com/nobuyawat/workspace-bootstrap

このリポジトリを取得して、Skills と テンプレートを所定の場所に配置してください。
配置が終わったら /workspace-bootstrap-setup を実行できる状態にして、
次に何をすればいいか教えてください。`;

export default function SetupWorkspaceBootstrap() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PROMPT_TEXT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const textarea = document.createElement("textarea");
      textarea.value = PROMPT_TEXT;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-surface-0 text-text-primary">
      {/* Header */}
      <header className="border-b border-surface-border/40">
        <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-text-readable hover:text-text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            SkillPort に戻る
          </Link>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-0.5 text-xs font-semibold text-emerald-400">
            無料
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-600/10 px-4 py-1.5 text-sm text-brand-300">
              <Sparkles size={14} className="text-brand-400" />
              Workspace Bootstrap
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Claude Code で
            <br />
            <span className="text-brand-400">かんたん導入</span>
          </h1>
          <p className="mt-4 text-text-readable text-base md:text-lg leading-relaxed max-w-lg mx-auto">
            以下の手順で Workspace Bootstrap を
            <br className="sm:hidden" />
            数分で導入できます。
          </p>
        </div>

        {/* Notice */}
        <div className="mb-10 rounded-xl border border-amber-500/15 bg-amber-500/5 px-5 py-4 flex items-start gap-3">
          <Info size={16} className="text-amber-400 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-text-secondary leading-relaxed">
            この手順は{" "}
            <span className="font-medium text-text-primary">
              Claude Code
            </span>{" "}
            が使える環境で実行してください。
            通常の Claude チャット（claude.ai）だけでは完了できません。
          </p>
        </div>

        {/* Step 1 */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600/20 text-sm font-bold text-brand-400">
              1
            </span>
            <h2 className="text-lg font-semibold">
              Claude Code を開く
            </h2>
          </div>
          <div className="ml-11 rounded-xl border border-surface-border bg-surface-1/80 p-5">
            <div className="flex items-start gap-3">
              <Chrome size={20} className="text-brand-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-text-secondary leading-relaxed">
                ターミナルで{" "}
                <code className="rounded bg-surface-2 border border-surface-border/60 px-1.5 py-0.5 text-xs font-mono text-brand-400">
                  claude
                </code>{" "}
                を起動するか、Claude in Chrome から Claude Code に接続した状態にしてください。
              </p>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600/20 text-sm font-bold text-brand-400">
              2
            </span>
            <h2 className="text-lg font-semibold">
              以下のテキストを Claude Code に送信
            </h2>
          </div>
          <div className="ml-11">
            {/* Copy block */}
            <div className="rounded-xl border border-brand-500/20 bg-surface-1 overflow-hidden">
              <div className="flex items-center justify-between border-b border-surface-border/40 px-4 py-2.5 bg-surface-2/40">
                <div className="flex items-center gap-2 text-xs text-text-readable">
                  <Terminal size={13} />
                  Claude Code への依頼文
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 rounded-lg border border-surface-border bg-surface-2/60 px-3 py-1.5 text-xs font-medium text-text-secondary transition-all hover:border-brand-500/30 hover:text-text-primary hover:bg-surface-2 active:scale-[0.97]"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald-400" />
                      コピー完了
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      コピー
                    </>
                  )}
                </button>
              </div>
              <div className="p-5">
                <p className="text-sm text-text-secondary leading-relaxed whitespace-pre-wrap font-mono">
                  {PROMPT_TEXT}
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs text-text-tertiary/70 leading-relaxed">
              コピーしたテキストを Claude Code のチャットに貼り付けて送信してください。
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600/20 text-sm font-bold text-brand-400">
              3
            </span>
            <h2 className="text-lg font-semibold">セットアップを実行</h2>
          </div>
          <div className="ml-11 rounded-xl border border-surface-border bg-surface-1/80 p-5">
            <p className="text-sm text-text-secondary leading-relaxed">
              ファイルの配置が完了したら、
              Claude Code で以下のコマンドを実行してください。
            </p>
            <div className="mt-3 rounded-lg bg-surface-2/80 border border-surface-border/60 px-4 py-3">
              <code className="text-sm font-mono text-brand-400">
                /workspace-bootstrap-setup
              </code>
            </div>
            <p className="mt-3 text-xs text-text-readable leading-relaxed">
              対話形式のウィザードが起動し、あなた専用の AI ワークスペースを構築します。
            </p>
          </div>
        </div>

        {/* Chrome Bug Notice */}
        <div className="mb-12 rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-5 py-4 flex items-start gap-3">
          <AlertTriangle size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-text-readable leading-relaxed">
            <p className="font-medium text-cyan-300 mb-1">
              ブラウザ操作について（2026年4月〜）
            </p>
            <p>
              Claude in Chrome の現行バージョンにドメイン制限のバグがあるため、
              Claude Code からの自動タブ起動が一部ブロックされる場合があります。
            </p>
            <p className="mt-2">
              その場合は、同じ指示を{" "}
              <span className="font-medium text-text-primary">
                Claude Desktop チャット
              </span>{" "}
              に貼り付けて実行してください。同じ結果が得られます。
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-surface-border/40 pt-10">
          {/* Result preview */}
          <div className="rounded-2xl border border-brand-500/10 bg-gradient-to-b from-brand-600/5 to-transparent p-8 text-center">
            <p className="text-sm text-brand-400 font-medium mb-2">
              セットアップ完了後
            </p>
            <h3 className="text-xl font-bold mb-3">
              あなた専用の AI ワークスペースが完成
            </h3>
            <p className="text-sm text-text-readable leading-relaxed max-w-md mx-auto">
              AI 作業に必要なサイトを 1 コマンドで全部開けるようになります。
              Chrome のタブ起動、アカウント切替、ログイン確認を自動化。
            </p>
          </div>

          {/* Back link */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/"
              className="group flex items-center gap-2 text-sm text-text-readable hover:text-brand-400 transition-colors"
            >
              <ArrowLeft size={14} />
              SkillPort トップに戻る
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
