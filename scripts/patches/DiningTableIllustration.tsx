"use client";

/* --------------------------------------------------------------------------
   AI Studio 版を Next.js 用に置き換えた恒久パッチ。
   plain <img src={import}> は Next では動かない（import は文字列でなくオブジェクト）ため
   next/image を使う。basePath も自動で付く。
   画像は sync スクリプトが AI Studio のヒーロー画像を
   src/assets/hero-illustration.jpg に固定名でコピーする。
   スタイルは AI Studio 版に追従して更新すること。
   -------------------------------------------------------------------------- */

import Image from "next/image";
import { motion } from "motion/react";
import heroArt from "@/assets/hero-illustration.jpg";

interface DiningTableIllustrationProps {
  className?: string;
}

export function DiningTableIllustration({ className = "" }: DiningTableIllustrationProps) {
  return (
    <div
      className={`relative w-full max-w-[1520px] mx-auto flex items-center justify-center select-none ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full flex items-center justify-center"
      >
        <Image
          src={heroArt}
          alt="食卓を囲み、自然につながる人々の繊細な線画イラストレーション"
          priority
          className="w-full h-auto max-h-[72vh] object-contain block select-none pointer-events-none mix-blend-multiply drop-shadow-[0_10px_40px_rgba(0,0,0,0.02)]"
          style={{
            maskImage:
              "radial-gradient(ellipse 96% 92% at 50% 50%, black 78%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 96% 92% at 50% 50%, black 78%, transparent 100%)",
          }}
        />
      </motion.div>
    </div>
  );
}
