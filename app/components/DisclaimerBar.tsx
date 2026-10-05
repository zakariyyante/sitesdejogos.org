import Link from "next/link";
import Image from "next/image";

export default function DisclaimerBar() {
  return (
    <div className="bg-[#0a0e14]/80 border-y border-white/5 py-6 my-12 backdrop-blur-md relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-10">
        {/* Left Section: 18+ Warning */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="relative w-12 h-12 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <Image src="/18+.png" alt="18+" fill className="object-contain" />
          </div>
          <div className="flex flex-col">
            <h4 className="text-[11px] font-black text-white uppercase tracking-wider leading-tight">
              ATENÇÃO: PROIBIDO A MENORES
            </h4>
            <p className="text-[9px] font-medium text-white/40 uppercase tracking-tight mt-0.5">
              O ACESSO É ESTRITAMENTE RESERVADO A ADULTOS COM 18 ANOS OU MAIS.
            </p>
          </div>
        </div>

        {/* Divider for Desktop */}
        <div className="hidden lg:block w-[1px] h-10 bg-white/5"></div>

        {/* Middle Section: Risk Disclaimer */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-[10px] md:text-[11px] font-medium text-white/50 leading-relaxed max-w-2xl">
            O jogo envolve riscos: endividamento, isolamento, dependência. Para obter ajuda, visite 
            <Link href="https://www.sicad.pt/" target="_blank" className="text-accent hover:text-accent/80 font-black ml-1 underline underline-offset-2">
              SICAD / ICAD
            </Link>.
          </p>
        </div>

        {/* Right Section: SRIJ Logo */}
        <div className="shrink-0">
          <div className="px-6 py-2 border border-white/10 rounded-full bg-white/[0.02] flex items-center gap-4">
            <div className="relative w-12 h-6">
              <Image src="/srij.svg" alt="SRIJ" fill className="object-contain" />
            </div>
            <div className="w-[1px] h-4 bg-white/10"></div>
            <div className="flex flex-col items-center">
              <span className="text-[7px] font-black text-white/30 uppercase tracking-[0.2em] leading-none">Regulado</span>
              <span className="text-[8px] font-black text-white/60 uppercase tracking-[0.3em] mt-1">SRIJ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
