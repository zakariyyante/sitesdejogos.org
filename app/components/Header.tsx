"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-header">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="relative h-10 w-48 md:w-56 transition-transform hover:scale-105">
          <Image 
            src="/logo.png" 
            alt="Sites de Jogos Logo" 
            fill 
            className="object-contain object-left"
            priority 
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-10">
            <Link href="/" className="text-xs font-black tracking-[0.2em] text-white/60 hover:text-primary transition-colors">INÍCIO</Link>
            <Link href="/nossa-expertise" className="text-xs font-black tracking-[0.2em] text-white/60 hover:text-primary transition-colors">NOSSA EXPERTISE</Link>
            <Link href="/ajuda-e-suporte" className="text-xs font-black tracking-[0.2em] text-white/60 hover:text-primary transition-colors">AJUDA E SUPORTE</Link>
          </nav>
          <div className="w-8 h-8 relative grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <Image 
              src="/18+.png" 
              alt="18+" 
              fill 
              className="object-contain"
            />
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden text-accent"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-primary/20 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-sm font-black tracking-widest uppercase">INÍCIO</Link>
          <Link href="/nossa-expertise" onClick={() => setIsOpen(false)} className="text-sm font-black tracking-widest uppercase">NOSSA EXPERTISE</Link>
          <Link href="/ajuda-e-suporte" onClick={() => setIsOpen(false)} className="text-sm font-black tracking-widest uppercase">AJUDA E SUPORTE</Link>
          <div className="flex items-center gap-2 pt-4 border-t border-white/5">
            <div className="w-6 h-6 relative">
              <Image src="/18+.png" alt="18+" fill className="object-contain" />
            </div>
            <span className="text-[10px] font-black text-white/30 tracking-widest uppercase">Proibido a menores</span>
          </div>
        </div>
      )}
    </header>
  );
}
