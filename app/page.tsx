import { brands } from "./data/brands";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BrandCard from "./components/BrandCard";
import DisclaimerBar from "./components/DisclaimerBar";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import MobileModal from "./components/MobileModal";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const gclid = typeof params.gclid === 'string' ? params.gclid : undefined;

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <Hero />

      <section id="brands" className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {brands.map((brand, index) => (
            <div key={brand.id}>
              <BrandCard 
                brand={brand} 
                gclid={gclid} 
                rank={index} 
              />
            </div>
          ))}
        </div>
      </section>

      <DisclaimerBar />

      <AboutSection />

      <Footer />

      {/* Mobile Modal Logic */}
      <Suspense fallback={null}>
        <MobileModal />
      </Suspense>
    </main>
  );
}
