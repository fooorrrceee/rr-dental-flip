export function ServicesSection() {
  return (
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
  );
}
