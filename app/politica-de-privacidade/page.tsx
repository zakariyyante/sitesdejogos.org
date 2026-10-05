import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-20 max-w-4xl tech-grid">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">Protocolo de Segurança</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase tracking-tighter">Política de <span className="gold-text">Privacidade</span></h1>
        
        <div className="premium-card p-8 md:p-12 rounded-2xl border border-white/5 space-y-8">
          <div className="prose prose-invert max-w-none text-white/50 leading-relaxed space-y-6">
            <p className="text-lg text-white/70 font-medium">
              No Sites de Jogos (&quot;nós&quot;, &quot;nosso&quot;), damos grande importância à proteção dos seus dados pessoais. 
              Esta política detalha como tratamos as suas informações no sitesdejogos.org.
            </p>

            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>

            <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-3">
              <span className="w-6 h-[2px] bg-primary"></span>
              1. Recolha de Dados
            </h2>
            <p>
              Utilizamos ferramentas de terceiros como o Google Analytics e o Vercel Analytics para compreender como os visitantes interagem 
              com o nosso site. Estas ferramentas podem recolher dados como o seu endereço IP através de cookies.
            </p>

            <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-3 mt-8">
              <span className="w-6 h-[2px] bg-primary"></span>
              2. Links de Afiliação
            </h2>
            <p>
              O Sites de Jogos participa em programas de afiliação. Quando um utilizador clica num link de um parceiro, 
              um identificador técnico (gclid) pode ser transmitido para o rastreio de conversões.
            </p>

            <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-3 mt-8">
              <span className="w-6 h-[2px] bg-primary"></span>
              3. Os Seus Direitos
            </h2>
            <p>
              De acordo com o RGPD, tem o direito de acesso, retificação e eliminação dos seus dados pessoais.
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
