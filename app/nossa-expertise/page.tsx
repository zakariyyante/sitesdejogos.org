import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SavoirFairePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-20 max-w-4xl min-h-[60vh] tech-grid">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">Protocolo Especialista</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase tracking-tighter">Nossa <span className="gold-text">Expertise</span></h1>
        
        <div className="premium-card p-8 md:p-12 rounded-2xl border border-white/5 space-y-8">
          <div className="prose prose-invert max-w-none text-white/50 leading-relaxed space-y-6">
            <p className="text-lg text-white/70 font-medium">
              O Sites de Jogos baseia-se numa expertise profunda do mercado de jogos online em Portugal. A nossa missão é fornecer aos utilizadores uma seleção rigorosa e transparente dos melhores sites de jogos e apostas desportivas.
            </p>

            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>

            <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-3">
              <span className="w-6 h-[2px] bg-primary"></span>
              Critérios de Seleção
            </h2>
            <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
              {[
                { title: "Licença SRIJ", desc: "Apenas operadores licenciados são selecionados." },
                { title: "Segurança", desc: "Verificação rigorosa dos protocolos SSL." },
                { title: "Experiência UX", desc: "Avaliação da ergonomia em múltiplos dispositivos." },
                { title: "Odds", desc: "Análise da competitividade do mercado." }
              ].map((item, i) => (
                <li key={i} className="bg-white/[0.03] p-4 rounded-lg border border-white/5">
                  <span className="block text-accent font-black text-[10px] uppercase tracking-widest mb-1">{item.title}</span>
                  <span className="text-sm">{item.desc}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-3 mt-12">
              <span className="w-6 h-[2px] bg-primary"></span>
              Independência
            </h2>
            <p className="bg-primary/5 border-l-2 border-primary p-6 italic text-white/60">
              A nossa independência editorial está no centro do nosso processo de análise. Cada plataforma é testada de forma objetiva pelos nossos especialistas.
            </p>
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
