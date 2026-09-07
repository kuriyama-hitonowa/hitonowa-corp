"use client";

import { ArrowUp } from "lucide-react";
import { site } from "@/config/site";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-canvas border-t border-[#ECE5D8] pt-16 pb-12 px-6 sm:px-8 lg:px-12 text-[#52525A]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#F0ECE1]">
          <div>
            <div className="text-left mb-3">
              <div className="font-bold text-2xl tracking-tight leading-none">
                <span className="text-ink font-semibold">{site.brand.logoLead}</span>
                <span className="text-[#EFA00B] font-bold">{site.brand.logoTail}</span>
              </div>
              <div className="text-[10px] tracking-[0.25em] text-[#6B7280] font-sans-jp mt-1">
                {site.brand.legalName}
              </div>
            </div>
            <p className="text-xs text-[#7A7A82] font-mincho tracking-wider">
              {site.brand.tagline.join("")}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs tracking-wider text-[#63636B]">
            {site.nav.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-ink transition-colors">
                {link.label}
              </a>
            ))}
            <a href="#contact" className="hover:text-ink transition-colors">
              CONTACT
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-[#FAF8F3] hover:bg-[#F0ECE1] border border-[#E5DFD0] text-ink transition-all self-end md:self-auto cursor-pointer"
            aria-label="ページ上部へ戻る"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#9A9AA2] font-sans-jp gap-4">
          <div>
            Copyright © {new Date().getFullYear()} {site.brand.legalNameLatin}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>東京都 / ケータリング・商品開発・事業支援</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#EFA00B]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
