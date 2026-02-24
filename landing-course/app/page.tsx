// app/page.tsx
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { ContactFooter } from "./components/ContactFooter";
import { FaqSection } from "./components/FaqSection";
import { ProofSection } from "./components/ProofSection";
import { ContactSection } from "./components/ContactSection";
// HighlightsSection will be added later

import {
  dentistContentConfig,
  dentistDesignConfig,
} from "./dentist-config";

export default function Home() {
  const {
    hero,
    aboutSection,
    servicesSection,
    proofSection,
    faqSection,
    contactSection,
    contact,
  } = dentistContentConfig;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <main>
        <Hero
          content={hero}
          contact={contact}
          design={dentistDesignConfig.hero}
        />

        <AboutSection
          content={aboutSection}
          design={dentistDesignConfig.aboutSection}
        />

        <ProofSection
          content={proofSection}
          design={dentistDesignConfig.proofSection}
        />

        <ServicesSection
          content={servicesSection}
          design={dentistDesignConfig.servicesSection}
        />

        {/* HighlightsSection (ex-DentistSection) will sit here later */}

        <FaqSection
          content={faqSection}
          design={dentistDesignConfig.faqSection}
        />

        <ContactSection
          content={contactSection}
          design={dentistDesignConfig.contactSection}
        />
      </main>
      <ContactFooter />
    </div>
  );
}
