import Link from 'next/link';

export default function ProductDesignPartnerPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <div className="mb-8">
        <Link href="/services" className="text-sm text-gray-500 hover:text-brand-500 transition-colors">← Back to Services</Link>
      </div>
      
      <header className="mb-20">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Senior product and UX thinking when your team needs a clearer outside view.</h1>
        <p className="text-xl text-gray-600 mb-8">
          For founders, teams, or agencies that need ongoing UX review, product design direction, and practical support across decisions.
        </p>
        <Link href="/contact?type=partner" className="inline-block bg-foreground text-background px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
          Ask about future support
        </Link>
      </header>

      <section className="mb-20">
        <h2 className="text-2xl font-medium mb-6">A thinking partner, not just production help.</h2>
        <div className="prose prose-lg text-gray-600">
          <p>This service is designed for recurring product decisions. Once we have established trust through a focused sprint or health check, we can transition to a more flexible, ongoing relationship.</p>
          <p>We provide senior oversight to ensure your product remains clear, usable, and frictionless as it grows and evolves.</p>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div>
          <h3 className="text-xl font-medium mb-4">Possible support areas</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex gap-2"><span className="text-brand-500">→</span> UX reviews & Design QA</li>
            <li className="flex gap-2"><span className="text-brand-500">→</span> Product flow feedback</li>
            <li className="flex gap-2"><span className="text-brand-500">→</span> Feature framing & Wireframes</li>
            <li className="flex gap-2"><span className="text-brand-500">→</span> Interface direction</li>
            <li className="flex gap-2"><span className="text-brand-500">→</span> Product strategy clarification</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-4">Format</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex gap-2"><span className="text-brand-500">✓</span> A fixed number of hours per month</li>
            <li className="flex gap-2"><span className="text-brand-500">✓</span> A defined support sprint</li>
            <li className="flex gap-2"><span className="text-brand-500">✓</span> A monthly advisory agreement</li>
            <li className="flex gap-2"><span className="text-brand-500">✓</span> A project-based collaboration</li>
          </ul>
        </div>
      </div>

      <section className="mb-20 bg-surface p-8 rounded-2xl">
        <h3 className="text-xl font-medium mb-6">Best for</h3>
        <ul className="space-y-4 text-gray-700">
          <li className="flex gap-4">Agencies that need senior UX backup</li>
          <li className="flex gap-4">Founders building or refining a product</li>
          <li className="flex gap-4">Small teams without a senior in-house designer</li>
        </ul>
      </section>

      <div className="text-center border-t border-gray-100 pt-16">
        <h2 className="text-2xl font-medium mb-6">Need ongoing UX support?</h2>
        <Link href="/contact" className="inline-block bg-brand-900 text-white px-8 py-3 rounded-full font-medium hover:bg-brand-800 transition-colors">
          Apply for partnership
        </Link>
      </div>
    </div>
  );
}