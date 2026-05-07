import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

export default function PrototypingPage() {
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
            Turn a rough product idea into a clear, clickable prototype.
          </h1>
          <p className="text-[18px] md:text-[22px] text-text-secondary font-light leading-[1.6] max-w-[600px] mb-12">
            A focused prototyping service for founders and teams who need to shape an idea, flow, or early product concept into something clear enough to test, explain, show, or build from.
          </p>
          <Link href="/contact" className="zenith-btn">
            START A PROTOTYPE SPRINT <ArrowRight weight="bold" />
          </Link>
        </div>
      </section>

      <section className="w-full zenith-border-b bg-surface px-6 lg:px-[100px] py-[120px]">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-[32px] md:text-[40px] font-normal tracking-[-0.02em] mb-[32px] text-text-primary">
            Ideas often feel clear in your head before they are clear on screen.
          </h2>
          <div className="space-y-[24px] text-[16px] text-text-secondary font-light leading-[1.8] mb-20 max-w-[800px]">
            <p>You may know what the product should do, who it should help, and why it matters. But once it becomes screens, flows, and decisions, the gaps start to appear.</p>
            <p>A prototype makes the idea visible. A good prototype also makes it easier to question, test, improve, and explain.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-[40px] md:gap-[80px] mb-20">
            <div className="bg-background p-10 border border-border shadow-sm">
              <h3 className="zenith-micro mb-8 text-primary">WHAT GETS CLARIFIED</h3>
              <ul className="space-y-4 text-[16px] text-text-secondary font-light">
                <li className="flex gap-3"><span className="text-primary">→</span> Core user journey</li>
                <li className="flex gap-3"><span className="text-primary">→</span> Information structure</li>
                <li className="flex gap-3"><span className="text-primary">→</span> Interaction logic</li>
                <li className="flex gap-3"><span className="text-primary">→</span> Content and microcopy needs</li>
                <li className="flex gap-3"><span className="text-primary">→</span> Gaps, assumptions, and risky areas</li>
              </ul>
            </div>
            <div className="bg-background p-10 border border-border shadow-sm">
              <h3 className="zenith-micro mb-8 text-primary">WHAT YOU RECEIVE</h3>
              <ul className="space-y-4 text-[16px] text-text-secondary font-light">
                <li className="flex gap-3"><span className="text-text-primary">✓</span> Product flow map</li>
                <li className="flex gap-3"><span className="text-text-primary">✓</span> Core screen structure</li>
                <li className="flex gap-3"><span className="text-text-primary">✓</span> Clickable prototype</li>
                <li className="flex gap-3"><span className="text-text-primary">✓</span> UX notes and rationale</li>
                <li className="flex gap-3"><span className="text-text-primary">✓</span> Suggested next build steps</li>
              </ul>
            </div>
          </div>

          <div className="bg-background p-12 border border-border mb-20 shadow-sm">
            <h3 className="text-[24px] font-normal mb-8 tracking-[-0.01em] text-text-primary">The Process</h3>
            <ol className="space-y-6 text-[16px] text-text-secondary font-light">
              <li className="flex gap-4 border-b border-border pb-6"><span className="font-medium text-primary zenith-micro pt-1">01</span> Clarify the idea, user, and goal</li>
              <li className="flex gap-4 border-b border-border pb-6"><span className="font-medium text-primary zenith-micro pt-1">02</span> Map the main product journey</li>
              <li className="flex gap-4 border-b border-border pb-6"><span className="font-medium text-primary zenith-micro pt-1">03</span> Define the screens and decisions needed</li>
              <li className="flex gap-4 border-b border-border pb-6"><span className="font-medium text-primary zenith-micro pt-1">04</span> Create the prototype structure</li>
              <li className="flex gap-4"><span className="font-medium text-primary zenith-micro pt-1">05</span> Refine the experience into something clear and usable</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="w-full relative overflow-hidden text-white py-[140px] text-center">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#8C7362] to-[#705849]"></div>
        <div className="relative z-10 px-6 lg:px-[100px] max-w-[800px] mx-auto">
          <h2 className="text-[36px] md:text-[48px] font-light tracking-[-0.03em] mb-[24px] leading-[1.1]">Ready to make it concrete?</h2>
          <p className="text-[18px] text-white/90 mb-[48px] leading-[1.6] font-light max-w-[600px] mx-auto">
            Send a few details about your product and let's discuss how we can visualize it.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="bg-white text-[#5C4538] hover:bg-white/90 transition-colors px-8 py-4 text-[13px] font-medium tracking-widest uppercase flex items-center gap-3">
              START A PROTOTYPE SPRINT <ArrowRight weight="bold" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}