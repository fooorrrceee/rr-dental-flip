// app/advocate/advocate-config.ts

import type { Service } from "../dentist-config";

export const advocateServices: Service[] = [
  {
    headline: "Help with property and land disputes",
    technicalName: "Property & real estate law",
    description:
      "Assistance with property boundaries, title issues, and sale agreements so you can avoid costly mistakes and disputes.",
    highlight: "Property matters",
    priority: "core",
  },
  {
    headline: "Support for family and divorce matters",
    technicalName: "Family law",
    description:
      "Guidance on separation, child custody, and maintenance, explained in clear language before any major steps are taken.",
    highlight: "Family & personal",
    priority: "core",
  },
  {
    headline: "Help with contracts and agreements",
    technicalName: "Contracts & documentation",
    description:
      "Drafting and review of agreements so you understand the terms clearly before signing anything important.",
    highlight: "Clear documentation",
    priority: "core",
  },
  {
    headline: "Representation in civil disputes",
    technicalName: "Civil litigation",
    description:
      "Filing and defending civil cases, with regular updates so you know where your matter stands at each stage.",
    highlight: "Court representation",
    priority: "additional",
  },
  {
    headline: "Police station and bail assistance",
    technicalName: "Criminal law support",
    description:
      "Initial guidance and representation in police station visits and bail applications to protect your rights.",
    highlight: "Urgent support",
    priority: "additional",
  },
  {
    headline: "Business and startup legal support",
    technicalName: "Business law",
    description:
      "Basic legal support for small businesses and startups, including agreements and compliance advice.",
    highlight: "Small business focus",
    priority: "additional",
  },
];
