"use client";

/* --------------------------------------------------------------------------
   会社概要セクション（ローカル管理・sync スクリプトが常にこれで上書き）。
   表の中身は src/config/site.ts の `company` が「正」。ここは描画するだけ。
   スタイルは AI Studio 版に追従して更新すること。
   -------------------------------------------------------------------------- */

import type { ReactNode } from "react";
import { site } from "@/config/site";

export function CompanySection() {
  const rows: { label: string; value: ReactNode }[] = [
    { label: "会社名", value: site.company.legalLine },
    {
      label: "事業内容",
      value: (
        <ul className="space-y-1.5 list-none">
          {site.company.businessLines.map((line, i) => (
            <li key={line}>
              {i + 1}. {line}
            </li>
          ))}
        </ul>
      ),
    },
    { label: "所在地", value: site.company.location },
    {
      label: "お問い合わせ",
      value: <div>Email: {site.company.email}</div>,
    },
  ];

  return (
    <section id="company" className="py-28 sm:py-36 px-6 sm:px-8 lg:px-12 bg-[#F3F3EB]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-[12px] font-semibold tracking-[0.3em] text-[#EFA00B] uppercase font-sans">
            COMPANY
          </span>
          <h2 className="font-mincho text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1C] mt-2 tracking-wider">
            会社概要
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-[#FAF9F5]/80 rounded-3xl p-8 sm:p-12 shadow-[0_2px_16px_rgba(0,0,0,0.01)]">
            <dl className="divide-y divide-[#EAEAE0]/60">
              {rows.map((item) => (
                <div
                  key={item.label}
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
}
