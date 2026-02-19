import { Header } from "../components/Header";
import { ContactFooter } from "../components/ContactFooter";
import { ServicesSection } from "../components/ServicesSection";
import { advocateServices } from "./advocate-config";
import { AdvocateHero } from "../components/AdvocateHero";

export default function AdvocatePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <main>
        {/* Simple hero for now */}
        <AdvocateHero />

        {/* Services, reusing the same component */}
        <ServicesSection
          title="Legal services we provide"
          intro="Practical legal help for common issues faced by individuals and families in RS Puram and across Coimbatore."
          services={advocateServices}
        />

        {/* For now, reuse the same FAQ and Contact patterns if you like later */}
      </main>
      <ContactFooter />
    </div>
  );
}
