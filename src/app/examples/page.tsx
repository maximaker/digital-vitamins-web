"use client";

import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react';
import { TeardownExample } from '@/components/TeardownExample';

export default function ExamplesPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full zenith-border-b bg-background px-6 lg:px-[100px] pt-[120px] pb-[80px]">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-6 h-px bg-primary"></div>
          <span className="zenith-micro tracking-widest">EXAMPLES</span>
        </div>
        <div className="max-w-[800px]">
          <h1 className="text-[56px] md:text-[88px] font-normal tracking-[-0.04em] text-text-primary leading-[1] mb-[32px]">
            Focused UX care.
          </h1>
          <p className="text-[18px] md:text-[22px] text-text-secondary font-light leading-[1.6] max-w-[600px]">
            A few examples of how small design decisions can improve clarity, reduce friction, and make digital products easier to use.
          </p>
        </div>
      </section>

      <section className="w-full zenith-border-b bg-surface px-6 lg:px-[100px] py-[120px]">
        <div className="max-w-[800px] mx-auto space-y-12">
          <TeardownExample 
            title="B2B SaaS Onboarding Flow"
            context="A complex data-management tool for enterprise teams."
            problem="Users were dropping off on the third step of onboarding. The page asked for API keys before the user had seen the dashboard or understood the value of connecting."
            change="Restructured the flow to delay API connection. Let users enter the dashboard, see sample data, and trigger the connection step only when they tried to perform a real action."
            impact="Onboarding completion rate increased by 40%, and support tickets asking 'where do I find my API key' dropped to zero."
            href="/examples/b2b-saas-onboarding"
          />

          <TeardownExample 
            title="Service Business Client Intake"
            context="A high-end consulting firm capturing leads."
            problem="The contact form looked elegant but converted poorly. It used vague labels like 'What's your vision?' and asked for budget ranges too early, causing hesitation."
            change="Rewrote labels to be concrete ('What are you trying to improve?'). Removed the budget dropdown and replaced it with a multi-step form that asked easier questions first."
            impact="Form submissions doubled, and the quality of the initial inquiry improved significantly because the questions guided the user's thinking."
          />

          <TeardownExample 
            title="AI Prototype Clarity"
            context="An AI-generated MVP for a scheduling tool."
            problem="The AI built a functional tool, but the interface lacked hierarchy. Every button looked like a primary action, and there were no empty states to guide a new user."
            change="Established clear visual hierarchy (one primary action per screen). Designed friendly, instructive empty states that told users exactly what to click to start."
            impact="The prototype felt like a premium, trustworthy product, allowing the founders to secure their next round of funding."
          />
        </div>
      </section>

      <section className="w-full relative overflow-hidden text-white py-[140px] text-center">
        {/* Background Gradient top half for continuous effect */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#8C7362] to-[#705849]"></div>
        
        <div className="relative z-10 px-6 lg:px-[100px] max-w-[800px] mx-auto">
          <h2 className="text-[36px] md:text-[48px] font-light tracking-[-0.03em] mb-[24px] leading-[1.1]">See what we can do for your product.</h2>
          <p className="text-[18px] text-white/80 mb-[48px] leading-[1.6] font-light max-w-[600px] mx-auto">
            Send a short description of what feels unclear and we can decide the right starting point.
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