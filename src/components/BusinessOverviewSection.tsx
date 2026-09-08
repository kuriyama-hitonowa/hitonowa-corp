"use client";

import React from 'react';
import { CateringIcon, ProductDevIcon, BusinessDevIcon } from './BusinessIcons';
import { ArrowDownRight } from 'lucide-react';

export const BusinessOverviewSection: React.FC = () => {
  const businesses = [
    {
      num: '01',
      enTitle: 'CATERING',
      title: 'ケータリング',
      tagline: '法人向けオードブル・各種ケータリング',
      icon: <CateringIcon size={108} />,
      points: [
        '社内レセプション・懇親会',
        '役員会・重要ゲスト向け特別席',
        '空間演出と出来立ての温もり',
      ],
      href: '#catering',
    },
    {
      num: '02',
      enTitle: 'PRODUCT DEVELOPMENT',
      title: '商品開発・製造',
      tagline: 'オリジナル商品の企画・製造・冷凍食品開発',
      icon: <ProductDevIcon size={108} />,
      points: [
        '独自レシピの設計と試作検証',
        '急速冷凍技術を活用した品質保持',
        'PB／OEM製品の受託製造',
      ],
      href: '#product',
    },
    {
      num: '03',
      enTitle: 'BUSINESS DEVELOPMENT',
      title: '事業開発・支援',
      tagline: '新規事業の企画・仕組みづくり・支援',
      icon: <BusinessDevIcon size={108} />,
      points: [
        '食ビジネスのコンセプト設計',
        '厨房・調理オペレーション構築',
        '食を通じたコミュニティ支援',
      ],
      href: '#business-dev',
    },
  ];

  return (
    <section id="business" className="py-28 sm:py-36 px-6 sm:px-8 lg:px-12 bg-[#F3F3EB]">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[12px] font-semibold tracking-[0.3em] text-[#EFA00B] uppercase font-sans">
            BUSINESS
          </span>
          <h2 className="font-mincho text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1C] mt-2 tracking-wider">
            3つの事業
          </h2>
          <p className="text-xs sm:text-sm text-[#707078] font-sans-jp mt-3">
            食の提供から、プロダクトの創出、ビジネスモデルの構築まで
          </p>
        </div>

        {/* 3 Pillars Layout: Modern, borderless, seamless card architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          {businesses.map((biz) => (
            <div
              key={biz.num}
              className="flex flex-col items-center text-center px-8 py-10 rounded-3xl bg-[#FAF9F5]/70 hover:bg-[#FAF9F5] transition-all duration-300 group shadow-[0_2px_14px_rgba(0,0,0,0.01)]"
            >
              {/* Pillar Number */}
              <div className="text-xs font-mono font-bold text-[#EFA00B] tracking-widest mb-4">
                {biz.num}
              </div>

              {/* Refined High-Res Line Art Icon */}
              <div className="h-28 sm:h-32 flex items-center justify-center my-2 mb-6 group-hover:scale-105 transition-transform duration-300">
                {biz.icon}
              </div>

              {/* Title & Tagline */}
              <h3 className="font-mincho text-xl sm:text-2xl text-[#1A1A1C] font-semibold mb-2 tracking-wide">
                {biz.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-[#EFA00B] font-medium tracking-wide mb-6 font-sans-jp">
                {biz.tagline}
              </p>

              {/* Points */}
              <ul className="space-y-2 text-xs sm:text-[13px] text-[#55555D] font-sans-jp leading-relaxed mb-8 flex-1">
                {biz.points.map((pt, i) => (
                  <li key={i} className="flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EFA00B]" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Read Detail Link */}
              <a
                href={biz.href}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1A1A1C] group-hover:text-[#EFA00B] transition-colors py-1.5 px-3 rounded-full hover:bg-[#EAEAE0]/60"
              >
                <span>詳しく見る</span>
                <ArrowDownRight size={14} className="text-[#EFA00B]" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};