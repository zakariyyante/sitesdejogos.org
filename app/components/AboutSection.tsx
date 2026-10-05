export default function AboutSection() {
  return (
    <section id="transparence" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-16 uppercase tracking-tighter text-white">
          Transparência E Termos De Utilização
        </h2>
        
        <div className="space-y-12">
          <div className="space-y-4">
            <h3 className="text-lg font-black uppercase tracking-widest text-primary">
              Enquadramento Legal E Propriedade Intelectual
            </h3>
            <p className="text-white/50 leading-relaxed text-sm font-medium max-w-3xl mx-auto">
              As informações publicadas no Sites de Jogos servem apenas para orientar o utilizador para sites de jogos regulados pelo SRIJ. A utilização do site implica a aceitação destes termos. Todo o conteúdo, design gráfico e textos disponíveis no site são protegidos por direitos de autor.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-black uppercase tracking-widest text-primary">
              Financiamento E Independência Editorial
            </h3>
            <p className="text-white/50 leading-relaxed text-sm font-medium max-w-3xl mx-auto">
              O Sites de Jogos é acessível gratuitamente. O seu funcionamento pode, no entanto, ser apoiado por parcerias de afiliação com operadores licenciados. Mantemos total independência editorial na avaliação e apresentação dos sites de jogos.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-black uppercase tracking-widest text-primary">
              Público Maior De Idade E Prática Responsável
            </h3>
            <p className="text-white/50 leading-relaxed text-sm font-medium max-w-3xl mx-auto">
              O Sites de Jogos destina-se exclusivamente a pessoas maiores de idade. O jogo deve ser apenas entretenimento. Em caso de dificuldade, pode consultar <a href="https://www.sicad.pt" target="_blank" className="text-accent hover:underline underline-offset-4 font-bold">www.sicad.pt</a> ou <a href="https://www.jogoresponsavel.pt" target="_blank" className="text-accent hover:underline underline-offset-4 font-bold">www.jogoresponsavel.pt</a>.
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    </section>
  );
}
