"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Logo } from './Logo';
import { DiningTableIllustration } from './DiningTableIllustration';
import { ArrowDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] sm:min-h-screen pt-28 pb-14 px-4 sm:px-6 lg:px-8 flex flex-col justify-between items-center text-center overflow-hidden bg-[#F3F3EB]">
      {/* Background Subtle Linear Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(#EFA00B_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.035] pointer-events-none" />

      {/* Top Branding & Main Title */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center z-10 pt-4 sm:pt-6 px-4">
        {/* Brand Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="mb-8 sm:mb-12"
        >
          <Logo size="lg" />
        </motion.div>

        {/* Main Catchphrase */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-mincho text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-[#1A1A1C] tracking-[0.08em] leading-[1.38] sm:leading-[1.32] font-medium mb-6 sm:mb-8"
        >
          <span className="text-[#EFA00B]">食</span>を通じて、
          <br className="sm:hidden" />
          人と人を<span className="text-[#EFA00B]">つなぐ</span>。
        </motion.h1>

        {/* Subtitle / Company Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="text-sm sm:text-base md:text-lg text-[#52525A] font-sans-jp font-light leading-relaxed tracking-wide max-w-2xl mx-auto"
        >
          ひとのわは、食を起点に人と人がつながる場をつくり、
          <br className="hidden sm:inline" />
          新しい価値と未来を生み出す会社です。
        </motion.p>
      </div>

      {/* Hero Central Illustration: Grand, expansive line artwork blending seamlessly */}
      <div className="w-full max-w-[1600px] mx-auto my-6 sm:my-10 z-10 px-0 sm:px-2">
        <DiningTableIllustration />
      </div>

      {/* Bottom Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="flex flex-col items-center gap-2 pt-4 pb-2 z-10 text-[#8E8E96] mt-2"
      >
        <span className="text-[11px] tracking-[0.25em] font-sans font-medium uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-[#EFA00B]" />
        </motion.div>
      </motion.div>
    </section>
  );
};