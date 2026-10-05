import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background pt-24 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-20">
          <Link href="/" className="relative h-12 w-64 mb-12 group transition-transform hover:scale-105">
            <Image 
              src="/logo.png" 
              alt="Sites de Jogos Logo" 
              fill 
              className="object-contain"
            />
          </Link>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 w-full max-w-4xl text-center">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Exploração</h4>
              <ul className="space-y-4 text-[11px] font-bold text-white/40 uppercase tracking-widest">
                <li><Link href="/nossa-expertise" className="hover:text-primary transition-colors">Nossa Expertise</Link></li>
                <li><Link href="/ajuda-e-suporte" className="hover:text-primary transition-colors">Assistência</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Protocolos</h4>
              <ul className="space-y-4 text-[11px] font-bold text-white/40 uppercase tracking-widest">
                <li><Link href="/politica-de-privacidade" className="hover:text-primary transition-colors">Privacidade</Link></li>
                <li><Link href="/termos-e-condicoes" className="hover:text-primary transition-colors">Termos</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Recursos</h4>
              <ul className="space-y-4 text-[11px] font-bold text-white/40 uppercase tracking-widest">
                <li><Link href="/politica-de-cookies" className="hover:text-primary transition-colors">Cookies</Link></li>
                <li><Link href="/jogo-responsavel" className="hover:text-primary transition-colors">Jogo Responsável</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16 px-4">
          <p className="text-[9px] text-white/20 leading-loose uppercase tracking-[0.3em] font-medium border-t border-white/5 pt-8">
            Sites de Jogos analisa e apresenta apenas operadores licenciados pelo SRIJ. 
            O jogo envolve riscos. Exclusivo para maiores de idade.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-10 mb-16 grayscale opacity-20 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-in-out">
          <Image src="/srij.svg" alt="SRIJ" width={70} height={35} className="h-7 w-auto object-contain" />
          <Image src="/18+.png" alt="18+" width={30} height={30} className="h-6 w-auto object-contain" />
          <Image src="/begambleaware.webp" alt="BeGambleAware" width={100} height={35} className="h-6 w-auto object-contain" />
          <Image src="/icad.png" alt="ICAD" width={100} height={35} className="h-7 w-auto object-contain" />
          <Image src="/gordonmoody.png" alt="Gordon Moody" width={90} height={35} className="h-7 w-auto object-contain" />
        </div>

        <div className="text-center text-[9px] text-white/10 uppercase tracking-[0.5em] font-black">
          &copy; {currentYear} Sites de Jogos — Sistema de Análise de Precisão
        </div>
      </div>
      
      {/* Decorative background scan line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5"></div>
    </footer>
  );
}
