import { Header } from "../components/Header";
import { ContactFooter } from "../components/ContactFooter";
import { ServicesSection } from "../components/ServicesSection";
import { advocateServices } from "./advocate-config";

export default function AdvocatePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <main>
        {/* Simple hero for now */}
        <section
          id="advocate-hero"
          className="bg-slate-50 py-16 sm:py-20 scroll-mt-16"
          aria-labelledby="advocate-hero-heading"
        >
          <div className="mx-auto max-w-5xl px-4 grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h1
                id="advocate-hero-heading"
                className="text-3xl sm:text-4xl font-semibold text-slate-900"
              >
                Clear legal guidance in RS Puram, Coimbatore
              </h1>
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                Support for property, family, and civil matters, explained in plain
                language so you know your options before taking any major step.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#advocate-contact"
                  className="inline-flex items-center justify-center rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700"
                >
                  Book a consultation
                </a>
                <a
                  href="#advocate-services"
                  className="text-sm font-medium text-sky-700 underline"
                >
                  View legal services
                </a>
              </div>
            </div>

            {/* Placeholder for future advocate image */}
            <div className="hidden md:block">
              <div className="h-56 rounded-2xl bg-slate-200" />
            </div>
          </div>
        </section>

        {/* Services, reusing the same component */}
        <ServicesSection
          title="Legal services we provide"
          intro="Practical legal help for common issues faced by individuals and families in RS Puram and across Coimbatore."
          services={advocateServices}
        />

        {/* For now, reuse the same FAQ and Contact patterns if you like later */}
      </main>
      <ContactFooter />
    </div>
  );
}
