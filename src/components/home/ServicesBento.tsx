"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "health-check",
    title: "UX Health Check",
    description: "A focused review of your product, page, or flow to find what is unclear, inconsistent, or blocking users without a full rebuild.",
    href: "/services/ux-health-check",
  },
  {
    id: "flow-fix",
    title: "Flow Fix",
    description: "A focused improvement of key user flows like onboarding, signup, checkout, booking, or first-use experience.",
    href: "/services/flow-fix",
  },
  {
    id: "prototyping",
    title: "Prototyping",
    description: "Turn rough ideas, unclear flows, or early product concepts into a coherent, clickable interactive prototype.",
    href: "/services/prototyping",
  },
  {
    id: "landing-page",
    title: "Landing Page Improvement",
    description: "Restructure messaging and flow to increase clarity and conversion.",
    href: "/services/landing-page-improvement",
    status: "Coming Soon"
  }
];

export function ServicesBento() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger entrance on scroll
      gsap.fromTo(".bento-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full zenith-border-b px-6 lg:px-[100px] pt-[120px] pb-[120px] bg-background relative overflow-hidden" ref={containerRef}>
      <div className="flex items-center gap-4 mb-8">
        <div className="w-6 h-px bg-text-primary"></div>
        <span className="zenith-micro tracking-widest text-text-secondary">SERVICES</span>
      </div>

      <div className="mb-[80px] max-w-[800px]">
        <h2 className="text-[40px] md:text-[56px] font-normal tracking-[-0.03em] mb-[16px] text-text-primary leading-[1.1]">
          Targeted interventions to solve specific product friction.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="bento-card group flex flex-col h-full bg-surface p-8 border border-border relative overflow-hidden transition-all duration-500 hover:border-text-primary/30"
          >
            {/* Subtle background highlight on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="w-full aspect-[4/3] bg-background mb-8 relative flex items-center justify-center overflow-hidden border border-border/50">
              {service.status && (
                <div className="absolute top-4 left-4 bg-surface px-2 py-1 zenith-micro border border-border z-10 shadow-sm">
                  {service.status}
                </div>
              )}
              
              {/* Abstract illustration that reacts to hover */}
              <div className="w-[60%] h-px bg-border absolute top-1/2 -translate-y-1/2 transition-transform duration-700 ease-out group-hover:scale-x-125"></div>
              <div className="h-[60%] w-px bg-border absolute left-1/2 -translate-x-1/2 transition-transform duration-700 ease-out group-hover:scale-y-125"></div>
              <div className="w-4 h-4 bg-primary/20 absolute rounded-none transition-all duration-500 ease-out group-hover:bg-primary/40 group-hover:scale-150 group-hover:rotate-45"></div>
              
              {/* Scanner line effect on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/50 -translate-y-[10px] opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_ease-in-out_infinite]"></div>
            </div>
            
            <h3 className="text-[20px] font-normal mb-[16px] text-text-primary tracking-[-0.02em] relative z-10">
              {service.title}
            </h3>
            
            <p className="text-[14px] text-text-secondary mb-[32px] flex-grow leading-[1.6] font-light relative z-10">
              {service.description}
            </p>
            
            <div className="mt-auto pt-6 border-t border-border relative z-10 overflow-hidden">
              {service.status ? (
                <span className="zenith-micro text-text-secondary">JOIN WAITLIST</span>
              ) : (
                <Link 
                  href={service.href} 
                  className="zenith-micro hover:text-primary transition-colors flex items-center gap-2 relative inline-flex"
                >
                  <span className="relative">
                    VIEW DETAILS
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}