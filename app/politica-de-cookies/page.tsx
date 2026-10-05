import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-20 max-w-4xl min-h-[60vh] tech-grid">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">Rastreador Técnico</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase tracking-tighter">Política de <span className="gold-text">Cookies</span></h1>
        
        <div className="premium-card p-8 md:p-12 rounded-2xl border border-white/5 space-y-8">
          <div className="prose prose-invert max-w-none text-white/50 leading-relaxed space-y-6">
            <p className="text-lg text-white/70 font-medium">
              O Sites de Jogos utiliza cookies para otimizar a navegação e analisar o tráfego no nosso site.
            </p>

            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>

            <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-3">
              <span className="w-6 h-[2px] bg-primary"></span>
              Definição
            </h2>
            <p>
              Um cookie é um pequeno ficheiro de texto depositado no seu terminal durante a consulta de um site da internet.
            </p>

            <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-3 mt-8">
              <span className="w-6 h-[2px] bg-primary"></span>
              Utilização
            </h2>
            <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
              <li className="bg-white/[0.03] p-4 rounded-lg border border-white/5">
                <span className="block text-accent font-black text-[10px] uppercase tracking-widest mb-1">Analítica</span>
                <span className="text-sm text-white/60 font-medium">Medição de audiência via Google & Vercel.</span>
              </li>
              <li className="bg-white/[0.03] p-4 rounded-lg border border-white/5">
                <span className="block text-accent font-black text-[10px] uppercase tracking-widest mb-1">Afiliação</span>
                <span className="text-sm text-white/60 font-medium">Rastreio técnico de conversões (gclid).</span>
              </li>
            </ul>

            <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-3 mt-8">
              <span className="w-6 h-[2px] bg-primary"></span>
              Gestão
            </h2>
            <p>
              Pode configurar o seu navegador para bloquear os cookies, embora isso possa ter impacto em certas funções do site.
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
