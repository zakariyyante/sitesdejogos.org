"use client";

import Image from "next/image";
import { track } from "@vercel/analytics";
import { Brand } from "../data/brands";

interface BrandCardProps {
  brand: Brand;
  gclid?: string;
  rank?: number;
}

declare global {
  interface Window {
    gtag_report_conversion?: (url: string) => void;
  }
}

export default function BrandCard({ brand, gclid, rank }: BrandCardProps) {
  const buildUrl = (url: string, gclidValue?: string) => {
    if (!gclidValue) return url;
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}gclid=${gclidValue}`;
  };

  const finalUrl = buildUrl(brand.url, gclid);

  const handleClick = (e: React.MouseEvent) => {
    track("Brand Click", { brand: brand.name });
    
    if (typeof window !== "undefined" && window.gtag_report_conversion) {
      e.preventDefault();
      window.gtag_report_conversion(finalUrl);
    }
  };

  return (
    <a 
      href={finalUrl}
      onClick={handleClick}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="relative premium-card rounded-2xl p-8 flex flex-col items-center gap-8 cursor-pointer group overflow-hidden block"
    >
      {rank !== undefined && (
        <div className="absolute top-6 left-6 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
          <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">
            Target N°{rank + 1}
          </span>
        </div>
      )}
      
      {/* Brand Logo Section */}
      <div className="flex flex-col items-center gap-6 w-full pt-4">
        <div className="relative w-44 h-24 bg-white/[0.03] rounded-xl p-4 flex items-center justify-center border border-white/5 shadow-inner transition-colors group-hover:bg-white/[0.05]">
          <Image 
            src={brand.logo} 
            alt={`${brand.name} logo`} 
            fill
            className="object-contain p-3 transition-transform duration-500 group-hover:scale-110"
            unoptimized
          />
        </div>
        
        <div className="flex items-center gap-3">
          <div className="text-4xl font-black gold-text tracking-tighter transition-transform group-hover:scale-110">{brand.rating.toFixed(1)}</div>
          <div className="h-8 w-[1px] bg-white/10 rotate-12"></div>
          <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Score</div>
        </div>
      </div>
      
      {/* Description */}
      <div className="flex-1 text-center px-2">
        <p className="text-sm leading-relaxed text-white/60 group-hover:text-white/90 transition-colors font-medium">
          {brand.description}
        </p>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center gap-4 w-full">
        <div 
          className="w-full py-4 cta-gold rounded-lg shadow-xl text-xs flex items-center justify-center gap-2 group/btn"
        >
          <span>ACEDER À OFERTA</span>
          <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
        <div className="flex items-center gap-2 text-[9px] text-white/20 font-bold uppercase tracking-widest">
          <span className="w-4 h-[1px] bg-white/10"></span>
          <span>Termos e Condições 18+</span>
          <span className="w-4 h-[1px] bg-white/10"></span>
        </div>
      </div>

      {/* Background Tech Accent */}
      <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-primary/5 rounded-full pointer-events-none group-hover:border-primary/20 transition-all duration-500 group-hover:scale-150"></div>
    </a>
  );
}
