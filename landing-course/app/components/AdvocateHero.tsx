import { Button } from "@/components/ui/button";
import { advocateHero } from "@/app/advocate/advocate-config";

export function AdvocateHero() {
  return (
    <section
      id="advocate-hero"
      className="bg-slate-50 py-16 sm:py-20 scroll-mt-16"
      aria-labelledby="advocate-hero-heading"
    >
      <div className="mx-auto max-w-5xl px-4 grid gap-8 md:grid-cols-2 items-center">
        {/* Left: text */}
        <div>
          <h1
            id="advocate-hero-heading"
            className="text-3xl sm:text-4xl font-semibold text-slate-900"
          >
            {advocateHero.heading}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {advocateHero.subheading}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button>
              {advocateHero.primaryCta}
            </Button>
            <a
              href="#advocate-contact"
              className="text-sm font-medium text-sky-700 underline"
            >
              View contact details
            </a>
          </div>
        </div>

        {/* Right: placeholder for future advocate image */}
        <div className="hidden md:block">
          <div className="h-56 rounded-2xl bg-slate-200" />
        </div>
      </div>
    </section>
  );
}
