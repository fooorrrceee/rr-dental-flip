// app/dentist-config.ts
import type {
  BusinessSiteContentConfig,
  Service,
  ProofSectionContentConfig,
  ProofItem,
  FaqItem,
  ContactChannel,
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

const dentistFaqItems: FaqItem[] = [
  {
    question: "Do I need an appointment or can I walk in?",
    answer:
      "We recommend booking an appointment so we can give you an exact time slot, but we do our best to accommodate walk-ins for urgent issues.",
  },
  {
    question: "How often should I come for a check-up?",
    answer:
      "Most adults and children do well with a check-up and cleaning every 6 months. If you have ongoing treatment, we’ll suggest a schedule that fits your case.",
  },
  {
    question: "I’m anxious about dental treatment. Can you help?",
    answer:
      "Yes. We take extra time to explain each step, use gentle techniques, and check in with you often. For very anxious patients, we can discuss additional comfort options.",
  },
  {
    question: "Do you treat children?",
    answer:
      "Yes, we see children regularly for check-ups, fillings, and preventive care. We focus on building trust so visits get easier over time.",
  },
];

const dentistContactChannels: ContactChannel[] = [
  {
    type: "phone",
    label: "Call us",
    value: "+91 95858 22338",
    href: "tel:+919585822338",
    icon: "phone",
  },
  {
    type: "whatsapp",
    label: "WhatsApp",
    value: "+91 95858 22338",
    href: "https://wa.me/919585822338",
    icon: "whatsapp",
  },
  {
    type: "email",
    label: "Email",
    value: "clinic@example.com",
    href: "mailto:clinic@example.com",
    icon: "email",
  },
  {
    type: "location",
    label: "Find us on Google Maps",
    value: "RS Puram, Coimbatore",
    href:
      "https://maps.google.com/?q=Sample+Dental+Clinic+RS+Puram",
    icon: "location",
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
  faqSection: {
    title: "Common questions from patients",
    intro:
      "If you’re unsure about something, you’re not alone. Here are answers to questions we hear often in the clinic.",
    items: dentistFaqItems,
  },
  contactSection: {
    title: "Book an appointment or ask a question",
    intro:
      "Share a few details and we’ll call or message you back during clinic hours to confirm a time.",
    addressLines: [
      "Sample Dental Clinic",
      "RS Puram, Coimbatore",
      "Tamil Nadu, India",
    ],
    channels: dentistContactChannels,
    form: {
      heading: "Send us a quick message",
      subheading:
        "We’ll get back to you as soon as we can during working hours.",
      formspreeEndpoint: "https://formspree.io/f/your-id-here", // TODO: replace with real ID
      submitLabel: "Send message",
      successMessage:
        "Thank you for reaching out. We’ll get back to you shortly.",
      errorMessage:
        "Something went wrong. Please try again or contact us directly.",
    },
  },
};

export const dentistDesignConfig: BusinessSiteDesignConfig = {
  hero: {
    layout: "split",
    background: "soft",
  },
  servicesSection: {
    background: "default",
  },
  proofSection: {
    background: "default",
  },
  faqSection: {
    background: "soft",
  },
  contactSection: {
    background: "default",
  },
};