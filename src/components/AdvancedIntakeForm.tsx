"use client";

import { useState } from "react";
import { ArrowRight } from "@phosphor-icons/react";

export function AdvancedIntakeForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    link: '',
    help_type: '',
    issue: '',
    outcome: '',
    timeline: '',
    budget: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    setStep(3); // Move to success step
  };

  return (
    <div className="w-full max-w-[800px] mx-auto bg-surface p-8 lg:p-12 shadow-sm border border-border">
      {/* Progress Indicator */}
      {step < 3 && (
        <div className="mb-12 flex items-center justify-between border-b border-border pb-6">
          <div className="flex gap-2">
            <div className={`h-1 w-10 ${step >= 1 ? 'bg-primary' : 'bg-background'}`}></div>
            <div className={`h-1 w-10 ${step >= 2 ? 'bg-primary' : 'bg-background'}`}></div>
          </div>
          <span className="zenith-micro">STEP 0{step} / 02</span>
        </div>
      )}

      {/* Reassurance Copy (Only on step 1) */}
      {step === 1 && (
        <div className="mb-10 bg-background p-6 border-l-4 border-primary">
          <p className="text-[15px] text-text-secondary leading-[1.6]">
            <strong>Note:</strong> You do not need a polished brief. A working link and a sense of what feels off are enough to start.
          </p>
        </div>
      )}

      {step === 1 && (
        <form onSubmit={(e) => { e.preventDefault(); nextStep(); }} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="name" className="text-[15px] font-medium text-text-primary block">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 bg-background border border-border focus:border-primary outline-none transition-colors rounded-none" 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-[15px] font-medium text-text-primary block">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 bg-background border border-border focus:border-primary outline-none transition-colors rounded-none" 
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="company" className="text-[15px] font-medium text-text-primary block">Company / Product Name</label>
              <input 
                type="text" 
                id="company" 
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-4 bg-background border border-border focus:border-primary outline-none transition-colors rounded-none" 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="link" className="text-[15px] font-medium text-text-primary block">Product Link (if applicable)</label>
              <input 
                type="url" 
                id="link" 
                name="link"
                value={formData.link}
                onChange={handleChange}
                placeholder="https://"
                className="w-full p-4 bg-background border border-border focus:border-primary outline-none transition-colors rounded-none" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="help_type" className="text-[15px] font-medium text-text-primary block">What kind of help are you looking for?</label>
            <select 
              id="help_type" 
              name="help_type"
              required
              value={formData.help_type}
              onChange={handleChange}
              className="w-full p-4 bg-background border border-border focus:border-primary outline-none transition-colors rounded-none appearance-none"
            >
              <option value="" disabled>Select an option...</option>
              <option value="health-check">UX Health Check (Review & Diagnosis)</option>
              <option value="flow-fix">Flow Fix (Improve a specific journey)</option>
              <option value="prototyping">Prototyping (Visualize a new idea)</option>
              <option value="not-sure">I'm not sure yet</option>
            </select>
          </div>

          <div className="pt-6 flex justify-end">
            <button 
              type="submit" 
              className="zenith-btn"
            >
              CONTINUE TO DETAILS
              <ArrowRight weight="bold" />
            </button>
          </div>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <label htmlFor="issue" className="text-[15px] font-medium text-text-primary block">What feels off about the current experience?</label>
            <p className="text-[13px] text-text-secondary mb-2">Short and honest is better than polished. Where do users get stuck?</p>
            <textarea 
              id="issue" 
              name="issue"
              required
              value={formData.issue}
              onChange={handleChange}
              rows={4} 
              className="w-full p-4 bg-background border border-border focus:border-primary outline-none transition-colors rounded-none resize-y"
            ></textarea>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="timeline" className="text-[15px] font-medium text-text-primary block">Ideal Timeline</label>
              <input 
                type="text" 
                id="timeline" 
                name="timeline"
                placeholder="e.g., Next month, Q3"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full p-4 bg-background border border-border focus:border-primary outline-none transition-colors rounded-none" 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="budget" className="text-[15px] font-medium text-text-primary block">Budget range (Optional)</label>
              <input 
                type="text" 
                id="budget" 
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full p-4 bg-background border border-border focus:border-primary outline-none transition-colors rounded-none" 
              />
            </div>
          </div>

          <div className="pt-6 flex justify-between">
            <button 
              type="button" 
              onClick={prevStep}
              className="px-6 py-4 border border-border hover:bg-background transition-colors text-[13px] tracking-widest font-medium text-text-secondary"
            >
              BACK
            </button>
            <button 
              type="submit" 
              className="zenith-btn"
            >
              SUBMIT REQUEST
              <ArrowRight weight="bold" />
            </button>
          </div>
        </form>
      )}

      {step === 3 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-background rounded-none flex items-center justify-center mx-auto mb-6 border border-border">
            <ArrowRight weight="bold" className="text-primary w-8 h-8" />
          </div>
          <h3 className="text-[32px] font-normal tracking-[-0.02em] text-text-primary mb-4">Request Received.</h3>
          <p className="text-[16px] text-text-secondary font-light leading-[1.6] max-w-[400px] mx-auto">
            Thank you for sharing the details. I will review the information and get back to you within 24 hours to discuss the next steps.
          </p>
        </div>
      )}
    </div>
  );
}