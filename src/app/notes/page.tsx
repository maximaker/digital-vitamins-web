import Link from 'next/link';
import { getNotes } from '@/lib/mdx';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

export default function NotesPage() {
  const notes = getNotes();

  return (
    <div className="flex flex-col">
      <section className="w-full zenith-border-b bg-background px-6 lg:px-[100px] pt-[120px] pb-[80px]">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-6 h-px bg-primary"></div>
          <span className="zenith-micro tracking-widest">NOTES</span>
        </div>
        <div className="max-w-[800px]">
          <h1 className="text-[56px] md:text-[88px] font-normal tracking-[-0.04em] text-text-primary leading-[1] mb-[32px]">
            Thoughts on friction.
          </h1>
          <p className="text-[18px] md:text-[22px] text-text-secondary font-light leading-[1.6] max-w-[600px]">
            Observations on product clarity, UX friction, and why small design decisions matter.
          </p>
        </div>
      </section>

      <section className="w-full zenith-border-b bg-surface px-6 lg:px-[100px] py-[120px]">
        <div className="max-w-[800px] mx-auto space-y-12">
          {notes.length === 0 ? (
            <p className="text-[16px] text-text-secondary italic font-light">No notes published yet.</p>
          ) : (
            notes.map((note) => (
              <article key={note.slug} className="group border-b border-border pb-12 last:border-b-0">
                <Link href={`/notes/${note.slug}`} className="block">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="zenith-micro text-text-secondary">{note.date}</span>
                  </div>
                  <h2 className="text-[32px] font-normal text-text-primary tracking-[-0.02em] group-hover:text-primary transition-colors mb-4">
                    {note.title}
                  </h2>
                  <p className="text-[16px] text-text-secondary font-light leading-[1.6] max-w-[600px]">
                    {note.excerpt}
                  </p>
                  <span className="inline-flex mt-6 items-center gap-2 zenith-micro group-hover:text-primary transition-colors">
                    READ NOTE <ArrowRight weight="bold" />
                  </span>
                </Link>
              </article>
            ))
          )}
        </div>
      </section>

      <section className="w-full bg-background px-6 lg:px-[100px] py-[140px] text-center">
        <h2 className="text-[36px] md:text-[48px] font-normal tracking-[-0.03em] mb-[24px] leading-[1.1]">Building with AI?</h2>
        <p className="text-[18px] text-text-secondary mb-[48px] leading-[1.6] font-light max-w-[600px] mx-auto">
          AI tools can build functional products fast, but they often miss critical UX structure. Get our free checklist to spot the common mistakes.
        </p>
        <Link href="/resources/ai-ux-checklist" className="zenith-btn">
          GET THE FREE CHECKLIST <ArrowRight weight="bold" />
        </Link>
      </section>
    </div>
  );
}