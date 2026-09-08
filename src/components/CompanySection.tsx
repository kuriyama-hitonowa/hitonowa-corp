"use client";

import React from 'react';

export const CompanySection: React.FC = () => {
  const companyInfo = [
    { label: '会社名', value: '合同会社ひとのわ（hitonowa LLC）' },
    { label: '代表者', value: '代表社員　小川 裕（Yutaka Ogawa）' },
    {
      label: '事業内容',
      value: (
        <ul className="space-y-1.5 list-none">
          <li>1. 法人向けケータリング及びオードブルの企画・調理・提供</li>
          <li>2. オリジナル食品・加工品・冷凍商品の企画開発・製造</li>
          <li>3. 飲食及び食品関連の新規事業開発・業務設計・運営支援</li>
        </ul>
      ),
    },
    { label: '所在地', value: '東京都（キッチンアトリエ・オフィス）' },
    { label: '主要取引先', value: '事業会社、IT企業、イベントプロデュース会社、食品メーカー ほか' },
    {
      label: '連絡先',
      value: (
        <div className="space-y-1">
          <div>Email: y.ogawa@hitono-wa.com</div>
          <div>Tel: 090-3515-3864</div>
        </div>
      ),
    },
  ];

  return (
    <section id="company" className="py-28 sm:py-36 px-6 sm:px-8 lg:px-12 bg-[#F3F3EB]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-[12px] font-semibold tracking-[0.3em] text-[#EFA00B] uppercase font-sans">
            COMPANY
          </span>
          <h2 className="font-mincho text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1C] mt-2 tracking-wider">
            会社概要
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Company Info Table */}
          <div className="bg-[#FAF9F5]/80 rounded-3xl p-8 sm:p-12 shadow-[0_2px_16px_rgba(0,0,0,0.01)]">
            <dl className="divide-y divide-[#EAEAE0]/60">
              {companyInfo.map((item, idx) => (
                <div
                  key={idx}
                  className="py-5 first:pt-0 last:pb-0 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4"
                >
                  <dt className="text-xs font-semibold text-[#8A8A92] font-sans-jp tracking-wider">
                    {item.label}
                  </dt>
                  <dd className="sm:col-span-2 text-xs sm:text-sm text-[#2C2C30] font-sans-jp leading-relaxed">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};