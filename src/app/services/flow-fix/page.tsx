import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

export default function FlowFixPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full zenith-border-b bg-background px-6 lg:px-[100px] pt-[120px] pb-[80px]">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-6 h-px bg-primary"></div>
          <Link href="/services" className="zenith-micro hover:text-primary transition-colors tracking-widest">
            ← BACK TO SERVICES
          </Link>
        </div>
        <div className="max-w-[800px]">
          <h1 className="text-[56px] md:text-[88px] font-normal tracking-[-0.04em] text-text-primary leading-[1] mb-[32px]">
            Fix the moments where users hesitate, drop off, or get confused.
          </h1>
          <p className="text-[18px] md:text-[22px] text-text-secondary font-light leading-[1.6] max-w-[600px] mb-12">
            Flow fix is a focused UX service for improving key product journeys like onboarding, signup, checkout, booking, account setup, or first-use experience.
          </p>
          <Link href="/contact" className="zenith-btn">
            FIX A PRODUCT FLOW <ArrowRight weight="bold" />
          </Link>
        </div>
      </section>

      <section className="w-full zenith-border-b bg-surface px-6 lg:px-[100px] py-[120px]">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-[32px] md:text-[40px] font-normal tracking-[-0.02em] mb-[32px] text-text-primary">
            Most friction hides between steps.
          </h2>
          <div className="space-y-[24px] text-[16px] text-text-secondary font-light leading-[1.8] mb-20 max-w-[800px]">
            <p>A single screen may look fine on its own, but the experience can still feel heavy when users move from one step to the next.</p>
            <p>Flow fix looks at the full path, not isolated screens.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-[40px] md:gap-[80px] mb-20">
            <div className="bg-background p-10 border border-border shadow-sm">
              <h3 className="zenith-micro mb-8 text-primary">FLOW EXAMPLES</h3>
              <ul className="space-y-4 text-[16px] text-text-secondary font-light">
                <li className="flex gap-3"><span className="text-primary">→</span> Signup & Onboarding</li>
                <li className="flex gap-3"><span className="text-primary">→</span> Trial activation</li>
                <li className="flex gap-3"><span className="text-primary">→</span> Checkout & Booking</li>
                <li className="flex gap-3"><span className="text-primary">→</span> Account setup</li>
                <li className="flex gap-3"><span className="text-primary">→</span> Client intake</li>
                <li className="flex gap-3"><span className="text-primary">→</span> Dashboard first-use</li>
              </ul>
            </div>
            <div className="bg-background p-10 border border-border shadow-sm">
              <h3 className="zenith-micro mb-8 text-primary">WHAT YOU RECEIVE</h3>
              <ul className="space-y-4 text-[16px] text-text-secondary font-light">
                <li className="flex gap-3"><span className="text-text-primary">✓</span> Flow map or annotated journey</li>
                <li className="flex gap-3"><span className="text-text-primary">✓</span> Friction point diagnosis</li>
                <li className="flex gap-3"><span className="text-text-primary">✓</span> Improved screen structure</li>
                <li className="flex gap-3"><span className="text-text-primary">✓</span> Copy and interaction notes</li>
                <li className="flex gap-3"><span className="text-text-primary">✓</span> Wireframes or redesigned screens</li>
              </ul>
            </div>
          </div>

          <div className="bg-background p-12 border border-border mb-20 shadow-sm">
            <h3 className="text-[24px] font-normal mb-8 tracking-[-0.01em] text-text-primary">Best For</h3>
            <ul className="space-y-6 text-[16px] text-text-secondary font-light">
              <li className="flex gap-4 border-b border-border pb-6"><span className="font-medium text-primary zenith-micro pt-1">01</span> Products with drop-off in a known flow</li>
              <li className="flex gap-4 border-b border-border pb-6"><span className="font-medium text-primary zenith-micro pt-1">02</span> Teams that receive repeated support questions</li>
              <li className="flex gap-4 border-b border-border pb-6"><span className="font-medium text-primary zenith-micro pt-1">03</span> Apps where users fail to reach the "aha" moment</li>
              <li className="flex gap-4"><span className="font-medium text-primary zenith-micro pt-1">04</span> Service businesses with digital intake or booking flows</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full relative overflow-hidden text-white py-[140px] text-center">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#8C7362] to-[#705849]"></div>
        <div className="relative z-10 px-6 lg:px-[100px] max-w-[800px] mx-auto">
          <h2 className="text-[36px] md:text-[48px] font-light tracking-[-0.03em] mb-[24px] leading-[1.1]">Ready to smooth out the journey?</h2>
          <p className="text-[18px] text-white/90 mb-[48px] leading-[1.6] font-light max-w-[600px] mx-auto">
            Send a few details about your product and let's discuss how we can improve the flow.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="bg-white text-[#5C4538] hover:bg-white/90 transition-colors px-8 py-4 text-[13px] font-medium tracking-widest uppercase flex items-center gap-3">
              FIX A PRODUCT FLOW <ArrowRight weight="bold" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}