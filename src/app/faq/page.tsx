import Link from 'next/link';
import { Accordion } from '@/components/Accordion';

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <header className="mb-20">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Frequently asked questions.</h1>
        <p className="text-xl text-gray-600">
          Clear answers about how we work, what we do, and who it&apos;s for.
        </p>
      </header>

      <section className="mb-20">
        <div className="border-t border-gray-100">
          <Accordion 
            question="Do I need a full redesign?"
            answer={<p>Not always. Many products need a clearer structure, better flow, stronger hierarchy, or cleaner copy before they need a full redesign. We focus on diagnosing and fixing the specific parts that are causing friction.</p>}
          />
          <Accordion 
            question="Can you work with an existing design?"
            answer={<p>Yes. Most Digital Vitamins services start from something that already exists: a website, app, prototype, flow, or product idea with some shape. We don&apos;t need a blank slate.</p>}
          />
          <Accordion 
            question="Do you also write copy?"
            answer={<p>Yes, especially where copy affects clarity, trust, navigation, onboarding, or conversion. The focus is not brand copywriting in isolation, but product and UX communication.</p>}
          />
          <Accordion 
            question="Do you build the final product?"
            answer={<p>The main focus is UX and product design. Depending on the project, implementation support can be discussed, but the core service is diagnosis, structure, design direction, and design improvement.</p>}
          />
          <Accordion 
            question="Can this work for AI-built products?"
            answer={<p>Yes. AI-built products often move fast, but they can miss clarity, structure, edge cases, and user guidance. Digital Vitamins can help make them more coherent and credible.</p>}
          />
          <Accordion 
            question="What if I do not know what the problem is?"
            answer={<p>That is exactly when the UX health check is useful. It helps separate visible symptoms from the likely causes. You don&apos;t need to know the solution to get started.</p>}
          />
          <Accordion 
            question="How long does a project take?"
            answer={<p>It depends on the size of the page, product, or flow. A UX Health Check typically takes 3 to 7 business days, while a Flow Fix or Prototyping sprint usually takes 1 to 3 weeks.</p>}
          />
        </div>
      </section>

      <div className="bg-surface p-8 md:p-12 rounded-2xl text-center">
        <h2 className="text-2xl font-medium mb-4">Still have a question?</h2>
        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
          Send a short message with what you&apos;re trying to figure out.
        </p>
        <Link href="/contact" className="inline-block bg-foreground text-background px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
          Ask a question
        </Link>
      </div>
    </div>
  );
}