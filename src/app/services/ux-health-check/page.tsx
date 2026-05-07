import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

export default function UXHealthCheckPage() {
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
            Find out where your digital product is losing clarity.
          </h1>
          <p className="text-[18px] md:text-[22px] text-text-secondary font-light leading-[1.6] max-w-[600px] mb-12">
            A UX health check is a focused review of your product, page, or flow. It helps identify what is confusing, inconsistent, heavy, or likely to make users hesitate.
          </p>
          <Link href="/contact" className="zenith-btn">
            BOOK A UX HEALTH CHECK <ArrowRight weight="bold" />
          </Link>
        </div>
      </section>

      <section className="w-full zenith-border-b bg-surface px-6 lg:px-[100px] py-[120px]">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-[32px] md:text-[40px] font-normal tracking-[-0.02em] mb-[32px] text-text-primary">
            When you are too close to the product, friction becomes invisible.
          </h2>
          <div className="space-y-[24px] text-[16px] text-text-secondary font-light leading-[1.8] mb-20 max-w-[800px]">
            <p>You know how the product works. You know why things are placed where they are. You know what the user is supposed to understand.</p>
            <p>New users do not have that context.</p>
            <p>A UX health check looks at the experience from the outside and shows where clarity breaks.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-[40px] md:gap-[80px] mb-20">
            <div className="bg-background p-10 border border-border shadow-sm">
              <h3 className="zenith-micro mb-8 text-primary">WHAT IS REVIEWED</h3>
              <ul className="space-y-4 text-[16px] text-text-secondary font-light">
                <li className="flex gap-3"><span className="text-primary">→</span> First impression & Message clarity</li>
                <li className="flex gap-3"><span className="text-primary">→</span> Navigation and structure</li>
                <li className="flex gap-3"><span className="text-primary">→</span> Main user actions & Visual hierarchy</li>
                <li className="flex gap-3"><span className="text-primary">→</span> Friction points & Trust signals</li>
                <li className="flex gap-3"><span className="text-primary">→</span> Empty states and unclear states</li>
                <li className="flex gap-3"><span className="text-primary">→</span> Microcopy, labels, and user effort</li>
              </ul>
            </div>
            <div className="bg-background p-10 border border-border shadow-sm">
              <h3 className="zenith-micro mb-8 text-primary">WHAT YOU RECEIVE</h3>
              <ul className="space-y-4 text-[16px] text-text-secondary font-light">
                <li className="flex gap-3"><span className="text-text-primary">✓</span> Clear list of UX issues with priority</li>
                <li className="flex gap-3"><span className="text-text-primary">✓</span> Explanation of why each issue matters</li>
                <li className="flex gap-3"><span className="text-text-primary">✓</span> Suggested quick wins & deeper fixes</li>
                <li className="flex gap-3"><span className="text-text-primary">✓</span> Annotated screenshots</li>
                <li className="flex gap-3"><span className="text-text-primary">✓</span> Optional walkthrough call</li>
              </ul>
            </div>
          </div>

          <div className="bg-background p-12 border border-border mb-20 shadow-sm">
            <h3 className="text-[24px] font-normal mb-8 tracking-[-0.01em] text-text-primary">The Process</h3>
            <ol className="space-y-6 text-[16px] text-text-secondary font-light">
              <li className="flex gap-4 border-b border-border pb-6"><span className="font-medium text-primary zenith-micro pt-1">01</span> You send the product, page, or flow.</li>
              <li className="flex gap-4 border-b border-border pb-6"><span className="font-medium text-primary zenith-micro pt-1">02</span> We clarify the goal and user context.</li>
              <li className="flex gap-4 border-b border-border pb-6"><span className="font-medium text-primary zenith-micro pt-1">03</span> I review the experience.</li>
              <li className="flex gap-4 border-b border-border pb-6"><span className="font-medium text-primary zenith-micro pt-1">04</span> I document the findings.</li>
              <li className="flex gap-4"><span className="font-medium text-primary zenith-micro pt-1">05</span> We discuss the most useful next steps.</li>
            </ol>
          </div>

          <div className="border border-border p-10 bg-background/50">
            <h3 className="zenith-micro mb-6 text-text-primary">NOT BEST FOR</h3>
            <ul className="space-y-4 text-[15px] text-text-secondary font-light">
              <li className="flex gap-3"><span className="text-text-primary/50">×</span> You only want visual redesign without diagnosis</li>
              <li className="flex gap-3"><span className="text-text-primary/50">×</span> You need full implementation immediately</li>
              <li className="flex gap-3"><span className="text-text-primary/50">×</span> You already know exactly what needs to change and only need production support</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full relative overflow-hidden text-white py-[140px] text-center">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#8C7362] to-[#705849]"></div>
        <div className="relative z-10 px-6 lg:px-[100px] max-w-[800px] mx-auto">
          <h2 className="text-[36px] md:text-[48px] font-light tracking-[-0.03em] mb-[24px] leading-[1.1]">Ready to find the friction?</h2>
          <p className="text-[18px] text-white/90 mb-[48px] leading-[1.6] font-light max-w-[600px] mx-auto">
            Send a few details about your product and let's begin the diagnosis.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="bg-white text-[#5C4538] hover:bg-white/90 transition-colors px-8 py-4 text-[13px] font-medium tracking-widest uppercase flex items-center gap-3">
              BOOK A UX HEALTH CHECK <ArrowRight weight="bold" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}