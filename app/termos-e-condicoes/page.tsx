import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-20 max-w-4xl tech-grid">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">Contrato do Utilizador</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase tracking-tighter">Termos de <span className="gold-text">Utilização</span></h1>
        
        <div className="premium-card p-8 md:p-12 rounded-2xl border border-white/5 space-y-8">
          <div className="prose prose-invert max-w-none text-white/50 leading-relaxed space-y-6">
            <p className="text-lg text-white/70 font-medium">
              Ao aceder ao site sitesdejogos.org, aceita cumprir estes termos. 
              Se não aceitar estes termos, por favor interrompa a utilização do sistema.
            </p>

            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>

            <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-3">
              <span className="w-6 h-[2px] bg-primary"></span>
              1. Responsabilidade
            </h2>
            <p>
              O Sites de Jogos é um site de comparação independente. Não garantimos a exatidão absoluta das ofertas, 
              pois estas evoluem. Os termos e condições dos operadores são soberanos.
            </p>

            <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-3 mt-8">
              <span className="w-6 h-[2px] bg-primary"></span>
              2. Elegibilidade
            </h2>
            <p>
              A utilização é estritamente reservada a pessoas com 18 anos ou mais. Incentivamos o jogo responsável.
            </p>

            <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-3 mt-8">
              <span className="w-6 h-[2px] bg-primary"></span>
              3. Propriedade
            </h2>
            <p>
              Todos os logótipos, textos e gráficos do sitesdejogos.org são nossa propriedade. Qualquer reprodução é proibida.
            </p>
          </div>
          
          <p className="mt-12 text-[10px] font-black uppercase tracking-widest text-white/20 italic">
            Última atualização: 1 de Outubro de 2026
          </p>
        </div>

        <div className="mt-12">
          <Link href="/" className="text-primary hover:underline font-bold uppercase text-sm tracking-widest flex items-center gap-2">
            ← Voltar ao início
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
