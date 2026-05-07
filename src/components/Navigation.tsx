import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="w-full zenith-border-b h-[80px] flex items-center justify-between px-6 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-3 h-3 flex items-center justify-center">
            <div className="absolute inset-0 bg-text-primary group-hover:bg-primary transition-colors duration-500"></div>
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
          </div>
          <span className="zenith-micro text-text-primary font-bold tracking-[0.1em] text-[11px] group-hover:tracking-[0.15em] transition-all duration-500">
            DIGITAL VITAMINS
          </span>
        </Link>
      </div>
      
      <div className="hidden md:flex items-center gap-12 zenith-micro">
        <Link href="/services" className="group relative py-2 flex items-center gap-2 transition-colors">
          <span className="absolute left-[-12px] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary">[</span>
          <span className="group-hover:text-primary transition-colors">SERVICES</span>
          <span className="absolute right-[12px] opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all text-primary">]</span>
          <span className="text-border group-hover:text-primary transition-colors ml-1">v</span>
        </Link>
        <Link href="/process" className="group relative py-2 flex items-center gap-2 transition-colors">
          <span className="absolute left-[-12px] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary">[</span>
          <span className="group-hover:text-primary transition-colors">PROCESS</span>
          <span className="absolute right-[12px] opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all text-primary">]</span>
          <span className="text-border group-hover:text-primary transition-colors ml-1">v</span>
        </Link>
        <Link href="/examples" className="group relative py-2 transition-colors">
          <span className="absolute left-[-12px] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary">[</span>
          <span className="group-hover:text-primary transition-colors">EXAMPLES</span>
          <span className="absolute right-[-12px] opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all text-primary">]</span>
        </Link>
        <Link href="/about" className="group relative py-2 transition-colors">
          <span className="absolute left-[-12px] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary">[</span>
          <span className="group-hover:text-primary transition-colors">ABOUT</span>
          <span className="absolute right-[-12px] opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all text-primary">]</span>
        </Link>
        <Link href="/notes" className="group relative py-2 transition-colors">
          <span className="absolute left-[-12px] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary">[</span>
          <span className="group-hover:text-primary transition-colors">NOTES</span>
          <span className="absolute right-[-12px] opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all text-primary">]</span>
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <span className="text-border hidden md:inline-block">|</span>
        <Link 
          href="/contact" 
          className="zenith-micro relative group py-2"
        >
          <span className="group-hover:text-primary transition-colors">BOOK A CHECKUP</span>
          <span className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left duration-500"></span>
        </Link>
      </div>
    </nav>
  );
}