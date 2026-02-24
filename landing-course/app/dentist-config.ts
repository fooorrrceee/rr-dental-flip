// app/dentist-config.ts
import type {
  BusinessSiteContentConfig,
  Service,
  ProofSectionContentConfig,
  ProofItem,
} from "./site-content-config";
import type { BusinessSiteDesignConfig } from "./site-design-config";

// Re-export Service so existing imports can be kept for now if needed
export type { Service } from "./site-content-config";

const dentistServices: Service[] = [
  {
    headline: "Gentle dental visits for children",
    technicalName: "Child dentistry",
    description:
      "We help anxious kids feel safe in the chair while building simple, lifelong brushing and check-up habits.",
    highlight: "Kid-friendly care",
    priority: "core",
  },
  {
    headline: "Straightening crowded or crooked teeth",
    technicalName: "Orthodontics",
    description:
      "We use braces and clear aligners to improve bite, alignment, and confidence in your smile over time.",
    highlight: "Braces & aligners",
    priority: "core",
  },
  {
    headline: "Relief from severe tooth pain",
    technicalName: "Root canal treatment",
    description:
      "We remove the infection inside the tooth so pain settles and, in many cases, the tooth can be saved.",
    highlight: "Tooth-saving care",
    priority: "core",
  },
  {
    headline: "Fixed replacement for missing teeth",
    technicalName: "Dental implants",
    description:
      "Implants act like artificial tooth roots, supporting crowns that look and feel close to natural teeth.",
    highlight: "Long-term option",
    priority: "core",
  },
  {
    headline: "Repairing weak or broken teeth",
    technicalName: "Crowns and bridges",
    description:
      "Custom-made caps and bridges protect damaged teeth and fill gaps so you can chew comfortably again.",
    highlight: "Protect & replace",
    priority: "additional",
  },
  {
    headline: "Replacing several missing teeth",
    technicalName: "Dentures",
    description:
      "Partial and full dentures are designed to fit well, restore chewing, and support the shape of your face.",
    highlight: "Removable solutions",
    priority: "additional",
  },
  {
    headline: "Jaw pain, clicking, and headache relief",
    technicalName: "TMJ treatment",
    description:
      "We assess and treat jaw joint problems that cause pain, stiffness, or noise when you open and close.",
    highlight: "Jaw joint care",
    priority: "additional",
  },
  {
    headline: "Restoring appearance after injury or surgery",
    technicalName: "Maxillofacial prosthesis",
    description:
      "Specialised prosthetic work helps rebuild missing facial structures to improve function and confidence.",
    highlight: "Specialised care",
    priority: "additional",
  },
];


const dentistProofHighlights: ProofItem[] = [
  {
    label: "Years of experience",
    value: "10+ years",
    description: "Caring for families in and around RS Puram.",
  },
  {
    label: "Patients treated",
    value: "5,000+",
    description: "Check-ups, fillings, braces, implants, and more.",
  },
  {
    label: "Emergency response",
    value: "Same-day slots",
    description: "For severe pain or sudden dental problems.",
  },
];

export const dentistContentConfig: BusinessSiteContentConfig = {
  business: {
    name: "Sample Dental Clinic",
    tagline: "Gentle dental care in RS Puram",
    niche: "dentist",
    location: {
      area: "RS Puram",
      city: "Coimbatore",
      country: "India",
    },
  },
  contact: {
    phone: "+91 95858 22338",
    whatsapp: "+91 95858 22338",
    email: "clinic@example.com",
    googleMapsUrl:
      "https://maps.google.com/?q=Sample+Dental+Clinic+RS+Puram",
  },
  hero: {
    eyebrow: "Dentist in RS Puram, Coimbatore",
    title:
      "Gentle dental care in RS Puram for everyday problems and long-term smile health",
    subtitle:
      "From toothaches and cleaning to braces and missing teeth, we focus on clear explanations, comfort, and treatment plans that fit your daily life.",
    primaryCtaLabel: "Book an appointment or ask a question",
    primaryCtaHref: "#contact",
    imageAlt:
      "Dentist gently checking a patient's teeth at Sample Dental Clinic in RS Puram",
  },
  servicesSection: {
    title: "Our key services",
    intro:
      "From everyday check-ups to advanced treatments, we help you deal with common dental problems in one clinic.",
    services: dentistServices,
  },
  proofSection: {
    title: "Why local families trust us",
    intro:
      "We combine gentle care, clear explanations, and consistent follow-ups so your dental visits feel manageable, not stressful.",
    highlights: dentistProofHighlights,
  },
};

export const dentistDesignConfig: BusinessSiteDesignConfig = {
  hero: {
    layout: "split",       // matches your current hero with text + image area
    background: "soft",    // soft tinted background
  },
  servicesSection: {
    background: "default", // keep white background for services
  },
  proofSection: {
    background: "default", // we can flip this to "soft" later if you want alternation
  },
};
