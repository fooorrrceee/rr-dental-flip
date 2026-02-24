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


export type ContactChannel = {
  type: "phone" | "whatsapp" | "email" | "location" | "other";
  label: string;       // e.g. "Call us", "WhatsApp", "Email", "Visit us"
  value: string;       // e.g. "+91 95...", "clinic@example.com"
  href?: string;       // tel:..., mailto:..., https link, etc.
  icon?: string;       // optional semantic key for later icon mapping
};

export type ContactFormConfig = {
  heading: string;
  subheading?: string;
  formspreeEndpoint: string;
  submitLabel: string;
  successMessage: string;
  errorMessage: string;
  idleMessage?: string;
  subject?: string; // for hidden _subject field
};

export type ContactSectionContentConfig = {
  title: string;
  intro?: string;
  note?: string; // for the ContactIntro note
  clinicName?: string;
  locationLine?: string;
  channels: ContactChannel[];
  form: ContactFormConfig;
};



export type AboutSectionContentConfig = {
  title: string;
  intro?: string;    // short 1–2 line intro
  body: string;      // main paragraph(s), can include line breaks
};



export type HighlightItem = {
  title: string;          // "Dr. Arjun Menon"
  subtitle?: string;      // "Consultant Dentist"
  description?: string;   // short bio / explanation
  meta?: string;          // "10+ years experience"
  tags?: string[];        // ["Root canals", "Implants"]
  imageUrl?: string;      // optional portrait/icon
};

export type HighlightsSectionContentConfig = {
  sectionId?: string;     // e.g. "team", "experts"
  title: string;
  intro?: string;
  items: HighlightItem[];
};

export type BusinessSiteContentConfig = {
  business: BusinessInfo;
  contact: BusinessContact;
  hero: HeroContentConfig;
  aboutSection: AboutSectionContentConfig;
  servicesSection: ServicesSectionContentConfig;
  proofSection: ProofSectionContentConfig;
  faqSection: FaqSectionContentConfig;
  contactSection: ContactSectionContentConfig;
  primaryHighlightsSection?: HighlightsSectionContentConfig; // NEW
};


