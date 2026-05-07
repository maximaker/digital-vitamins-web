import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full relative overflow-hidden">
      {/* Background Gradient bottom half for continuous effect */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#705849] to-[#5C4538]"></div>
      
      <div className="relative z-10 px-6 lg:px-[100px] py-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 border-b border-white/10 pb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <div className="w-2 h-2 bg-white group-hover:bg-white/80 transition-colors"></div>
              <span className="zenith-micro text-white font-bold tracking-[0.15em] text-[11px]">DIGITAL VITAMINS</span>
            </Link>
            <p className="text-[15px] text-white/80 font-light leading-[1.6] max-w-[280px]">
              Focused UX care for digital products that need more clarity and less friction.
            </p>
          </div>

          <div>
            <span className="zenith-micro block mb-6 text-white/60 tracking-widest">SERVICES</span>
            <ul className="space-y-4">
              <li><Link href="/services/ux-health-check" className="text-[14px] text-white/80 hover:text-white transition-colors font-light">UX Health Check</Link></li>
              <li><Link href="/services/flow-fix" className="text-[14px] text-white/80 hover:text-white transition-colors font-light">Flow Fix</Link></li>
              <li><Link href="/services/prototyping" className="text-[14px] text-white/80 hover:text-white transition-colors font-light">Prototyping</Link></li>
            </ul>
          </div>

          <div>
            <span className="zenith-micro block mb-6 text-white/60 tracking-widest">COMPANY</span>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-[14px] text-white/80 hover:text-white transition-colors font-light">About</Link></li>
              <li><Link href="/process" className="text-[14px] text-white/80 hover:text-white transition-colors font-light">Process</Link></li>
              <li><Link href="/contact" className="text-[14px] text-white/80 hover:text-white transition-colors font-light">Contact</Link></li>
            </ul>
          </div>

          <div>
            <span className="zenith-micro block mb-6 text-white/60 tracking-widest">RESOURCES</span>
            <ul className="space-y-4">
              <li><Link href="/notes" className="text-[14px] text-white/80 hover:text-white transition-colors font-light">Notes</Link></li>
              <li><Link href="/examples" className="text-[14px] text-white/80 hover:text-white transition-colors font-light">Examples</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[11px] text-white/60 tracking-widest uppercase">
            © {new Date().getFullYear()} DIGITAL VITAMINS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-[12px] text-white/60 hover:text-white transition-colors tracking-wider uppercase font-medium">Privacy</Link>
            <Link href="#" className="text-[12px] text-white/60 hover:text-white transition-colors tracking-wider uppercase font-medium">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}