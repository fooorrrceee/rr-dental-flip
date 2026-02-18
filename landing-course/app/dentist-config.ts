// app/dentist-config.ts

export type Service = {
  headline: string;      // patient-facing problem/outcome
  technicalName: string; // clinical/procedure name
  description: string;
  highlight?: string;
  priority?: "core" | "additional";
};

export const dentistServices: Service[] = [
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
