import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

export default function CaseStudyPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full zenith-border-b bg-background px-6 lg:px-[100px] pt-[120px] pb-[80px]">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-6 h-px bg-primary"></div>
          <Link href="/examples" className="zenith-micro hover:text-primary transition-colors tracking-widest uppercase">
            ← BACK TO EXAMPLES
          </Link>
        </div>
        <div className="max-w-[800px]">
          <p className="zenith-micro text-text-secondary mb-6">CASE STUDY: ONBOARDING OPTIMIZATION</p>
          <h1 className="text-[48px] md:text-[72px] font-normal tracking-[-0.04em] text-text-primary leading-[1.05] mb-[32px]">
            B2B SaaS Onboarding Flow
          </h1>
          <p className="text-[18px] md:text-[22px] text-text-secondary font-light leading-[1.6] max-w-[600px]">
            How delaying API connection requirements increased onboarding completion rate by 40%.
          </p>
        </div>
      </section>

      <section className="w-full zenith-border-b bg-surface px-6 lg:px-[100px] py-[80px] lg:py-[120px]">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Editorial Sidebar */}
          <aside className="w-full lg:w-[300px] lg:sticky lg:top-[120px] flex flex-col gap-12 shrink-0">
            <div>
              <h3 className="zenith-micro text-text-secondary mb-4">INDUSTRY</h3>
              <p className="text-[15px] text-text-primary">B2B SaaS / Enterprise Data</p>
            </div>
            <div>
              <h3 className="zenith-micro text-text-secondary mb-4">SERVICE</h3>
              <p className="text-[15px] text-text-primary">Flow Fix (Onboarding)</p>
            </div>
            <div>
              <h3 className="zenith-micro text-text-secondary mb-4">KEY RESULT</h3>
              <p className="text-[15px] text-text-primary">+40% completion rate</p>
            </div>
            <div className="pt-8 border-t border-border/50">
              <p className="text-[14px] text-text-secondary font-light leading-[1.6]">
                "Removing the technical blocker from the initial path changed the dynamic. We stopped demanding high effort before proving value."
              </p>
            </div>
          </aside>

          {/* Main Editorial Content */}
          <div className="w-full zenith-prose">
            
            <h2>The Context</h2>
            <p>
              The product is a complex data-management tool designed for enterprise teams. It promises to unify scattered data sources into a single dashboard, providing real-time insights and automated reporting.
            </p>
            <p>
              However, the time-to-value was long, and users were struggling to experience the core benefit of the product during their trial period.
            </p>

            <h2>The Problem</h2>
            <p>
              Analytics showed that a significant portion of users were dropping off on the third step of the onboarding flow. 
            </p>
            <p>
              The flow was structured logically from a technical perspective:
            </p>
            <ul>
              <li>Step 1: Account Creation</li>
              <li>Step 2: Company Details</li>
              <li><strong>Step 3: Connect Data Sources (Requires API Keys)</strong></li>
              <li>Step 4: Enter Dashboard</li>
            </ul>
            <p>
              The problem? The page asked for API keys before the user had seen the dashboard or understood the value of connecting. Finding API keys requires context-switching, opening other applications, and often asking for permission from IT. For a user who is just "kicking the tires," this is a massive point of friction.
            </p>

            <blockquote>
              Users rarely complain about friction; they just leave. Every mandatory step before the "aha" moment is a potential exit point.
            </blockquote>

            <h2>The Diagnosis & Change</h2>
            <p>
              We realized we were demanding high effort before providing any value. We needed to invert the relationship.
            </p>
            <p>
              We restructured the flow to delay the API connection step. The new flow:
            </p>
            <ul>
              <li>Step 1: Account Creation</li>
              <li>Step 2: Company Details</li>
              <li><strong>Step 3: Select interests / use cases</strong></li>
              <li><strong>Step 4: Enter Dashboard (populated with rich, realistic sample data based on their use case)</strong></li>
            </ul>
            <p>
              Now, users could instantly see what the dashboard looked like, interact with charts, and understand the value. The prompt to "Connect Your Real Data" was moved to a contextual banner inside the dashboard, triggered only when they tried to perform a real action or after they had spent a few minutes exploring.
            </p>

            <h2>The Impact</h2>
            <p>
              By removing the technical blocker from the initial onboarding path, the completion rate to the dashboard increased by 40%. 
            </p>
            <p>
              More importantly, because users now understood <em>why</em> they needed to provide an API key (they could see the value it would unlock), the percentage of users who eventually connected a data source increased by 22%. Support tickets asking "where do I find my API key during setup" dropped to zero.
            </p>

          </div>
        </div>
      </section>

      <section className="w-full relative overflow-hidden text-white py-[140px] text-center">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#8C7362] to-[#705849]"></div>
        <div className="relative z-10 px-6 lg:px-[100px] max-w-[800px] mx-auto">
          <h2 className="text-[36px] md:text-[48px] font-light tracking-[-0.03em] mb-[24px] leading-[1.1]">Are your users dropping off?</h2>
          <p className="text-[18px] text-white/90 mb-[48px] leading-[1.6] font-light max-w-[600px] mx-auto">
            Book a quick call to discuss your onboarding flow, and we'll figure out where the friction hides.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="bg-white text-[#5C4538] hover:bg-white/90 transition-colors px-8 py-4 text-[13px] font-medium tracking-widest uppercase flex items-center gap-3">
              BOOK A FLOW FIX <ArrowRight weight="bold" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}