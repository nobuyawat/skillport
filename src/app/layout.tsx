import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkillPort — 非エンジニアがAIで最強になる場所",
  description:
    "Claude Code の Skills をダウンロードして質問に答えるだけ。非エンジニアでも AI ワークスペースを簡単に構築できます。",
  keywords: [
    "Claude Code",
    "Skills",
    "AI",
    "ワークスペース",
    "自動化",
    "非エンジニア",
    "SkillPort",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
