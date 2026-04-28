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
    "Claude Code / Claude Desktop で動く Skills のストア。話しかけるだけで Web 公開や自動化まで完結。非エンジニアでも AI ワークスペースを簡単に構築できます。",
  keywords: [
    "Claude",
    "Claude Code",
    "Claude Desktop",
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
