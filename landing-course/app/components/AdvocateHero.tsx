import Image from "next/image";
import { Button } from "@/components/ui/button";
import { advocateHero } from "@/app/advocate/advocate-config";

export function AdvocateHero() {
  return (
    <section
      id="advocate-hero"
      className="bg-slate-900 py-16 sm:py-20 scroll-mt-16"
      aria-labelledby="advocate-hero-heading"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        {/* Left: text */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-sky-300">
            {advocateHero.eyebrow ?? "Advocate in RS Puram, Coimbatore"}
          </p>

          <h1
            id="advocate-hero-heading"
            className="mt-2 text-3xl font-semibold text-white sm:text-4xl"
          >
            {advocateHero.heading}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-200">
            {advocateHero.subheading}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-400">
              <a href="#contact">
                {advocateHero.primaryCta ?? "Schedule a consultation"}
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-slate-500 text-slate-100 hover:bg-slate-800"
            >
              <a href="#services">View legal services</a>
            </Button>
          </div>
        </div>

        {/* Right: advocate photo block */}
        <div className="mx-auto w-full max-w-sm">
          <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800">
            {/* Replace this with a real photo when you have it */}
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/advocate-placeholder.jpg"
                alt="Advocate portrait"
                fill
                className="object-cover"
              />
            </div>
            <div className="border-t border-slate-700 px-4 py-3 text-sm text-slate-100">
              <p className="font-medium">
                {advocateHero.name ?? "Adv. Name Surname"}
              </p>
              <p className="text-xs text-slate-300">
                {advocateHero.tagline ?? "Civil, property, and family law"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
