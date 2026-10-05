export default function Hero() {
  const currentMonth = new Intl.DateTimeFormat('pt-PT', { month: 'long', year: 'numeric' }).format(new Date());

  return (
    <section className="relative py-24 md:py-32 overflow-hidden tech-grid">
      {/* Advertising Disclosure */}
      <div className="absolute top-0 left-0 w-full py-2 bg-black/40 border-b border-white/5 z-20">
        <div className="container mx-auto px-4 flex justify-center items-center gap-2">
          <div className="w-3 h-3 rounded-full border border-white/20 flex items-center justify-center text-[8px] text-white/40">i</div>
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">Divulgação Publicitária: Recurso Gratuito Financiado Por Comissões</span>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center mt-8">
        {/* Pills Row */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(57,255,20,0.8)] animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70">Portugal • 2026 • Sites de Jogos</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] text-white tracking-tight">
          Os Melhores <br />
          <span className="gold-text">Sites de Jogos em Portugal</span>
        </h1>
        
        <p className="text-base md:text-lg text-white/40 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          Descubra ofertas exclusivas, bónus verificados e os sites de jogos mais populares em Portugal. 
          Análise precisa e bónus exclusivos garantidos.
        </p>

        {/* Action Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <div className="px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-widest text-primary">
            {currentMonth}
          </div>
          <div className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/60 flex items-center gap-2">
            <span className="text-primary">✓</span> Utilização Responsável
          </div>
          <div className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/60 flex items-center gap-2">
            <span className="text-accent text-xs">🛡</span> Proteção SRIJ
          </div>
        </div>
      </div>
      
      {/* Visual Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent pointer-events-none"></div>
    </section>
  );
}
