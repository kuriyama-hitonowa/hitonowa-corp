"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { site } from "@/config/site";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = site.nav;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FCFCFA]/95 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.03)] border-b border-[#F0ECE1] py-3.5"
            : "bg-[#FCFCFA]/80 backdrop-blur-xs py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center group transition-opacity duration-200 hover:opacity-85"
            aria-label={`${site.brand.legalName} トップページへ`}
          >
            <div className="text-left">
              <div className="font-bold text-xl sm:text-2xl tracking-tight leading-none">
                <span className="text-ink font-semibold">{site.brand.logoLead}</span>
                <span className="text-[#EFA00B] font-bold">{site.brand.logoTail}</span>
              </div>
              <div className="text-[9px] tracking-[0.22em] text-[#6B7280] font-sans-jp mt-0.5">
                {site.brand.legalName}
              </div>
            </div>
          </a>

          <nav className="hidden xl:flex items-center gap-7 text-[13px] tracking-wider text-[#3D3D42]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 hover:text-ink transition-colors duration-200 group font-medium"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#EFA00B] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2 text-[13px] font-medium tracking-wider text-ink bg-[#FAF8F3] hover:bg-[#F3EFE6] border border-[#E5DFD0] rounded-full transition-all duration-200 group"
            >
              <span>CONTACT</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#EFA00B] group-hover:scale-125 transition-transform duration-200" />
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-ink hover:text-[#EFA00B] focus:outline-hidden transition-colors"
            aria-label="メニューを開閉"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-0 top-[60px] bottom-0 z-30 bg-[#FCFCFA]/98 backdrop-blur-xl border-t border-[#F0ECE1] px-6 py-8 flex flex-col justify-between overflow-y-auto xl:hidden"
          >
            <div className="space-y-6">
              <div className="text-xs uppercase tracking-[0.25em] text-[#8C8C92] mb-4">
                Navigation
              </div>
              <div className="space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-baseline justify-between py-3 border-b border-[#F2EEE4] text-ink hover:text-[#EFA00B] transition-colors"
                  >
                    <span className="text-lg font-semibold tracking-wide">{link.label}</span>
                    <span className="text-xs font-sans-jp text-[#8C8C92]">{link.sub}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-auto border-t border-[#F0ECE1]">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-ink text-white rounded-lg text-sm font-medium tracking-wider hover:bg-[#2C2C30] transition-colors"
              >
                <span>お問い合わせ (CONTACT)</span>
                <ArrowUpRight size={16} className="text-[#EFA00B]" />
              </a>
              <div className="mt-4 text-center text-xs text-[#8C8C92] font-sans-jp">
                {site.brand.legalName} | {site.brand.logoLead}
                {site.brand.logoTail}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
