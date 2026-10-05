import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ServiceAssistancePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-20 max-w-4xl min-h-[60vh] tech-grid">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">Suporte do Sistema</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase tracking-tighter">Ajuda e <span className="gold-text">Suporte</span></h1>
        
        <div className="premium-card p-8 md:p-12 rounded-2xl border border-white/5 space-y-12">
          <div className="prose prose-invert max-w-none text-white/50 leading-relaxed">
            <p className="text-lg text-white/70 font-medium">
              Tem alguma questão sobre as nossas análises, o nosso processo de seleção ou precisa de ajuda sobre o jogo responsável? A nossa equipa está aqui para o acompanhar.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white/[0.03] p-8 rounded-xl border border-white/5 text-center">
                <h2 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center justify-center gap-3">
                  <span className="w-4 h-[2px] bg-primary"></span>
                  Contacte-nos
                </h2>
                <p className="text-sm mb-6">
                  Para qualquer pedido de informação, pode contactar-nos por email:
                </p>
                <div className="bg-black/40 p-4 rounded border border-primary/20 text-center">
                  <span className="text-accent font-black tracking-wider text-xs md:text-sm">contact@sitesdejogos.org</span>
                </div>
                <p className="text-[10px] mt-4 uppercase tracking-widest text-white/30">
                  Tempo de resposta: 48 horas úteis.
                </p>
              </div>

              <div className="bg-white/[0.03] p-8 rounded-xl border border-white/5 text-center">
                <h2 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center justify-center gap-3">
                  <span className="w-4 h-[2px] bg-primary"></span>
                  Ajuda aos Jogadores
                </h2>
                <p className="text-sm mb-6">
                  Se o jogo deixou de ser um prazer, consulte os serviços oficiais de assistência:
                </p>
                <div className="space-y-3">
                  <a href="https://www.sicad.pt/" target="_blank" className="flex items-center justify-center p-4 bg-primary/10 hover:bg-primary/20 rounded border border-primary/20 transition-colors w-full">
                    <span className="text-[10px] font-black text-white uppercase tracking-widest underline">Aceder ao SICAD</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Link href="/" className="text-primary hover:underline font-bold uppercase text-sm tracking-widest">
            ← Voltar ao início
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
