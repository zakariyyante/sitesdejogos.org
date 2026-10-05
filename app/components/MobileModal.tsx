"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { brands } from "../data/brands";
import BrandCard from "./BrandCard";
import Image from "next/image";
import Link from "next/link";

export default function MobileModal() {
  const searchParams = useSearchParams();
  const [showModal, setShowModal] = useState(false);
  const gclid = searchParams.get("gclid");

  useEffect(() => {
    const isMobileDevice = typeof window !== 'undefined' && window.innerWidth < 768;
    const hasMobileBrands = brands.some(b => b.isMobile);
    
    if (gclid && isMobileDevice && hasMobileBrands) {
      const timer = setTimeout(() => {
        setShowModal(true);
        document.body.style.overflow = "hidden";
      }, 100);
      return () => clearTimeout(timer);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [gclid]);

  if (!showModal) return null;

  const mobileBrands = brands.filter(b => b.isMobile);

  return (
    <div className="fixed inset-0 z-[100] bg-background overflow-y-auto tech-grid">
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-primary/20 flex justify-between items-center glass-header sticky top-0">
          <div className="relative h-8 w-40">
            <Image src="/logo.png" alt="Sites de Jogos Logo" fill className="object-contain object-left" />
          </div>
          <button 
            onClick={() => {
              setShowModal(false);
              document.body.style.overflow = "unset";
            }}
            className="text-primary p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Hero Text */}
        <div className="p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-primary/30"></div>
          <h2 className="text-3xl font-black mb-3 uppercase tracking-tighter italic gold-text">Scan Mobile Ativo</h2>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Sites de jogos identificados</p>
        </div>

        {/* Brands Grid */}
        <div className="p-6 flex flex-col gap-6">
          {mobileBrands.map((brand) => (
            <BrandCard 
              key={brand.id} 
              brand={brand} 
              gclid={gclid || undefined} 
              rank={brands.findIndex(b => b.id === brand.id)}
            />
          ))}
        </div>

        {/* Disclaimer & Footer */}
        <div className="mt-auto p-8 bg-black/80 text-center border-t border-white/10">
          <div className="flex justify-center items-center gap-6 mb-8 opacity-30">
            <Image src="/18+.png" alt="18+" width={24} height={24} className="w-6 h-6 object-contain" />
            <Image src="/srij.svg" alt="SRIJ" width={48} height={24} className="h-6 w-auto object-contain" />
          </div>
          <p className="mb-4 font-black text-white/40 text-[9px] uppercase tracking-[0.3em]">Atenção: O jogo envolve riscos</p>
          <div className="flex flex-col gap-4 mb-8">
            <Link href="/politica-de-privacidade" onClick={() => setShowModal(false)} className="text-[10px] font-black uppercase tracking-widest text-primary/60">Política de Privacidade</Link>
            <Link href="/termos-e-condicoes" onClick={() => setShowModal(false)} className="text-[10px] font-black uppercase tracking-widest text-primary/60">Termos de Utilização</Link>
          </div>
          <div className="text-[8px] font-black uppercase tracking-[0.5em] text-white/10">
            &copy; 2026 Sites de Jogos
          </div>
        </div>
      </div>
    </div>
  );
}
