import type { NextConfig } from "next";

// 本番は hitono-wa.com のドメイン直下（basePath なし）。
// GitHub Pages のプロジェクトURL（/hitonowa-corp 配下）でプレビューするときだけ
// BASE_PATH=/hitonowa-corp を渡す。
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  // 静的サイトとして書き出す（SEO・表示速度・ホスティングの自由度を重視）
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  images: {
    // 静的出力では Next の画像最適化サーバーが使えないため無効化
    unoptimized: true,
  },
};

export default nextConfig;
