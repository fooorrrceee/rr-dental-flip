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

export type BusinessSiteContentConfig = {
  business: BusinessInfo;
  contact: BusinessContact;
  hero: HeroContentConfig;
  servicesSection: ServicesSectionContentConfig;
  // later: proofSection, faqSection, contactSection, etc.
};
