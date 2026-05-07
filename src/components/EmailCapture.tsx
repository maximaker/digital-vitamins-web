"use client";

import { useState } from 'react';

export function EmailCapture() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  if (status === 'success') {
    return (
      <div className="bg-brand-50 p-6 rounded-xl border border-brand-100 text-center">
        <h3 className="text-lg font-medium text-brand-900 mb-2">Check your inbox!</h3>
        <p className="text-brand-800 text-sm">We've sent the checklist to your email.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-grow p-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-foreground text-background px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-70 whitespace-nowrap"
      >
        {status === 'loading' ? 'Sending...' : 'Get the checklist'}
      </button>
    </form>
  );
}