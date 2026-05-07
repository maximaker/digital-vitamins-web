"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

type Symptom = {
  id: string;
  label: string;
  serviceId: string;
  recommendation: string;
  link: string;
};

const symptoms: Symptom[] = [
  {
    id: "drop-off",
    label: "Users are dropping off during onboarding or checkout.",
    serviceId: "flow-fix",
    recommendation: "You likely need a Flow Fix to streamline that specific journey and remove the friction causing the drop-off.",
    link: "/services/flow-fix"
  },
  {
    id: "unclear",
    label: "I know something is wrong, but I cannot name exactly what it is.",
    serviceId: "health-check",
    recommendation: "A UX Health Check is the best starting point. We'll diagnose the entire experience before committing to design changes.",
    link: "/services/ux-health-check"
  },
  {
    id: "idea",
    label: "We have a rough idea, but we need to make it visible to test it.",
    serviceId: "prototyping",
    recommendation: "The Prototyping service will turn your rough concepts into a clickable, testable artifact quickly.",
    link: "/services/prototyping"
  },
  {
    id: "conversion",
    label: "Our page doesn't explain the offer well, and we aren't converting.",
    serviceId: "landing-page",
    recommendation: "This requires Landing Page Improvement (Currently in development). You can join the waitlist or book a checkup to discuss.",
    link: "/services/landing-page-improvement"
  }
];

export function SymptomSelector() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedSymptom = symptoms.find(s => s.id === selectedId);

  return (
    <div className="w-full bg-surface border border-border p-8 lg:p-12 shadow-sm">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-4 h-4 bg-primary rounded-none"></div>
        <span className="zenith-micro">DIAGNOSTIC SELECTOR</span>
      </div>
      
      <h3 className="text-[28px] md:text-[32px] font-normal tracking-[-0.02em] mb-8 text-text-primary">
        What feels off about your product right now?
      </h3>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-3">
          {symptoms.map((symptom) => (
            <button
              key={symptom.id}
              onClick={() => setSelectedId(symptom.id)}
              className={`text-left p-4 border transition-all ${
                selectedId === symptom.id 
                  ? 'border-primary bg-background shadow-sm' 
                  : 'border-border hover:border-text-secondary bg-surface'
              }`}
            >
              <span className={`text-[15px] leading-[1.6] ${selectedId === symptom.id ? 'font-medium text-text-primary' : 'font-light text-text-secondary'}`}>
                {symptom.label}
              </span>
            </button>
          ))}
        </div>

        <div className="bg-background border border-border p-8 flex flex-col justify-center min-h-[250px]">
          {!selectedSymptom ? (
            <div className="text-center text-text-secondary">
              <span className="zenith-micro block mb-4 opacity-50">WAITING FOR INPUT</span>
              <p className="text-[15px] font-light">Select a symptom on the left to see the recommended treatment path.</p>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <span className="zenith-micro block mb-4 text-primary">RECOMMENDED PATH</span>
              <p className="text-[18px] text-text-primary leading-[1.6] mb-8">
                {selectedSymptom.recommendation}
              </p>
              <Link 
                href={selectedSymptom.link}
                className="zenith-btn"
              >
                {selectedSymptom.serviceId === 'landing-page' ? 'JOIN WAITLIST' : 'VIEW DETAILS'}
                <ArrowRight weight="bold" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}