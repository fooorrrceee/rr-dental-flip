import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { ContactFooter } from "./components/ContactFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
      </main>
      <ContactFooter />
    </div>
  );
}
