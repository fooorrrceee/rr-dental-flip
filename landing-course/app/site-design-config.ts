// app/site-design-config.ts

export type SectionBackgroundVariant = "default" | "soft" | "emphasis";

export type HeroLayoutVariant = "split" | "centered";

export type HeroDesignConfig = {
  layout: HeroLayoutVariant;
  background: SectionBackgroundVariant;
};

export type ServicesSectionDesignConfig = {
  background: SectionBackgroundVariant;
};



export type ProofSectionDesignConfig = {
  background: SectionBackgroundVariant;
};

export type BusinessSiteDesignConfig = {
  hero: HeroDesignConfig;
  servicesSection: ServicesSectionDesignConfig;
  proofSection: ProofSectionDesignConfig; // NEW
  // later: faqSection, contactSection, etc.
};