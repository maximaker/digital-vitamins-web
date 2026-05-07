"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { SymptomSelector } from "@/components/SymptomSelector";

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full zenith-border-b bg-background px-6 lg:px-[100px] pt-[120px] pb-[80px]">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-6 h-px bg-primary"></div>
          <span className="zenith-micro tracking-widest">SERVICES</span>
        </div>
        <div className="max-w-[800px]">
          <h1 className="text-[56px] md:text-[88px] font-normal tracking-[-0.04em] text-text-primary leading-[1] mb-[32px]">
            Targeted interventions.
          </h1>
          <p className="text-[18px] md:text-[22px] text-text-secondary font-light leading-[1.6] max-w-[600px]">
            Targeted interventions to solve specific product friction. Start where the friction is most visible.
          </p>
        </div>
      </section>

      <section className="w-full zenith-border-b bg-surface px-6 lg:px-[100px] py-[120px]">
        <div className="max-w-[1200px] mx-auto mb-[120px]">
          <SymptomSelector />
        </div>

        <div className="max-w-[1200px] mx-auto">
          <div className="grid gap-[100px]">
            {/* UX Health Check */}
            <div className="grid md:grid-cols-12 gap-[40px] md:gap-[80px] items-start">
              <div className="md:col-span-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-4 h-4 bg-primary rounded-none"></div>
                  <span className="zenith-micro">01. DIAGNOSIS</span>
                </div>
                <h3 className="text-[36px] md:text-[48px] font-normal mb-[24px] tracking-[-0.03em] leading-[1.1]">UX Health Check</h3>
                <p className="text-[16px] text-text-secondary leading-[1.6] font-light mb-[40px] max-w-[600px]">
                  A focused review of your product, page, or flow to find what is unclear, inconsistent, or blocking users. Identifies drop-off points and resolves unclear messaging without immediate development overhead.
                </p>
                <Link 
                  href="/services/ux-health-check" 
                  className="zenith-btn"
                >
                  VIEW DETAILS
                  <ArrowRight weight="bold" />
                </Link>
              </div>
              <div className="md:col-span-4 bg-background p-10 border border-border flex flex-col gap-8">
                <div>
                  <span className="block zenith-micro mb-2">TIMELINE</span>
                  <span className="block text-[24px] font-normal tracking-[-0.02em]">1 Week</span>
                </div>
                <div className="w-full h-px bg-border"></div>
                <div>
                  <span className="block zenith-micro mb-2">DELIVERABLE</span>
                  <span className="block text-[16px] font-light">Annotated diagnostic report & action plan</span>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-border"></div>

            {/* Flow Fix */}
            <div className="grid md:grid-cols-12 gap-[40px] md:gap-[80px] items-start">
              <div className="md:col-span-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-4 h-4 bg-text-primary rounded-none"></div>
                  <span className="zenith-micro">02. OPTIMIZATION</span>
                </div>
                <h3 className="text-[36px] md:text-[48px] font-normal mb-[24px] tracking-[-0.03em] leading-[1.1]">Flow Fix</h3>
                <p className="text-[16px] text-text-secondary leading-[1.6] font-light mb-[40px] max-w-[600px]">
                  A focused improvement of key user flows like onboarding, signup, checkout, booking, or first-use experience. Streamlines complex processes and optimizes specific funnels.
                </p>
                <Link 
                  href="/services/flow-fix" 
                  className="zenith-btn"
                >
                  VIEW DETAILS
                  <ArrowRight weight="bold" />
                </Link>
              </div>
              <div className="md:col-span-4 bg-background p-10 border border-border flex flex-col gap-8">
                <div>
                  <span className="block zenith-micro mb-2">TIMELINE</span>
                  <span className="block text-[24px] font-normal tracking-[-0.02em]">2-3 Weeks</span>
                </div>
                <div className="w-full h-px bg-border"></div>
                <div>
                  <span className="block zenith-micro mb-2">DELIVERABLE</span>
                  <span className="block text-[16px] font-light">Figma prototypes & dev handoff</span>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-border"></div>

            {/* Prototyping */}
            <div className="grid md:grid-cols-12 gap-[40px] md:gap-[80px] items-start">
              <div className="md:col-span-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-4 h-4 bg-text-primary rounded-none"></div>
                  <span className="zenith-micro">03. CREATION</span>
                </div>
                <h3 className="text-[36px] md:text-[48px] font-normal mb-[24px] tracking-[-0.03em] leading-[1.1]">Prototyping</h3>
                <p className="text-[16px] text-text-secondary leading-[1.6] font-light mb-[40px] max-w-[600px]">
                  A focused sprint that turns rough ideas, unclear flows, or early product concepts into a coherent, clickable interactive prototype.
                </p>
                <Link 
                  href="/services/prototyping" 
                  className="zenith-btn"
                >
                  VIEW DETAILS
                  <ArrowRight weight="bold" />
                </Link>
              </div>
              <div className="md:col-span-4 bg-background p-10 border border-border flex flex-col gap-8">
                <div>
                  <span className="block zenith-micro mb-2">TIMELINE</span>
                  <span className="block text-[24px] font-normal tracking-[-0.02em]">2-4 Weeks</span>
                </div>
                <div className="w-full h-px bg-border"></div>
                <div>
                  <span className="block zenith-micro mb-2">DELIVERABLE</span>
                  <span className="block text-[16px] font-light">Interactive high-fidelity prototype</span>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-border"></div>

            {/* Landing Page Improvement (Coming Soon) */}
            <div className="grid md:grid-cols-12 gap-[40px] md:gap-[80px] items-start opacity-70">
              <div className="md:col-span-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-4 h-4 bg-border rounded-none"></div>
                  <span className="zenith-micro">04. CONVERSION (COMING SOON)</span>
                </div>
                <h3 className="text-[36px] md:text-[48px] font-normal mb-[24px] tracking-[-0.03em] leading-[1.1] text-text-secondary">Landing Page Improvement</h3>
                <p className="text-[16px] text-text-secondary leading-[1.6] font-light mb-[40px] max-w-[600px]">
                  Restructure messaging and flow to increase clarity and conversion. Launching after the core product services are grounded.
                </p>
                <button className="zenith-btn opacity-50 cursor-not-allowed">
                  JOIN WAITLIST
                </button>
              </div>
              <div className="md:col-span-4 bg-background p-10 border border-border flex flex-col gap-8">
                <div>
                  <span className="block zenith-micro mb-2 text-text-secondary">STATUS</span>
                  <span className="block text-[24px] font-normal tracking-[-0.02em] text-text-secondary">In Development</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="w-full relative overflow-hidden text-white py-[140px] text-center">
        {/* Background Gradient top half for continuous effect */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#8C7362] to-[#705849]"></div>
        
        <div className="relative z-10 px-6 lg:px-[100px] max-w-[800px] mx-auto">
          <h2 className="text-[36px] md:text-[48px] font-light tracking-[-0.03em] mb-[24px] leading-[1.1]">Unsure of the optimal path?</h2>
          <p className="text-[18px] text-white/90 mb-[48px] leading-[1.6] font-light max-w-[600px] mx-auto">
            Book a quick call to discuss where your product is struggling, and we'll figure out the best approach.
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