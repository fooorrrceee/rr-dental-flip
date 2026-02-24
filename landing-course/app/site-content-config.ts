// app/site-content-config.ts

export type BusinessLocation = {
  area: string;
  city: string;
  country: string;
};

export type BusinessContact = {
  phone: string;
  whatsapp?: string;
  email: string;
  googleMapsUrl?: string;
};

export type BusinessInfo = {
  name: string;
  tagline?: string;
  niche: string;
  location: BusinessLocation;
};

export type HeroContentConfig = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  primaryCtaHref?: string; // tel:, whatsapp:, #contact, etc.
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  imageAlt?: string;
};

export type Service = {
  headline: string;        // patient-facing outcome
  technicalName: string;   // clinical/procedure name
  description: string;
  highlight?: string;
  priority?: "core" | "additional";
};

export type ServicesSectionContentConfig = {
  title: string;
  intro: string;
  services: Service[];
};


export type ProofItem = {
  label: string;          // e.g. "Years of experience", "Patients treated"
  value: string;          // e.g. "10+ years", "5,000+"
  description?: string;   // optional supporting line
};

export type ProofSectionContentConfig = {
  title: string;
  intro: string;
  highlights: ProofItem[];
  // later: testimonials, logos, etc., if needed
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqSectionContentConfig = {
  title: string;
  intro?: string;
  items: FaqItem[];
};

export type BusinessSiteContentConfig = {
  business: BusinessInfo;
  contact: BusinessContact;
  hero: HeroContentConfig;
  servicesSection: ServicesSectionContentConfig;
  proofSection: ProofSectionContentConfig;
  faqSection: FaqSectionContentConfig; // NEW
  // later: contactSection, etc.
};

