import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静的サイトとして書き出す（SEO・表示速度・ホスティングの自由度を重視）
  output: "export",
  trailingSlash: true,
  images: {
    // 静的出力では Next の画像最適化サーバーが使えないため無効化
    unoptimized: true,
  },
};

export default nextConfig;
