import { Quiz } from '@/components/Quiz';

export default function SelfCheckPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Product Health Self-Check</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Not sure where to start? Answer a few quick questions about your product, and we'll recommend the most effective UX intervention.
        </p>
      </header>

      <Quiz />
    </div>
  );
}