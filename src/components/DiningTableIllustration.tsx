"use client";

import { motion } from "motion/react";

interface DiningTableIllustrationProps {
  className?: string;
}

export function DiningTableIllustration({ className = "" }: DiningTableIllustrationProps) {
  return (
    <div
      className={`relative w-full max-w-3xl mx-auto flex items-center justify-center select-none ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full overflow-hidden rounded-2xl"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/dining-lineart.jpg"
          alt="食卓を囲み、自然につながる人々の繊細な線画イラストレーション"
          className="w-full h-auto object-contain mix-blend-multiply opacity-90"
          style={{
            maskImage:
              "radial-gradient(ellipse 90% 85% at 50% 50%, black 60%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 85% at 50% 50%, black 60%, transparent 100%)",
          }}
        />
      </motion.div>
    </div>
  );
}
