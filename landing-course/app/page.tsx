// app/page.tsx
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { ContactFooter } from "./components/ContactFooter";
import { FaqSection } from "./components/FaqSection";
import { DentistSection } from "./components/DentistSection";
import { ProofSection } from "./components/ProofSection";
import { ContactSection } from "./components/ContactSection";

import {
  dentistContentConfig,
  dentistDesignConfig,
} from "./dentist-config";

export default function Home() {
  const { hero, servicesSection, proofSection, contact } = dentistContentConfig;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <main>
        <Hero
          content={hero}
          contact={contact}
          design={dentistDesignConfig.hero}
        />

        <AboutSection />

        <ProofSection
          content={proofSection}
          design={dentistDesignConfig.proofSection}
        />

        <ServicesSection
          content={servicesSection}
          design={dentistDesignConfig.servicesSection}
        />

        <DentistSection />

        <FaqSection />

        <ContactSection />
      </main>
      <ContactFooter />
    </div>
  );
}
