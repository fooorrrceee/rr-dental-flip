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

export type FaqSectionDesignConfig = {
  background: SectionBackgroundVariant;
};

export type ContactSectionDesignConfig = {
  background: SectionBackgroundVariant;
};

// app/site-design-config.ts

export type AboutSectionDesignConfig = {
  background: SectionBackgroundVariant;
};

// app/site-design-config.ts

export type HighlightsSectionDesignConfig = {
  background: SectionBackgroundVariant;
  layout?: "cards" | "list" | "grid"; // reserved for later
};

export type BusinessSiteDesignConfig = {
  hero: HeroDesignConfig;
  aboutSection: AboutSectionDesignConfig;
  servicesSection: ServicesSectionDesignConfig;
  proofSection: ProofSectionDesignConfig;
  faqSection: FaqSectionDesignConfig;
  contactSection: ContactSectionDesignConfig;
  primaryHighlightsSection?: HighlightsSectionDesignConfig; // NEW
};

