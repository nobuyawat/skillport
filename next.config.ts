import type { NextConfig } from "next";

// STATIC_EXPORT=1 のときは静的書き出し（Cloudflare Pages 用・out/）。Vercel の通常ビルドには影響しない
const nextConfig: NextConfig = process.env.STATIC_EXPORT
  ? { output: "export", trailingSlash: true, images: { unoptimized: true } }
  : {};

export default nextConfig;
