import { notFound } from 'next/navigation';
import { getNoteBySlug, getNotes } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

export async function generateStaticParams() {
  const notes = getNotes();
  return notes.map((note) => ({
    slug: note.slug,
  }));
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  return (
    <article className="flex flex-col">
      <section className="w-full zenith-border-b bg-background px-6 lg:px-[100px] pt-[120px] pb-[80px]">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-6 h-px bg-primary"></div>
          <Link href="/notes" className="zenith-micro hover:text-primary transition-colors tracking-widest uppercase">
            ← BACK TO NOTES
          </Link>
        </div>
        <div className="max-w-[800px]">
          <p className="zenith-micro text-text-secondary mb-6">NOTE / ARTICLE</p>
          <h1 className="text-[48px] md:text-[72px] font-normal tracking-[-0.04em] text-text-primary leading-[1.05] mb-[32px]">
            {note.metadata.title}
          </h1>
        </div>
      </section>

      <section className="w-full zenith-border-b bg-surface px-6 lg:px-[100px] py-[80px] lg:py-[120px]">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Editorial Sidebar */}
          <aside className="w-full lg:w-[300px] lg:sticky lg:top-[120px] flex flex-col gap-12 shrink-0">
            <div>
              <h3 className="zenith-micro text-text-secondary mb-4">PUBLISHED</h3>
              <p className="text-[15px] text-text-primary">{note.metadata.date}</p>
            </div>
            <div>
              <h3 className="zenith-micro text-text-secondary mb-4">AUTHOR</h3>
              <p className="text-[15px] text-text-primary">Digital Vitamins</p>
            </div>
            <div className="pt-8 border-t border-border/50">
              <p className="text-[14px] text-text-secondary font-light leading-[1.6]">
                Notes on product design, user friction, and creating clarity in digital interfaces.
              </p>
            </div>
          </aside>

          {/* Main Editorial Content */}
          <div className="w-full zenith-prose">
            <MDXRemote source={note.content} />
          </div>
        </div>
      </section>

      <section className="w-full relative overflow-hidden text-white py-[140px] text-center">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#8C7362] to-[#705849]"></div>
        <div className="relative z-10 px-6 lg:px-[100px] max-w-[800px] mx-auto">
          <h2 className="text-[36px] md:text-[48px] font-light tracking-[-0.03em] mb-[24px] leading-[1.1]">Have a product that feels harder to use than it should?</h2>
          <p className="text-[18px] text-white/90 mb-[48px] leading-[1.6] font-light max-w-[600px] mx-auto">
            Book a quick call to discuss where your product is struggling, and we'll figure out the best approach.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="bg-white text-[#5C4538] hover:bg-white/90 transition-colors px-8 py-4 text-[13px] font-medium tracking-widest uppercase flex items-center gap-3">
              BOOK A CHECKUP <ArrowRight weight="bold" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}