"use client";

import Link from "next/link";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesBento } from "@/components/home/ServicesBento";
import { ArrowRight } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />

      {/* Problem Section (Quote/Statement Style) */}
      <section className="w-full zenith-border-b bg-background flex flex-col md:flex-row min-h-[60vh]">
        <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-border flex items-center justify-center p-12 bg-surface">
          <div className="w-full aspect-[3/4] max-w-[300px] bg-background relative flex items-center justify-center overflow-hidden shadow-sm border border-border">
             <div className="w-px h-full bg-border absolute left-1/2"></div>
             <div className="w-full h-px bg-border absolute top-1/3"></div>
             <div className="absolute bottom-6 left-6 zenith-micro bg-surface px-2 py-1 border border-border">
               PRODUCT DOCTOR
             </div>
             {/* Warm subtle glow instead of stark geometry */}
             <div className="w-32 h-32 bg-primary/5 rounded-full blur-3xl absolute top-1/4 right-1/4"></div>
          </div>
        </div>
        <div className="w-full md:w-2/3 p-12 lg:p-[120px] flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-6 h-px bg-primary"></div>
            <span className="zenith-micro tracking-widest text-text-secondary">OBSERVATION</span>
          </div>
          <h2 className="text-[28px] sm:text-[32px] md:text-[44px] lg:text-[52px] font-normal tracking-[-0.03em] leading-[1.2] text-text-primary mb-[40px] max-w-[800px]">
            "Digital products often become harder to use one small decision at a time. The product still works, but users need more effort to understand it."
          </h2>
          <div className="flex items-center gap-4 zenith-micro">
            <div className="w-1.5 h-1.5 bg-text-primary"></div>
            <span>MAX, PRODUCT UX DESIGNER</span>
          </div>
        </div>
      </section>
      
      <ServicesBento />

      {/* Method Section */}
      <section className="w-full zenith-border-b bg-background flex flex-col md:flex-row min-h-[70vh]">
        <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-border p-8 md:p-12 lg:p-[100px] bg-surface">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-6 h-px bg-text-primary"></div>
            <span className="zenith-micro tracking-widest">METHOD</span>
          </div>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-normal tracking-[-0.03em] mb-[24px] text-text-primary leading-[1.1]">
            A simple way to improve what matters.
          </h2>
          <p className="text-[15px] text-text-secondary font-light leading-[1.6] mb-[40px]">
            We don't do endless discovery phases. We look at the problem, diagnose it, and prescribe the fix.
          </p>
          <Link href="/process" className="zenith-micro hover:text-primary transition-colors flex items-center gap-2">
            VIEW THE PROCESS <ArrowRight />
          </Link>
        </div>
        <div className="w-full md:w-2/3 flex flex-col">
          <div className="border-b border-border p-8 sm:p-10 lg:p-14 hover:bg-surface transition-colors group cursor-default">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[22px] font-normal text-text-primary tracking-[-0.01em]">01. Listen & Observe</h3>
              <span className="zenith-micro text-border group-hover:text-primary transition-colors">V</span>
            </div>
            <p className="text-[15px] text-text-secondary font-light leading-[1.6] max-w-[600px]">
              We understand what you are trying to achieve, where users struggle, and what feels off. We review the experience from a user's point of view and note friction, gaps, and trust issues.
            </p>
          </div>
          <div className="border-b border-border p-8 sm:p-10 lg:p-14 hover:bg-surface transition-colors group cursor-default">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[22px] font-normal text-text-primary tracking-[-0.01em]">02. Diagnose</h3>
              <span className="zenith-micro text-border group-hover:text-primary transition-colors">V</span>
            </div>
            <p className="text-[15px] text-text-secondary font-light leading-[1.6] max-w-[600px]">
              We separate symptoms from causes, so we are not just changing the surface. We define practical improvements, from quick fixes to deeper design changes.
            </p>
          </div>
          <div className="border-b border-border p-8 sm:p-10 lg:p-14 hover:bg-surface transition-colors group cursor-default border-b-0">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[22px] font-normal text-text-primary tracking-[-0.01em]">03. Prescribe & Improve</h3>
              <span className="zenith-micro text-border group-hover:text-primary transition-colors">V</span>
            </div>
            <p className="text-[15px] text-text-secondary font-light leading-[1.6] max-w-[600px]">
              We redesign, rewrite, restructure, or clarify the selected parts of the experience. Where useful, we review the result and suggest what to test or improve next.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full relative overflow-hidden text-white py-[100px] md:py-[140px]">
        {/* Background Gradient top half for continuous effect */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#8C7362] to-[#705849]"></div>
        
        <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-[36px] sm:text-[48px] md:text-[72px] font-light tracking-[-0.04em] mb-[24px] leading-[1.05]">
            Have a flow that feels harder than it should?
          </h2>
          <p className="text-[18px] text-white/90 mb-[48px] leading-[1.6] font-light max-w-[500px] mx-auto">
            Send a few details and we can look at what kind of UX care would make the most sense.
          </p>
          <div className="flex items-center justify-center gap-[16px]">
            <Link href="/contact" className="bg-white text-[#5C4538] hover:bg-white/90 transition-colors px-8 py-4 text-[13px] font-medium tracking-widest uppercase flex items-center gap-3">
              BOOK A CHECKUP <ArrowRight weight="bold" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}