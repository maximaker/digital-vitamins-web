"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react';
import { WaitlistOverlay } from '@/components/WaitlistOverlay';

export default function LandingPageImprovementPage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <WaitlistOverlay isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />

      <section className="w-full zenith-border-b bg-background px-6 lg:px-[100px] pt-[120px] pb-[80px]">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-6 h-px bg-primary"></div>
          <Link href="/services" className="zenith-micro hover:text-primary transition-colors tracking-widest">
            ← BACK TO SERVICES
          </Link>
        </div>
        <div className="max-w-[800px]">
          <div className="inline-flex items-center gap-2 bg-surface border border-border px-3 py-1 mb-8">
            <div className="w-2 h-2 bg-primary/80 rounded-full animate-pulse"></div>
            <span className="zenith-micro text-text-secondary">COMING SOON</span>
          </div>
          <h1 className="text-[42px] sm:text-[56px] md:text-[88px] font-normal tracking-[-0.04em] text-text-primary leading-[1] mb-[32px]">
            Make your landing page easier to understand, trust, and act on.
          </h1>
          <p className="text-[18px] md:text-[22px] text-text-secondary font-light leading-[1.6] max-w-[600px] mb-12">
            A practical improvement of your landing page structure, messaging, and flow so visitors understand the offer and know what to do next.
          </p>
          <button onClick={() => setIsWaitlistOpen(true)} className="zenith-btn">
            JOIN THE INTEREST LIST <ArrowRight weight="bold" />
          </button>
        </div>
      </section>

      <section className="w-full zenith-border-b bg-surface px-6 lg:px-[100px] py-[120px]">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-[32px] md:text-[40px] font-normal tracking-[-0.02em] mb-[32px] text-text-primary">
            A landing page can look fine and still fail to explain the offer.
          </h2>
          <div className="space-y-[24px] text-[16px] text-text-secondary font-light leading-[1.8] mb-20 max-w-[800px]">
            <p>Visitors decide quickly whether something feels relevant, clear, and credible. If the page asks them to work too hard, they leave, hesitate, or postpone the decision.</p>
            <p>This service helps pages answer the right questions in the right order, moving beyond visual polish to actual message clarity and conversion logic.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-[40px] md:gap-[80px] mb-20">
            <div className="bg-background p-10 border border-border shadow-sm">
              <h3 className="zenith-micro mb-8 text-primary">WHAT GETS IMPROVED</h3>
              <ul className="space-y-4 text-[16px] text-text-secondary font-light">
                <li className="flex gap-3"><span className="text-primary">→</span> Hero message & Offer clarity</li>
                <li className="flex gap-3"><span className="text-primary">→</span> Page structure & Section order</li>
                <li className="flex gap-3"><span className="text-primary">→</span> Calls to action & Conversion path</li>
                <li className="flex gap-3"><span className="text-primary">→</span> Trust signals & Objection handling</li>
                <li className="flex gap-3"><span className="text-primary">→</span> Visual hierarchy & Copy clarity</li>
              </ul>
            </div>
            <div className="bg-background p-10 border border-border shadow-sm">
              <h3 className="zenith-micro mb-8 text-primary">WHAT YOU RECEIVE</h3>
              <ul className="space-y-4 text-[16px] text-text-secondary font-light">
                <li className="flex gap-3"><span className="text-text-primary">✓</span> Review and strategy notes</li>
                <li className="flex gap-3"><span className="text-text-primary">✓</span> Improved page structure</li>
                <li className="flex gap-3"><span className="text-text-primary">✓</span> Revised section flow</li>
                <li className="flex gap-3"><span className="text-text-primary">✓</span> Wireframe or high-fidelity design</li>
                <li className="flex gap-3"><span className="text-text-primary">✓</span> Implementation notes</li>
              </ul>
            </div>
          </div>

          <div className="bg-background p-12 border border-border mb-20 shadow-sm">
            <h3 className="text-[24px] font-normal mb-8 tracking-[-0.01em] text-text-primary">Best For</h3>
            <ul className="space-y-6 text-[16px] text-text-secondary font-light">
              <li className="flex gap-4 border-b border-border pb-6"><span className="font-medium text-primary zenith-micro pt-1">01</span> The offer exists, but the page does not explain it clearly</li>
              <li className="flex gap-4 border-b border-border pb-6"><span className="font-medium text-primary zenith-micro pt-1">02</span> The page gets traffic, but visitors hesitate or drop off</li>
              <li className="flex gap-4"><span className="font-medium text-primary zenith-micro pt-1">03</span> You need clearer structure before investing in more marketing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full relative overflow-hidden text-white py-[140px] text-center">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#8C7362] to-[#705849]"></div>
        <div className="relative z-10 px-6 lg:px-[100px] max-w-[800px] mx-auto">
          <h2 className="text-[36px] md:text-[48px] font-light tracking-[-0.03em] mb-[24px] leading-[1.1]">Be the first to know.</h2>
          <p className="text-[18px] text-white/90 mb-[48px] leading-[1.6] font-light max-w-[600px] mx-auto">
            This service will launch soon. Join the interest list to secure early access and special launch pricing.
          </p>
          <div className="flex justify-center">
            <button onClick={() => setIsWaitlistOpen(true)} className="bg-white text-[#5C4538] hover:bg-white/90 transition-colors px-8 py-4 text-[13px] font-medium tracking-widest uppercase flex items-center gap-3">
              JOIN THE INTEREST LIST <ArrowRight weight="bold" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}