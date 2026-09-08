"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Users, Utensils, Lightbulb } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const values = [
    {
      num: '01',
      title: '場をつくる',
      en: 'Gathering Space',
      desc: '食卓を囲むひとときが、堅苦しい垣根を取り払い、自然な対話と信頼を生み出します。',
    },
    {
      num: '02',
      title: '商品を生み出す',
      en: 'Product Creation',
      desc: '企画から調理・冷凍技術まで、確かな味と持続可能な品質で新しい食の価値を具現化します。',
    },
    {
      num: '03',
      title: '人をつなぐ',
      en: 'Human Connection',
      desc: '食べる人、つくる人、事業を育てる人が有機的につながる循環の輪を広げます。',
    },
    {
      num: '04',
      title: '事業を支援する',
      en: 'Business Synergy',
      desc: '食の現場感と仕組み化の知見を掛け合わせ、実効性のある新しい食ビジネスを伴走します。',
    },
  ];

  return (
    <section id="about" className="py-28 sm:py-36 px-6 sm:px-8 lg:px-12 bg-[#F3F3EB]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-[12px] font-semibold tracking-[0.3em] text-[#EFA00B] uppercase font-sans">
            ABOUT
          </span>
          <h2 className="font-mincho text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1C] mt-2 tracking-wider">
            ひとのわについて
          </h2>
        </div>

        {/* Core Statement Box: Open, borderless architecture */}
        <div className="bg-[#EAEAE0]/40 rounded-3xl p-10 sm:p-14 lg:p-16 text-center max-w-4xl mx-auto">
          <p className="font-mincho text-xl sm:text-2xl md:text-[1.75rem] text-[#1A1A1C] leading-[1.6] sm:leading-[1.65] font-medium tracking-wide">
            ひとのわは、食を起点に
            <br className="hidden sm:inline" />
            人と人がつながる場をつくり、
            <br />
            新しい価値と未来を生み出す会社です。
          </p>

          <p className="text-[#55555C] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans-jp font-light mt-8 sm:mt-10">
            私たちは、単なる食品の調理・配送にとどまる会社ではありません。
            <br className="hidden sm:inline" />
            食をひとつの豊かな「メディア（媒介）」と捉え、企業内のコミュニケーション創出、
            独自の冷凍・加工技術を活かしたオリジナル商品開発、そして食領域の新規事業支援まで、
            人・企業・社会を温かく結びつけていきます。
          </p>
        </div>

        {/* 4 Pillars of hitonowa */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-16 sm:mt-20">
          {values.map((v) => (
            <div
              key={v.num}
              className="p-7 bg-[#FAF9F5]/75 rounded-2xl hover:bg-[#FAF9F5] transition-all duration-300 group shadow-[0_2px_12px_rgba(0,0,0,0.012)]"
            >
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#EFA00B] tracking-wider">
                  {v.num}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#9E9EA6] font-sans">
                  {v.en}
                </span>
              </div>
              <h3 className="font-mincho text-lg text-[#1A1A1C] font-semibold mb-2 group-hover:text-[#1A1A1C]">
                {v.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-[#63636B] leading-relaxed font-sans-jp">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};