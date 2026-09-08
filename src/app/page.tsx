"use client";

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { BusinessOverviewSection } from '@/components/BusinessOverviewSection';
import { CateringSection } from '@/components/CateringSection';
import { ProductDevSection } from '@/components/ProductDevSection';
import { BusinessDevSection } from '@/components/BusinessDevSection';
import { PhilosophySection } from '@/components/PhilosophySection';
import { CompanySection } from '@/components/CompanySection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F3F3EB] text-[#1A1A1C] flex flex-col font-sans-jp selection:bg-[#EFA00B]/20 selection:text-[#1A1A1C]">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 01 HERO */}
        <HeroSection />

        {/* 02 ABOUT */}
        <AboutSection />

        {/* 03 BUSINESS (Overview of 3 Pillars) */}
        <BusinessOverviewSection />

        {/* 04 CATERING */}
        <CateringSection />

        {/* 05 PRODUCT DEVELOPMENT */}
        <ProductDevSection />

        {/* 06 BUSINESS DEVELOPMENT */}
        <BusinessDevSection />

        {/* 07 PHILOSOPHY */}
        <PhilosophySection />

        {/* 08 COMPANY */}
        <CompanySection />

        {/* 09 CONTACT */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
