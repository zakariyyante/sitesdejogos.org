import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function JeuResponsablePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-20 max-w-4xl min-h-[60vh] tech-grid">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">Alerta de Segurança</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase tracking-tighter">Jogo <span className="gold-text">Responsável</span></h1>
        
        <div className="premium-card p-8 md:p-12 rounded-2xl border border-white/5 space-y-12">
          <div className="prose prose-invert max-w-none text-white/50 leading-relaxed">
            <p className="text-lg text-white/70 font-medium">
              O Sites de Jogos compromete-se com uma prática de jogo saudável e responsável. O jogo a dinheiro deve ser apenas entretenimento e nunca considerado um meio de gerar rendimento.
            </p>

            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-12"></div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-3">
                  <span className="w-4 h-[2px] bg-primary"></span>
                  Prevenir a Adição
                </h2>
                <ul className="space-y-4 list-none pl-0">
                  {[
                    "Estabeleça limites antes de começar.",
                    "Nunca jogue para recuperar perdas.",
                    "Não jogue sob influência de álcool.",
                    "Estritamente proibido a menores (18+)."
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="text-primary font-bold">»</span> {text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary/5 p-8 rounded-xl border border-primary/20">
                <h2 className="text-lg font-black text-white uppercase tracking-wider mb-6">Precisa de ajuda?</h2>
                <p className="text-sm mb-6 font-medium italic">
                  Se o jogo deixou de ser um prazer, existem soluções. O SRIJ e o SICAD oferecem apoio gratuito e anónimo.
                </p>
                <div className="flex flex-col gap-3">
                  <a href="https://www.sicad.pt/" target="_blank" className="p-4 bg-black/40 rounded border border-white/5 text-center hover:bg-black/60 transition-colors">
                    <span className="block text-[8px] uppercase tracking-[0.3em] text-white/30 mb-1">Assistência Oficial</span>
                    <span className="text-sm font-black text-accent tracking-widest underline uppercase">Consultar o site</span>
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
