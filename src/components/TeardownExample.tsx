import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

interface TeardownExampleProps {
  title: string;
  context: string;
  problem: string;
  change: string;
  impact: string;
  href?: string;
}

export function TeardownExample({ title, context, problem, change, impact, href }: TeardownExampleProps) {
  return (
    <article className="bg-background border border-border p-8 md:p-12 shadow-sm transition-all hover:border-text-primary/30 group">
      <h3 className="text-[32px] font-normal mb-10 text-text-primary tracking-[-0.02em]">{title}</h3>
      
      <div className="space-y-8">
        <div className="grid md:grid-cols-12 gap-4 border-b border-border/50 pb-8">
          <div className="md:col-span-3 font-medium text-text-secondary zenith-micro pt-1">CONTEXT</div>
          <div className="md:col-span-9 text-[16px] text-text-secondary font-light leading-[1.6]">{context}</div>
        </div>
        
        <div className="grid md:grid-cols-12 gap-4 border-b border-border/50 pb-8">
          <div className="md:col-span-3 font-medium text-primary zenith-micro pt-1">PROBLEM</div>
          <div className="md:col-span-9 text-[16px] text-text-secondary font-light leading-[1.6]">{problem}</div>
        </div>
        
        <div className="grid md:grid-cols-12 gap-4 border-b border-border/50 pb-8">
          <div className="md:col-span-3 font-medium text-text-secondary zenith-micro pt-1">CHANGE</div>
          <div className="md:col-span-9 text-[16px] text-text-secondary font-light leading-[1.6]">{change}</div>
        </div>
        
        <div className="grid md:grid-cols-12 gap-4">
          <div className="md:col-span-3 font-medium text-text-primary zenith-micro pt-1">IMPACT</div>
          <div className="md:col-span-9 text-[16px] text-text-primary font-medium leading-[1.6]">{impact}</div>
        </div>
      </div>
      
      {href && (
        <div className="mt-12 pt-8 border-t border-border flex justify-end">
          <Link href={href} className="zenith-btn-outline group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
            VIEW CASE STUDY <ArrowRight weight="bold" className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      )}
    </article>
  );
}