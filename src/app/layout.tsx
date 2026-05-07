import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Vitamins | Focused UX Care",
  description: "Focused UX care for digital products that need more clarity and less friction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans flex flex-col min-h-screen selection:bg-primary selection:text-white antialiased bg-background text-text-primary relative">
        <div className="max-w-[1600px] mx-auto w-full flex flex-col min-h-screen relative z-10 border-x border-border/50">
          <Navigation />
          <main className="flex-grow flex flex-col">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}