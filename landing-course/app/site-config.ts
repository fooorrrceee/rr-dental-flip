// app/site-config.ts

export type SiteThemeKey = "default";

export type SiteConfig = {
  businessName: string;
  tagline?: string;
  location: {
    city: string;
    area?: string;
    country: string;
  };
  contact: {
    phone?: string;
    whatsapp?: string;
    email?: string;
    googleMapsUrl?: string;
  };
  theme: {
    key: SiteThemeKey;
    // room for later: palette name, radius scale, etc.
  };
};

export const siteConfig: SiteConfig = {
  businessName: "Sample Local Business",
  tagline: "Modern, conversion-focused one-page sites",
  location: {
    city: "Coimbatore",
    area: "RS Puram",
    country: "India",
  },
  contact: {
    phone: "+91 95858 22338",
    whatsapp: "+91 95858 22338",
    email: "hello@example.com",
    googleMapsUrl: "https://maps.google.com/",
  },
  theme: {
    key: "default",
  },
};

