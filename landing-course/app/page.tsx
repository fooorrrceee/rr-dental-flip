import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <a href="#" className="text-lg font-semibold">
            Sample Dental
          </a>
          <nav aria-label="Main navigation">
            <ul className="flex gap-4 text-sm font-medium">
              <li>
                <a href="#hero" className="hover:text-sky-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-sky-600">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-600">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-600">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section
          id="hero"
          className="bg-slate-50 py-12 sm:py-16"
          aria-labelledby="hero-heading"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 sm:flex-row sm:items-center">
            <div className="sm:flex-1">
              <h1
                id="hero-heading"
                className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
              >
                Gentle dental care in RS Puram
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
                A calm, family-friendly clinic offering preventive and restorative
                treatments for children and adults.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex rounded-full bg-sky-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-700"
              >
                Book an appointment
              </a>
            </div>
            <div
              className="flex min-h-[160px] flex-1 items-center justify-center rounded-xl bg-slate-200 text-sm text-slate-600"
              aria-hidden="true"
            >
              Hero image
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              About our clinic
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              We combine experienced specialists with a friendly environment to make
              every visit as comfortable as possible.
            </p>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="bg-slate-50 py-12 sm:py-16"
          aria-labelledby="services-heading"
        >
          <div className="mx-auto max-w-5xl px-4">
            <h2
              id="services-heading"
              className="text-2xl font-semibold text-slate-900"
            >
              Our key services
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              <article className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-base font-semibold text-slate-900">
                  Child dentistry
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Gentle care focused on building healthy habits early.
                </p>
              </article>
              <article className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-base font-semibold text-slate-900">
                  Orthodontics
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Teeth alignment options for teens and adults.
                </p>
              </article>
              <article className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-base font-semibold text-slate-900">
                  Restorative care
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Fillings, crowns, and dentures to restore function and comfort.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-slate-900 py-10 text-slate-100"
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto max-w-5xl px-4">
          <h2 id="contact-heading" className="text-xl font-semibold">
            Contact
          </h2>
          <p className="mt-3 text-sm">
            Sample Dental Clinic, RS Puram, Coimbatore
          </p>
          <p className="mt-3 text-sm">
            Phone:{" "}
            <a href="tel:+919585822338" className="text-sky-300 underline">
              +91 95858 22338
            </a>
            <br />
            Email:{" "}
            <a href="mailto:clinic@example.com" className="text-sky-300 underline">
              clinic@example.com
            </a>
          </p>
          <p className="mt-6 text-xs text-slate-400">
            © 2026 Sample Dental Clinic.
          </p>
        </div>
      </footer>
    </div>
  );
}
