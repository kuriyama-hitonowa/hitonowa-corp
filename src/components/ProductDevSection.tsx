"use client";

import React from 'react';
import { ProductDevIcon } from './BusinessIcons';
import { Flame, Snowflake, Layers, CheckCircle, ChefHat, Sparkles } from 'lucide-react';

export const ProductDevSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: '企画・コンセプト設計',
      en: 'Ideation & Concept',
      desc: '市場ニーズやターゲットの食シーンを分析し、ブランドの核となるストーリーと味の方向性を決定します。',
    },
    {
      step: '02',
      title: 'レシピ開発・試作検証',
      en: 'Recipe & Prototyping',
      desc: '素材の選定から加熱・調味の微調整まで、何度も試作を重ねて理想の食感と風味を追求します。',
    },
    {
      step: '03',
      title: '製造・品質設計',
      en: 'Batch Craft & Quality',
      desc: '小ロットから対応可能な製造体制と、急速冷凍などの先進技術を組み合わせ、出来立ての品質を封じ込めます。',
    },
    {
      step: '04',
      title: '商品化・パッケージング',
      en: 'Commercialization',
      desc: '賞味期限検査、表示規格の策定、パッケージ意匠まで、流通と顧客体験を見据えた形に仕上げます。',
    },
  ];

  const highlights = [
    {
      icon: <Snowflake className="text-[#EFA00B]" size={26} />,
      title: '冷凍食品開発・保存技術',
      desc: 'ドリップを抑え、解凍後もレストランの味を再現する急速冷凍プロセスの知見を活かします。',
    },
    {
      icon: <ChefHat className="text-[#EFA00B]" size={26} />,
      title: '小ロットからの柔軟な受託開発',
      desc: '大手工場では難しい繊細な手仕事や小回り、限定ロットのOEM/PB商品開発にも対応します。',
    },
    {
      icon: <Layers className="text-[#EFA00B]" size={26} />,
      title: '一貫したブランド品質管理',
      desc: '単にレシピを作るだけでなく、コスト構造・継続的な供給安定性まで伴走して設計します。',
    },
  ];

  return (
    <section id="product" className="py-28 sm:py-36 px-6 sm:px-8 lg:px-12 bg-[#F3F3EB]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold text-[#EFA00B] tracking-widest">
                02
              </span>
              <span className="text-[12px] font-semibold tracking-[0.3em] text-[#EFA00B] uppercase font-sans">
                PRODUCT DEVELOPMENT
              </span>
            </div>
            <h2 className="font-mincho text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1C] tracking-wide">
              商品開発・製造
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#707078] font-sans-jp max-w-md">
            オリジナル商品の企画から試作、
            <br className="hidden sm:inline" />
            冷凍技術を活かした製造まで、食を生み出すクラフトマンシップ。
          </p>
        </div>

        {/* 4-Step Process Visualizer */}
        <div className="mb-20">
          <div className="text-xs font-mono font-medium text-[#8A8A92] uppercase tracking-widest mb-6 text-center">
            Development Flow : 企画から商品化へのプロセス
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
            {steps.map((s) => (
              <div
                key={s.step}
                className="bg-[#FAF9F5]/80 rounded-2xl p-7 relative flex flex-col justify-between hover:bg-[#FAF9F5] shadow-[0_2px_12px_rgba(0,0,0,0.012)] transition-all duration-300 group"
              >
                {/* Step Marker */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-mono font-bold text-[#EFA00B]">
                      STEP {s.step}
                    </span>
                    <span className="text-[10px] uppercase font-sans tracking-wider text-[#9E9EA6]">
                      {s.en}
                    </span>
                  </div>
                  <h3 className="font-mincho text-base sm:text-lg text-[#1A1A1C] font-semibold mb-3">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#63636B] leading-relaxed font-sans-jp">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="bg-[#FAF9F5]/80 rounded-3xl p-8 shadow-[0_2px_14px_rgba(0,0,0,0.01)] hover:bg-[#FAF9F5] transition-all duration-300"
            >
              <div className="w-13 h-13 rounded-2xl bg-[#EAEAE0] flex items-center justify-center mb-5">
                {h.icon}
              </div>
              <h3 className="font-mincho text-lg text-[#1A1A1C] font-semibold mb-2">
                {h.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-[#63636B] leading-relaxed font-sans-jp">
                {h.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};