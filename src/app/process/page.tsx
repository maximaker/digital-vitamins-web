"use client";

import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react';

export default function ProcessPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full zenith-border-b bg-background px-6 lg:px-[100px] pt-[120px] pb-[80px]">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-6 h-px bg-primary"></div>
          <span className="zenith-micro tracking-widest">PROCESS</span>
        </div>
        <div className="max-w-[800px]">
          <h1 className="text-[56px] md:text-[88px] font-normal tracking-[-0.04em] text-text-primary leading-[1] mb-[32px]">
            A clear method for improvement.
          </h1>
          <p className="text-[18px] md:text-[22px] text-text-secondary font-light leading-[1.6] max-w-[600px]">
            Predictable, focused, and free from endless discovery phases.
          </p>
        </div>
      </section>

      <section className="w-full zenith-border-b bg-surface px-6 lg:px-[100px] py-[120px]">
        <div className="max-w-[800px] mx-auto">
          <div className="space-y-6">
            <div className="bg-background p-12 border border-border hover:shadow-md transition-shadow">
              <span className="zenith-micro mb-6 block text-primary">01. CONTEXT</span>
              <h3 className="text-[32px] font-normal mb-4 tracking-[-0.02em]">Share the context</h3>
              <p className="text-[16px] text-text-secondary font-light leading-[1.6]">You send the product, page, or flow, along with the goal and what feels off. No polished brief required.</p>
            </div>
            
            <div className="bg-background p-12 border border-border hover:shadow-md transition-shadow">
              <span className="zenith-micro mb-6 block text-primary">02. CLARIFICATION</span>
              <h3 className="text-[32px] font-normal mb-4 tracking-[-0.02em]">Clarify the problem</h3>
              <p className="text-[16px] text-text-secondary font-light leading-[1.6]">We make sure we are looking at the right issue, not just the loudest symptom.</p>
            </div>
            
            <div className="bg-background p-12 border border-border hover:shadow-md transition-shadow">
              <span className="zenith-micro mb-6 block text-primary">03. REVIEW</span>
              <h3 className="text-[32px] font-normal mb-4 tracking-[-0.02em]">Review the experience</h3>
              <p className="text-[16px] text-text-secondary font-light leading-[1.6]">I inspect the experience from a user's point of view and note where clarity, trust, or flow breaks.</p>
            </div>
            
            <div className="bg-background p-12 border border-border hover:shadow-md transition-shadow">
              <span className="zenith-micro mb-6 block text-primary">04. PRESCRIPTION</span>
              <h3 className="text-[32px] font-normal mb-4 tracking-[-0.02em]">Define the treatment</h3>
              <p className="text-[16px] text-text-secondary font-light leading-[1.6]">You receive clear recommendations, priorities, and design direction.</p>
            </div>
            
            <div className="bg-background p-12 border border-border hover:shadow-md transition-shadow">
              <span className="zenith-micro mb-6 block text-primary">05. EXECUTION</span>
              <h3 className="text-[32px] font-normal mb-4 tracking-[-0.02em]">Improve the selected parts</h3>
              <p className="text-[16px] text-text-secondary font-light leading-[1.6]">Depending on the service, this may mean redesigning a page, restructuring a flow, or creating interactive prototypes.</p>
            </div>
            
            <div className="bg-background p-12 border border-border hover:shadow-md transition-shadow">
              <span className="zenith-micro mb-6 block text-primary">06. STRATEGY</span>
              <h3 className="text-[32px] font-normal mb-4 tracking-[-0.02em]">Decide what comes next</h3>
              <p className="text-[16px] text-text-secondary font-light leading-[1.6]">We identify what to test, track, or improve later to ensure long-term product health.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full relative overflow-hidden text-white py-[140px] text-center">
        {/* Background Gradient top half for continuous effect */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#8C7362] to-[#705849]"></div>
        
        <div className="relative z-10 px-6 lg:px-[100px] max-w-[800px] mx-auto">
          <h2 className="text-[36px] md:text-[48px] font-light tracking-[-0.03em] mb-[24px] leading-[1.1]">Ready to start the process?</h2>
          <p className="text-[18px] text-white/90 mb-[48px] leading-[1.6] font-light max-w-[600px] mx-auto">
            Send a few details about your product and let's begin the diagnosis.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="bg-white text-[#5C4538] hover:bg-white/90 transition-colors px-8 py-4 text-[13px] font-medium tracking-widest uppercase flex items-center gap-3">
              BOOK A CHECKUP <ArrowRight weight="bold" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}