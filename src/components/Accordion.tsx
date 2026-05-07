"use client";

import { useState } from 'react';

interface AccordionProps {
  question: string;
  answer: React.ReactNode;
}

export function Accordion({ question, answer }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-6 flex justify-between items-center focus:outline-none group"
      >
        <span className="font-medium text-lg group-hover:text-brand-900 transition-colors">
          {question}
        </span>
        <span className="text-gray-400 text-2xl leading-none">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-gray-600 prose prose-gray">
          {answer}
        </div>
      </div>
    </div>
  );
}