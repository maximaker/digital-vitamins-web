"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import gsap from "gsap";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.fromTo(".hero-elem", 
        { opacity: 0, y: 30, filter: "blur(4px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, stagger: 0.1, ease: "expo.out" }
      );
      
      // Floating lines continuous animation
      gsap.to(".arch-line-h", {
        y: "random(-10, 10)",
        duration: "random(3, 5)",
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      
      gsap.to(".arch-line-v", {
        x: "random(-10, 10)",
        duration: "random(3, 5)",
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, containerRef);

    // Mouse parallax for the architectural visual
    const handleMouseMove = (e: MouseEvent) => {
      if (!visualRef.current) return;
      const { left, top, width, height } = visualRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      gsap.to(".parallax-layer-1", { x: x * 30, y: y * 30, duration: 1, ease: "power2.out" });
      gsap.to(".parallax-layer-2", { x: x * -20, y: y * -20, duration: 1.5, ease: "power2.out" });
      gsap.to(".parallax-blur", { x: x * 50, y: y * 50, duration: 2, ease: "power2.out" });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="w-full relative zenith-border-b bg-background overflow-hidden" ref={containerRef}>
      {/* Subtle grid background across the hero */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(var(--color-neutral) 1px, transparent 1px), linear-gradient(90deg, var(--color-neutral) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="flex flex-col lg:flex-row min-h-[85vh]">
        {/* Left Column (Content) */}
        <div className="w-full lg:w-6/12 flex flex-col justify-center px-6 lg:px-[100px] py-32 lg:py-0 border-b lg:border-b-0 lg:border-r border-border relative z-10">
          <div className="hero-elem flex items-center gap-4 mb-12">
            <div className="w-6 h-px bg-primary relative overflow-hidden">
              <div className="absolute inset-0 bg-white w-full h-full animate-[shimmer_2s_infinite]"></div>
            </div>
            <span className="zenith-micro tracking-widest text-text-primary">DIGITAL VITAMINS</span>
          </div>
          
          <h1 className="hero-elem text-[56px] md:text-[88px] font-normal tracking-[-0.04em] text-text-primary leading-[1] mb-[32px] max-w-[800px]">
            Focused UX care for digital products.
          </h1>
          
          <p className="hero-elem text-[18px] md:text-[22px] text-text-secondary font-light mb-[56px] max-w-[480px] leading-[1.6]">
            We help founders and teams diagnose what feels unclear in their websites, apps, and product flows, then improve the parts that matter most.
          </p>
          
          <div className="hero-elem flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <Link href="/contact" className="zenith-btn group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-4">
                Book a checkup 
                <ArrowRight weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Button hover sweep effect */}
              <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
            </Link>
            <Link href="/services" className="zenith-micro hover:text-primary transition-colors py-4 relative group">
              Explore services
              <div className="absolute bottom-2 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"></div>
            </Link>
          </div>
        </div>

        {/* Right Column (Interactive Blueprint Area) */}
        <div className="w-full lg:w-6/12 flex flex-col bg-surface items-center justify-center p-12 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 opacity-50 transition-opacity duration-700 group-hover:opacity-20"></div>
          
          <div 
            ref={visualRef}
            className="hero-elem w-full max-w-[480px] aspect-[4/5] bg-background border border-border relative flex items-center justify-center shadow-sm cursor-crosshair overflow-hidden"
          >
             {/* Dynamic architectural composition */}
             <div className="absolute inset-4 border border-border/30 parallax-layer-2"></div>
             
             {/* Crosshairs */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-border/50 rounded-full parallax-layer-1 flex items-center justify-center">
               <div className="w-1 h-1 bg-primary rounded-full"></div>
             </div>

             <div className="arch-line-h absolute top-1/3 left-0 w-full h-px bg-border/60 parallax-layer-1"></div>
             <div className="arch-line-h absolute top-[66%] left-0 w-full h-px bg-border/60 parallax-layer-1"></div>
             
             <div className="arch-line-v absolute top-0 left-1/3 w-px h-full bg-border/60 parallax-layer-2"></div>
             <div className="arch-line-v absolute top-0 left-[75%] w-px h-full bg-border/60 parallax-layer-2"></div>
             
             <div className="absolute bottom-6 left-6 parallax-layer-2 flex flex-col gap-2">
               <div className="zenith-micro text-text-primary bg-surface/90 px-3 py-1.5 border border-border backdrop-blur-sm">
                 SYSTEM DIAGNOSTIC: ACTIVE
               </div>
               <div className="zenith-micro text-text-secondary text-[9px]">
                 LAT: 45.2 • LNG: 12.8 • FLX: OPTIMAL
               </div>
             </div>
             
             {/* Fluid gradient orb */}
             <div className="parallax-blur w-48 h-48 bg-primary/20 rounded-full blur-[40px] absolute top-1/4 right-1/4 mix-blend-multiply"></div>
             <div className="parallax-blur w-32 h-32 bg-[#F0FA06]/10 rounded-full blur-[30px] absolute bottom-1/3 left-1/4 mix-blend-multiply" style={{ transitionDelay: "0.1s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}