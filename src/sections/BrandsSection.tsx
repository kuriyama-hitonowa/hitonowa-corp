"use client";

/* --------------------------------------------------------------------------
   展開ブランド（ローカル管理）。AI Studio 同期の対象外（src/components の外）。
   ブランドの中身は src/config/site.ts の `brands` が「正」。
   sync スクリプトが page.tsx にこのセクションを自動で差し込む。
   -------------------------------------------------------------------------- */

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";
import anelloLogo from "@/assets/brands/anello-logo.png";

const logos: Record<string, typeof anelloLogo> = {
  anello: anelloLogo,
};

export function BrandsSection() {
  return (
    <section id="brands" className="py-28 sm:py-36 px-6 sm:px-8 lg:px-12 bg-[#F3F3EB]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-[12px] font-semibold tracking-[0.3em] text-[#EFA00B] uppercase font-sans">
            BRANDS
          </span>
          <h2 className="font-mincho text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1C] mt-2 tracking-wider">
            展開ブランド
          </h2>
          <p className="text-xs sm:text-sm text-[#707078] font-sans-jp mt-3">
            ひとのわが手がける、食のブランド
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:gap-10 max-w-4xl mx-auto">
          {site.brands.map((brand) => {
            const logo = logos[brand.id];
            return (
              <article
                key={brand.id}
                className="grid grid-cols-1 md:grid-cols-5 items-center gap-8 md:gap-12 px-8 sm:px-12 py-10 sm:py-12 rounded-3xl bg-[#FAF9F5]/80 shadow-[0_2px_16px_rgba(0,0,0,0.01)]"
              >
                {logo && (
                  <div className="md:col-span-2 flex items-center justify-center">
                    <Image
                      src={logo}
                      alt={`${brand.nameJa} ${brand.nameLatin} のロゴ`}
                      className="w-full max-w-[260px] h-auto select-none"
                      sizes="(min-width: 768px) 260px, 70vw"
                    />
                  </div>
                )}
                <div className="md:col-span-3 text-center md:text-left">
                  <p className="text-[11px] font-semibold tracking-[0.25em] text-[#EFA00B] font-sans-jp">
                    {brand.category}
                  </p>
                  <h3 className="font-mincho text-xl sm:text-2xl text-[#1A1A1C] font-semibold mt-3 tracking-wide leading-snug">
                    {brand.nameJa}
                    <span className="block sm:inline sm:ml-2">{brand.nameLatin}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#55555D] font-sans-jp leading-loose mt-5">
                    {brand.description}
                  </p>
                  {brand.url ? (
                    <a
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-6 text-xs font-medium text-[#1A1A1C] hover:text-[#EFA00B] transition-colors py-1.5 px-3 -ml-3 rounded-full hover:bg-[#EAEAE0]/60"
                    >
                      <span>公式サイトを見る</span>
                      <ArrowUpRight size={14} className="text-[#EFA00B]" />
                    </a>
                  ) : (
                    <p className="mt-6 text-[11px] tracking-wider text-[#8A8A92] font-sans-jp">
                      ブランドサイトは準備中です
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
