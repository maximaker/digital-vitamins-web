"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight } from "@phosphor-icons/react";

interface WaitlistOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistOverlay({ isOpen, onClose }: WaitlistOverlayProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Auto close after success
      setTimeout(() => {
        onClose();
        // Reset state after close animation
        setTimeout(() => setIsSuccess(false), 500);
      }, 3000);
    }, 1000);
  };

  if (!isOpen && !isSuccess) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex justify-end transition-opacity duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-[#181412]/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Slide-over panel */}
      <div 
        className={`relative w-full max-w-md h-full bg-surface border-l border-border shadow-2xl flex flex-col transform transition-transform duration-500 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border bg-background">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-primary/80 rounded-full animate-pulse"></div>
            <span className="zenith-micro text-text-primary tracking-widest">INTEREST LIST</span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Close panel"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 bg-background">
          {isSuccess ? (
            <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-surface border border-border rounded-full flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
              </div>
              <h3 className="text-[28px] font-normal tracking-[-0.02em] text-text-primary mb-4">You're on the list.</h3>
              <p className="text-[16px] text-text-secondary font-light leading-[1.6]">
                We'll reach out as soon as the Landing Page Improvement service officially launches.
              </p>
            </div>
          ) : (
            <div className="animate-in fade-in duration-500">
              <h2 className="text-[32px] font-normal tracking-[-0.02em] text-text-primary mb-4 leading-[1.1]">
                Secure early access.
              </h2>
              <p className="text-[15px] text-text-secondary font-light leading-[1.6] mb-8">
                Drop your details below. You'll be the first to know when we open spots, and you'll receive special launch pricing.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block zenith-micro mb-2 text-text-primary">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-surface border border-border px-4 py-3 text-[15px] focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block zenith-micro mb-2 text-text-primary">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-surface border border-border px-4 py-3 text-[15px] focus:outline-none focus:border-primary transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="url" className="block zenith-micro mb-2 text-text-primary">Landing Page URL (Optional)</label>
                  <input 
                    type="url" 
                    id="url" 
                    className="w-full bg-surface border border-border px-4 py-3 text-[15px] focus:outline-none focus:border-primary transition-colors"
                    placeholder="https://"
                  />
                </div>
                <div>
                  <label htmlFor="goal" className="block zenith-micro mb-2 text-text-primary">What's the main goal of your page?</label>
                  <textarea 
                    id="goal" 
                    rows={4}
                    className="w-full bg-surface border border-border px-4 py-3 text-[15px] focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="e.g. Sign up for a trial, book a demo, etc."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full zenith-btn justify-center mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "JOINING..." : "JOIN THE WAITLIST"} 
                  {!isSubmitting && <ArrowRight weight="bold" />}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}