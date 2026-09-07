"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { Logo } from "./Logo";
import { DiningTableIllustration } from "./DiningTableIllustration";
import { site } from "@/config/site";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen pt-28 pb-16 px-6 sm:px-8 lg:px-12 flex flex-col justify-between items-center text-center overflow-hidden bg-canvas">
      <div className="absolute inset-0 bg-[radial-gradient(#EFA00B_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.035] pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center z-10 pt-4 sm:pt-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mb-8 sm:mb-12"
        >
          <Logo size="lg" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-mincho text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] text-ink tracking-[0.08em] leading-[1.4] sm:leading-[1.35] font-medium"
        >
          <span className="text-[#EFA00B]">食</span>を通じて、
          <br className="sm:hidden" />
          人と人を<span className="text-[#EFA00B]">つなぐ</span>。
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 64 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-[2px] bg-[#EFA00B] my-6 sm:my-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-sm sm:text-base md:text-lg text-[#52525A] font-sans-jp font-light leading-relaxed tracking-wide max-w-2xl mx-auto"
        >
          ひとのわは、食を起点に人と人がつながる場をつくり、
          <br className="hidden sm:inline" />
          新しい価値と未来を生み出す会社です。
        </motion.p>
      </div>

      <div className="w-full max-w-4xl mx-auto my-4 sm:my-8 z-10">
        <DiningTableIllustration />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="flex flex-col items-center gap-2 pt-2 z-10 text-[#8E8E96]"
      >
        <span className="text-[11px] tracking-[0.25em] font-medium uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-[#EFA00B]" />
        </motion.div>
      </motion.div>

      <span className="sr-only">{site.brand.description}</span>
    </section>
  );
}
