"use client";

import React, { useState } from 'react';
import { CateringIcon } from './BusinessIcons';
import { CheckCircle2, Sparkles, Clock, Users2, ShieldCheck, ArrowRight } from 'lucide-react';

export const CateringSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'reception' | 'vip' | 'event'>('reception');

  const scenes = {
    reception: {
      title: '社内懇親会・レセプション',
      en: 'Corporate Reception & Networking',
      desc: '会話を邪魔せず片手でつまめるフィンガーフードから、彩り豊かな大皿料理まで。オフィスのカフェスペースや会議室が一瞬で上質な交流の場へと変わります。',
      target: '50〜200名規模の社内イベント・交流会',
      menuSample: ['季節のフィンガーオードブル 6種', '国産鶏と香草のローストピンチョス', '特製ミニキッシュとパテ・ド・カンパーニュ', '旬の温菜ビュッフェ'],
    },
    vip: {
      title: '役員会・重要ゲストのおもてなし',
      en: 'Executive & VIP Hospitality',
      desc: '厳選された旬の食材と、細部にまで配慮の行き届いた器のしつらえ。落ち着いた空間にふさわしい、特別感のあるプライベートケータリングをお届けします。',
      target: '10〜30名規模の役員懇談会・重要商談席',
      menuSample: ['厳選和牛の低温ロースト', '旬魚のポワレと季節野菜のエチュベ', '無農薬野菜のテリーヌ', '季節の自家製デザート'],
    },
    event: {
      title: '周年記念・キックオフパーティー',
      en: 'Anniversary & Project Kickoff',
      desc: '会社の節目や門出を祝う華やかなテーブルコーディネート。企業のアイデンティティやコンセプトに合わせたテーマカラーや特別メニューをご提案します。',
      target: '30〜300名規模の記念行事・発表会',
      menuSample: ['オリジナルロゴ入りスイーツ', '祝祭のローストポークカービング', '彩りタパスのロングテーブル', '乾杯用スパークリング手配'],
    },
  };

  const features = [
    {
      title: '会話が生まれる仕掛け',
      desc: '取り分けやすさ、口当たりの良さ、視覚的な楽しさを計算したメニュー設計で、自然な歓談を促します。',
    },
    {
      title: '場の空気を創る設え',
      desc: 'ただ並べるのではなく、クロスや木製ボード、草花を活かした空間演出で温かみのある食卓を構築します。',
    },
    {
      title: '柔軟なオーダーメイド',
      desc: 'ご予算、参加者の年齢層、アレルギー対応、ベジタリアン/ハラール配慮など、一社ごとのご要望に寄り添います。',
    },
  ];

  const currentScene = scenes[activeTab];

  return (
    <section id="catering" className="py-28 sm:py-36 px-6 sm:px-8 lg:px-12 bg-[#F3F3EB]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold text-[#EFA00B] tracking-widest">
                01
              </span>
              <span className="text-[12px] font-semibold tracking-[0.3em] text-[#EFA00B] uppercase font-sans">
                CATERING
              </span>
            </div>
            <h2 className="font-mincho text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1C] tracking-wide">
              法人向けケータリング・オードブル
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#707078] font-sans-jp max-w-md">
            「料理を届ける」だけではなく、
            <br className="hidden sm:inline" />
            人が集まり、会話が生まれ、場ができる体験をお届けします。
          </p>
        </div>

        {/* Highlight Core Message Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          <div className="lg:col-span-7 bg-[#EAEAE0]/40 rounded-3xl p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FAF9F5] rounded-full text-xs text-[#EFA00B] font-medium mb-4 shadow-xs">
                <Sparkles size={13} />
                <span>場づくりのプロフェッショナル</span>
              </div>
              <h3 className="font-mincho text-xl sm:text-2xl text-[#1A1A1C] leading-snug font-medium mb-4">
                料理は人と人をつなぐ、
                <br />
                もっともあたたかいインターフェース。
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5C64] leading-relaxed font-sans-jp mb-6">
                ビジネスの現場において、食事は単なる飲食の時間を超え、チームの結束を高めたり、取引先との信頼関係を深めたりする力を持っています。ひとのわは、開催目的や参加者の空気感に合わせ、一皿ごとにストーリーを込めたケータリングを提供します。
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 mt-4">
              {features.map((f, i) => (
                <div key={i}>
                  <div className="text-xs font-semibold text-[#1A1A1C] font-mincho mb-1">
                    {f.title}
                  </div>
                  <div className="text-[11px] text-[#787882] font-sans-jp leading-relaxed">
                    {f.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Minimalist Scene Artwork Panel */}
          <div className="lg:col-span-5 bg-[#FAF9F5] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.015)]">
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-mono font-medium text-[#8A8A92] uppercase">
                Scene Navigator
              </span>
              <CateringIcon size={46} />
            </div>

            {/* Scene Selector Tabs */}
            <div className="flex rounded-xl bg-[#EAEAE0]/60 p-1.5 mb-6">
              <button
                onClick={() => setActiveTab('reception')}
                className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  activeTab === 'reception'
                    ? 'bg-[#FAF9F5] text-[#1A1A1C] shadow-xs'
                    : 'text-[#707078] hover:text-[#1A1A1C]'
                }`}
              >
                懇親会
              </button>
              <button
                onClick={() => setActiveTab('vip')}
                className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  activeTab === 'vip'
                    ? 'bg-[#FAF9F5] text-[#1A1A1C] shadow-xs'
                    : 'text-[#707078] hover:text-[#1A1A1C]'
                }`}
              >
                役員会・VIP
              </button>
              <button
                onClick={() => setActiveTab('event')}
                className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  activeTab === 'event'
                    ? 'bg-[#FAF9F5] text-[#1A1A1C] shadow-xs'
                    : 'text-[#707078] hover:text-[#1A1A1C]'
                }`}
              >
                周年・祝賀
              </button>
            </div>

            {/* Scene Details */}
            <div className="space-y-4">
              <div>
                <h4 className="font-mincho text-lg font-semibold text-[#1A1A1C]">
                  {currentScene.title}
                </h4>
                <div className="text-[11px] text-[#EFA00B] font-mono tracking-wider mb-2">
                  {currentScene.en}
                </div>
                <p className="text-xs text-[#5C5C64] leading-relaxed font-sans-jp">
                  {currentScene.desc}
                </p>
              </div>

              <div className="p-4 bg-[#EAEAE0]/50 rounded-2xl">
                <div className="text-[11px] font-semibold text-[#1A1A1C] mb-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EFA00B]" />
                  <span>おすすめ構成例</span>
                </div>
                <ul className="space-y-1">
                  {currentScene.menuSample.map((m, idx) => (
                    <li key={idx} className="text-xs text-[#52525A] flex items-center gap-2">
                      <span className="text-[#EFA00B]">•</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-[#8A8A92] font-sans-jp">
                <span>想定規模: {currentScene.target}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Order Flow & Inquiry CTA */}
        <div className="p-6 sm:p-8 bg-[#FAF9F5] rounded-2xl shadow-[0_2px_14px_rgba(0,0,0,0.01)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#EAEAE0] flex items-center justify-center shrink-0">
              <Clock size={18} className="text-[#EFA00B]" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#1A1A1C] font-mincho">
                ケータリングのご相談・お見積り
              </div>
              <div className="text-xs text-[#6B7280] font-sans-jp">
                日時・ご予算・人数・会場の設備に合わせて最適なプランをご提案いたします。
              </div>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1A1A1C] text-white rounded-full text-xs font-medium tracking-wider hover:bg-[#333338] transition-colors shrink-0"
          >
            <span>ケータリングを相談する</span>
            <ArrowRight size={14} className="text-[#EFA00B]" />
          </a>
        </div>
      </div>
    </section>
  );
};