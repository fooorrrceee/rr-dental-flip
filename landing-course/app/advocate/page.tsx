import { Header } from "../components/Header";
import { ContactFooter } from "../components/ContactFooter";
import { ServicesSection } from "../components/ServicesSection";
import { AdvocateProofSection } from "../components/AdvocateProofSection";
import { advocateServices } from "./advocate-config";
import { AdvocateHero } from "../components/AdvocateHero";
import { AdvocateContactSection } from "../components/AdvocateContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advocate in RS Puram, Coimbatore | Clear Legal Guidance",
  description:
    "Local advocate in RS Puram, Coimbatore helping with property, family, and civil matters. Schedule a consultation to understand your legal options in plain language.",
  openGraph: {
    title: "Advocate in RS Puram, Coimbatore | Clear Legal Guidance",
    description:
      "Get clear, practical advice on property, family, and civil disputes before you take a legal step.",
    type: "website",
  },
};


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
        <AdvocateProofSection />

        {/* For now, reuse the same FAQ and Contact patterns if you like later */}
        <AdvocateContactSection />
      </main>
      <ContactFooter />
    </div>
  );
}
