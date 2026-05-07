"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full zenith-border-b bg-background px-6 lg:px-[100px] pt-[80px] md:pt-[120px] pb-[60px] md:pb-[80px]">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-6 h-px bg-primary"></div>
          <span className="zenith-micro tracking-widest">ABOUT</span>
        </div>
        <div className="max-w-[800px]">
          <h1 className="text-[42px] sm:text-[56px] md:text-[88px] font-normal tracking-[-0.04em] text-text-primary leading-[1] mb-[32px]">
            A belief in clarity over decoration.
          </h1>
          <p className="text-[18px] md:text-[22px] text-text-secondary font-light leading-[1.6] max-w-[600px]">
            Digital products often become harder to use one small decision at a time.
          </p>
        </div>
      </section>

      <section className="w-full zenith-border-b bg-surface px-6 lg:px-[100px] py-[80px] md:py-[120px]">
        <div className="max-w-[800px] mx-auto">
          <div className="bg-background p-12 border border-border mb-12 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-4 h-4 bg-primary rounded-none"></div>
              <span className="zenith-micro">THE PHILOSOPHY</span>
            </div>
            <h2 className="text-[32px] md:text-[40px] font-normal tracking-[-0.02em] mb-[32px] text-text-primary">
              Clarity is the most valuable asset in any digital experience.
            </h2>
            <div className="space-y-[24px] text-[16px] text-text-secondary font-light leading-[1.8]">
              <p>A new feature here, a quick fix there, and suddenly the core flow feels heavy and unclear. Not every product needs a massive, expensive redesign.</p>
              <p>Often, the most impactful changes come from diagnosing the specific moments where users hesitate, misunderstand, or lose trust—and fixing those moments with precision.</p>
            </div>
          </div>

          <div className="bg-background p-12 border border-border shadow-sm">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="w-full md:w-1/3 flex flex-col gap-6 shrink-0">
                {/* Founder Portrait Placeholder */}
                <div className="w-full aspect-[3/4] bg-surface border border-border flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#705849]/10 to-transparent"></div>
                  <span className="zenith-micro text-text-secondary group-hover:text-primary transition-colors">PORTRAIT PLACEHOLDER</span>
                </div>
                <div>
                  <h3 className="text-[18px] text-text-primary mb-1">Max</h3>
                  <p className="text-[14px] text-text-secondary font-light mb-4">Founder, Digital Vitamins</p>
                  <a href="https://linkedin.com/in/maximaker" target="_blank" rel="noopener noreferrer" className="zenith-micro hover:text-primary transition-colors inline-flex items-center gap-2">
                    LINKEDIN PROFILE <ArrowRight />
                  </a>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-4 h-4 bg-text-primary rounded-none"></div>
                  <span className="zenith-micro">THE EXPERIENCE</span>
                </div>
                <h2 className="text-[32px] md:text-[40px] font-normal tracking-[-0.02em] mb-[32px] text-text-primary">
                  Over 20 years of product design experience.
                </h2>
                <div className="space-y-[24px] text-[16px] text-text-secondary font-light leading-[1.8]">
                  <p>Digital Vitamins is led by Max, a product and UX designer with over two decades of experience designing digital products, websites, flows, and service experiences.</p>
                  <p>The approach is direct: Listen to the business goals, observe the user friction, separate the symptoms from the root causes, and prescribe practical, design-led improvements.</p>
                  <p>I work best when a product already has some shape, but the experience does not yet feel as clear, useful, or trustworthy as it could. I like looking closely at the moments where users hesitate, get lost, misread something, or need extra help. Often, those moments reveal what the product really needs next.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full relative overflow-hidden text-white py-[100px] md:py-[140px] text-center">
        {/* Background Gradient top half for continuous effect */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#8C7362] to-[#705849]"></div>
        
        <div className="relative z-10 px-6 lg:px-[100px] max-w-[800px] mx-auto">
          <h2 className="text-[36px] md:text-[48px] font-light tracking-[-0.03em] mb-[24px] leading-[1.1]">Ready to find the friction?</h2>
          <p className="text-[18px] text-white/90 mb-[48px] leading-[1.6] font-light max-w-[600px] mx-auto">
            Send a few details about your product and let's discuss how we can improve clarity and usability.
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