"use client";

import React from 'react';
import { Logo } from './Logo';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F3F3EB] pt-20 pb-12 px-6 sm:px-8 lg:px-12 text-[#52525A]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12">
          {/* Logo & Brand Copy */}
          <div>
            <div className="text-left mb-3">
              <div className="font-bold text-2xl tracking-tight leading-none">
                <span className="text-[#1A1A1C] font-semibold">hitono</span>
                <span className="text-[#EFA00B] font-bold">wa</span>
              </div>
              <div className="text-[10px] tracking-[0.25em] text-[#6B7280] font-sans-jp mt-1">
                合同会社ひとのわ
              </div>
            </div>
            <p className="text-xs text-[#7A7A82] font-mincho tracking-wider">
              食を通じて、人と人をつなぐ。
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-sans tracking-wider text-[#63636B]">
            <a href="#about" className="hover:text-[#1A1A1C] transition-colors">
              ABOUT
            </a>
            <a href="#business" className="hover:text-[#1A1A1C] transition-colors">
              BUSINESS
            </a>
            <a href="#catering" className="hover:text-[#1A1A1C] transition-colors">
              CATERING
            </a>
            <a href="#product" className="hover:text-[#1A1A1C] transition-colors">
              PRODUCT
            </a>
            <a href="#business-dev" className="hover:text-[#1A1A1C] transition-colors">
              BUSINESS DEV
            </a>
            <a href="#philosophy" className="hover:text-[#1A1A1C] transition-colors">
              PHILOSOPHY
            </a>
            <a href="#company" className="hover:text-[#1A1A1C] transition-colors">
              COMPANY
            </a>
            <a href="#contact" className="hover:text-[#1A1A1C] transition-colors">
              CONTACT
            </a>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[#EAEAE0] hover:bg-[#DFDDD0] text-[#1A1A1C] transition-all self-end md:self-auto cursor-pointer shadow-xs"
            aria-label="ページ上部へ戻る"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Bottom Bar with Brand Color Accent */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#9A9AA2] font-sans-jp gap-4">
          <div>
            Copyright © {new Date().getFullYear()} hitonowa LLC. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>東京都 / ケータリング・商品開発・事業支援</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#EFA00B]" />
          </div>
        </div>
      </div>
    </footer>
  );
};