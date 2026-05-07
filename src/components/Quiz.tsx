"use client";

import { useState } from 'react';
import Link from 'next/link';

type ServiceType = 'health_check' | 'flow_fix' | 'prototyping' | 'landing_page';

const QUESTIONS = [
  {
    id: 'q1',
    text: 'What best describes your current situation?',
    options: [
      { text: 'We have a product, but users seem confused or drop off randomly.', result: 'health_check' },
      { text: 'Users consistently get stuck in a specific process (like signup or checkout).', result: 'flow_fix' },
      { text: 'We have an idea or rough MVP, but it needs clear structure before we build further.', result: 'prototyping' },
      { text: 'Our product is good, but our landing page isn\'t converting visitors.', result: 'landing_page' },
    ]
  },
  {
    id: 'q2',
    text: 'What kind of help are you looking for?',
    options: [
      { text: 'I need someone to diagnose what\'s wrong and tell me what to fix.', result: 'health_check' },
      { text: 'I need a specific user journey redesigned to be frictionless.', result: 'flow_fix' },
      { text: 'I need a clickable prototype to test with users or show investors.', result: 'prototyping' },
      { text: 'I need to restructure our main marketing page so the offer is clear.', result: 'landing_page' },
    ]
  }
];

const SERVICE_MAP: Record<ServiceType, { title: string, description: string, href: string }> = {
  health_check: {
    title: 'UX Health Check',
    description: 'Based on your answers, you need a focused diagnostic review to uncover hidden friction and prioritize what to fix first.',
    href: '/services/ux-health-check'
  },
  flow_fix: {
    title: 'Flow Fix',
    description: 'Based on your answers, you need targeted improvements to a specific user journey to reduce drop-off and frustration.',
    href: '/services/flow-fix'
  },
  prototyping: {
    title: 'Prototyping Service',
    description: 'Based on your answers, you need a structured prototype to bring clarity to your idea before investing in development.',
    href: '/services/prototyping'
  },
  landing_page: {
    title: 'Landing Page Improvement',
    description: 'Based on your answers, you need a clearer page structure and messaging to communicate your value and increase conversions.',
    href: '/services/landing-page-improvement'
  }
};

export function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<Record<ServiceType, number>>({
    health_check: 0,
    flow_fix: 0,
    prototyping: 0,
    landing_page: 0
  });
  const [isComplete, setIsComplete] = useState(false);

  const handleSelect = (result: ServiceType) => {
    const newScores = { ...scores, [result]: scores[result] + 1 };
    setScores(newScores);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  const getResult = () => {
    let topService: ServiceType = 'health_check';
    let maxScore = -1;
    
    for (const [service, score] of Object.entries(scores)) {
      if (score > maxScore) {
        maxScore = score;
        topService = service as ServiceType;
      }
    }
    
    return SERVICE_MAP[topService];
  };

  if (isComplete) {
    const result = getResult();
    return (
      <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm text-center">
        <h3 className="text-gray-500 font-medium tracking-wide uppercase text-sm mb-4">Recommended Service</h3>
        <h2 className="text-3xl font-medium mb-4 text-brand-900">{result.title}</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">{result.description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={result.href} className="bg-surface text-foreground px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
            Read more about this
          </Link>
          <Link href="/contact" className="bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
            Book this service
          </Link>
        </div>
        <button 
          onClick={() => {
            setCurrentStep(0);
            setScores({ health_check: 0, flow_fix: 0, prototyping: 0, landing_page: 0 });
            setIsComplete(false);
          }}
          className="mt-8 text-sm text-gray-400 hover:text-gray-600 underline"
        >
          Retake quiz
        </button>
      </div>
    );
  }

  const question = QUESTIONS[currentStep];

  return (
    <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm">
      <div className="mb-8 flex justify-between items-end">
        <h2 className="text-2xl font-medium text-foreground max-w-lg leading-snug">{question.text}</h2>
        <span className="text-sm font-medium text-brand-500 bg-brand-50 px-3 py-1 rounded-full">
          {currentStep + 1} / {QUESTIONS.length}
        </span>
      </div>
      
      <div className="space-y-3">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(option.result as ServiceType)}
            className="w-full text-left p-5 rounded-xl border border-gray-200 hover:border-brand-500 hover:bg-brand-50 transition-all group"
          >
            <span className="text-gray-700 group-hover:text-brand-900">{option.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}