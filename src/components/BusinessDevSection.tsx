"use client";

import React from 'react';
import { BusinessDevIcon } from './BusinessIcons';
import { Compass, GitBranch, Network, Wrench, ArrowRight } from 'lucide-react';

export const BusinessDevSection: React.FC = () => {
  const domains = [
    {
      title: '飲食・食品ブランドの企画・立ち上げ',
      desc: 'ターゲット選定、メニューコンセプト、世界観の設計から初期テストマーケティングまでを統合的にプロデュースします。',
    },
    {
      title: '厨房・調理オペレーションと製造ライン設計',
      desc: '机上の空論ではなく、実際の現場で無理なく回る調理手順、仕込み効率、衛生管理と動線の仕組み化を構築します。',
    },
    {
      title: 'パートナーシップ・流通ネットワーク開拓',
      desc: '生産者、製造協力工場、販売チャネルなど、事業の拡大に必要なステークホルダーとの持続的な連携を支援します。',
    },
    {
      title: '食を起点としたコミュニティ・場づくり支援',
      desc: '社内コミュニケーションの活性化や、商業施設・オフィスの共有スペースにおける食を通じた体験価値を創出します。',
    },
  ];

  return (
    <section id="business-dev" className="py-28 sm:py-36 px-6 sm:px-8 lg:px-12 bg-[#F3F3EB]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold text-[#EFA00B] tracking-widest">
                03
              </span>
              <span className="text-[12px] font-semibold tracking-[0.3em] text-[#EFA00B] uppercase font-sans">
                BUSINESS DEVELOPMENT
              </span>
            </div>
            <h2 className="font-mincho text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1C] tracking-wide">
              事業開発・支援
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#707078] font-sans-jp max-w-md">
            現場の知見があるからこそ描ける、
            <br className="hidden sm:inline" />
            机上の空論ではない実行力ある食の仕組みづくり。
          </p>
        </div>

        {/* Position Statement */}
        <div className="bg-[#EAEAE0]/40 rounded-3xl p-8 sm:p-14 mb-16">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-[#EFA00B] tracking-widest uppercase font-mono mb-2 block">
              Our Position & Approach
            </span>
            <h3 className="font-mincho text-xl sm:text-2xl text-[#1A1A1C] leading-snug font-medium mb-4">
              私たちは単なる「アドバイザー」ではありません。
              <br />
              自ら食の現場を動かす「実践者」として事業を共創します。
            </h3>
            <p className="text-xs sm:text-sm text-[#55555D] font-sans-jp leading-relaxed">
              食のビジネスには、味の再現性、衛生管理、原価率、オペレーション負荷、そして顧客の感情体験といった無数の要素が絡み合います。ひとのわは、ケータリングや製造開発の最前線で培った実地ノウハウを武器に、持続可能で愛される食事業の立ち上げ・改善を現場目線で伴走します。
            </p>
          </div>
        </div>

        {/* 4 Support Domains */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {domains.map((d, i) => (
            <div
              key={i}
              className="bg-[#FAF9F5]/80 rounded-3xl p-8 shadow-[0_2px_14px_rgba(0,0,0,0.01)] hover:bg-[#FAF9F5] transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#EFA00B]" />
                <h4 className="font-mincho text-base sm:text-lg text-[#1A1A1C] font-semibold">
                  {d.title}
                </h4>
              </div>
              <p className="text-xs sm:text-[13px] text-[#63636B] leading-relaxed font-sans-jp pl-5">
                {d.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Collaborative Callout */}
        <div className="p-6 sm:p-8 bg-[#FAF9F5] rounded-2xl shadow-[0_2px_14px_rgba(0,0,0,0.01)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-sm font-semibold text-[#1A1A1C] font-mincho mb-1">
              新規食ビジネス・商品立ち上げのご相談
            </div>
            <div className="text-xs text-[#6B7280] font-sans-jp">
              構想段階のアイデアから、既存事業のオペレーション改善までお気軽にお聞かせください。
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1A1A1C] text-white rounded-full text-xs font-medium tracking-wider hover:bg-[#333338] transition-colors shrink-0"
          >
            <span>事業相談をする</span>
            <ArrowRight size={14} className="text-[#EFA00B]" />
          </a>
        </div>
      </div>
    </section>
  );
};