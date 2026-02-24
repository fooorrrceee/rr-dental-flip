// app/components/Hero.tsx
import { Button } from "@/components/ui/button";
import type {
  HeroContentConfig,
  BusinessContact,
} from "@/app/site-content-config";
import type { HeroDesignConfig } from "@/app/site-design-config";

type HeroProps = {
  content: HeroContentConfig;
  contact: BusinessContact;
  design: HeroDesignConfig;
};

export function Hero({ content, contact, design }: HeroProps) {
  const primaryHref =
    content.primaryCtaHref ??
    (contact.phone ? `tel:${contact.phone.replace(/\s+/g, "")}` : "#contact");

  const sectionBgClass =
    design.background === "soft"
      ? "bg-sky-50 border-b border-sky-100"
      : design.background === "emphasis"
      ? "bg-sky-700 text-white"
      : "bg-white";

  // For now layout is still the existing split layout; we keep `design.layout`
  // for future variants, but don't branch on it yet.
  return (
    <section
      id="hero"
      className={`${sectionBgClass} py-16 sm:py-20`}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 text-center sm:flex-row sm:text-left">
        <div className="flex-1 space-y-4">
          {content.eyebrow && (
            <p className="text-sm font-medium uppercase tracking-wide text-sky-700">
              {content.eyebrow}
            </p>
          )}

          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {content.title}
          </h1>

          <p className="max-w-xl text-base text-slate-700 sm:text-lg">
            {content.subtitle}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              className="w-full justify-center sm:w-auto"
              size="lg"
            >
              <a href={primaryHref}>{content.primaryCtaLabel}</a>
            </Button>

            {content.secondaryCtaLabel && content.secondaryCtaHref && (
              <Button
                asChild
                variant="outline"
                className="w-full justify-center sm:w-auto"
                size="lg"
              >
                <a href={content.secondaryCtaHref}>
                  {content.secondaryCtaLabel}
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="flex-1">
          <div
            className="h-56 w-full rounded-2xl bg-sky-100 sm:h-64 lg:h-72"
            aria-label={content.imageAlt}
          />
          {/* Later: real next/image driven by config */}
        </div>
      </div>
    </section>
  );
}
