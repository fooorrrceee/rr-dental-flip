import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { ContactFooter } from "./components/ContactFooter";
import { FaqSection } from "./components/FaqSection";
import { DentistSection } from "./components/DentistSection";
import { ProofSection } from "./components/ProofSection";
import {ContactSection} from "./components/ContactSection";




export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ProofSection />
        <ServicesSection />
        
        <DentistSection />
        
        <FaqSection />
        <ContactSection />
      </main>
      <ContactFooter />
    </div>
  );
}
