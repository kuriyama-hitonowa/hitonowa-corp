"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about', sub: 'ひとのわについて' },
    { label: 'BUSINESS', href: '#business', sub: '3つの事業' },
    { label: 'CATERING', href: '#catering', sub: 'ケータリング' },
    { label: 'PRODUCT', href: '#product', sub: '商品開発・製造' },
    { label: 'BUSINESS DEV', href: '#business-dev', sub: '事業開発・支援' },
    { label: 'PHILOSOPHY', href: '#philosophy', sub: '想い・価値観' },
    { label: 'COMPANY', href: '#company', sub: '会社概要' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F3F3EB]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.02)] py-3.5'
            : 'bg-[#F3F3EB]/85 backdrop-blur-xs py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center group transition-opacity duration-200 hover:opacity-85"
            aria-label="hitonowa トップページへ"
          >
            <div className="text-left">
              <div className="font-bold text-xl sm:text-2xl tracking-tight leading-none">
                <span className="text-[#1A1A1C] font-semibold">hitono</span>
                <span className="text-[#EFA00B] font-bold">wa</span>
              </div>
              <div className="text-[9px] tracking-[0.22em] text-[#6B7280] font-sans-jp mt-0.5">
                合同会社ひとのわ
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-7 text-[13px] tracking-wider text-[#3D3D42]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 hover:text-[#1A1A1C] transition-colors duration-200 group font-medium"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#EFA00B] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action: Contact Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2 text-[13px] font-medium tracking-wider text-white bg-[#1A1A1C] hover:bg-[#333338] rounded-full transition-all duration-200 shadow-xs group"
            >
              <span>CONTACT</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#EFA00B] group-hover:scale-125 transition-transform duration-200" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#1A1A1C] hover:text-[#EFA00B] focus:outline-hidden transition-colors"
            aria-label="メニューを開閉"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-0 top-[60px] bottom-0 z-30 bg-[#F3F3EB]/98 backdrop-blur-xl px-6 py-8 flex flex-col justify-between overflow-y-auto xl:hidden"
          >
            <div className="space-y-6">
              <div className="text-xs uppercase tracking-[0.25em] text-[#8C8C92] mb-4">
                Navigation
              </div>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-baseline justify-between py-3 px-2 rounded-xl text-[#1A1A1C] hover:bg-[#EAEAE0]/50 hover:text-[#EFA00B] transition-colors"
                  >
                    <span className="text-lg font-semibold tracking-wide font-sans">
                      {link.label}
                    </span>
                    <span className="text-xs font-sans-jp text-[#8C8C92]">
                      {link.sub}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-auto">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#1A1A1C] text-white rounded-full text-sm font-medium tracking-wider hover:bg-[#2C2C30] transition-colors"
              >
                <span>お問い合わせ (CONTACT)</span>
                <ArrowUpRight size={16} className="text-[#EFA00B]" />
              </a>
              <div className="mt-4 text-center text-xs text-[#8C8C92] font-sans-jp">
                合同会社ひとのわ | hitonowa
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};