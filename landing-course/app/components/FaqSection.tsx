export function FaqSection() {
  return (
    <section
      id="faq"
      className="py-12 sm:py-16"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-5xl px-4">
        <h2 id="faq-heading" className="text-2xl font-semibold text-slate-900">
          Frequently asked questions
        </h2>

        <div className="mt-6 space-y-4">
          <article className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-base font-semibold text-slate-900">
              When should I bring my child for a first dental visit?
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              A common guideline is to schedule a visit by the first birthday or
              within six months after the first tooth appears.
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-base font-semibold text-slate-900">
              How often should I have a dental check-up?
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Many patients do well with a check-up every six months, but your
              dentist may suggest a different schedule based on your needs.
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-base font-semibold text-slate-900">
              Do treatments hurt?
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Modern techniques and local anaesthesia help keep most treatments
              comfortable. We explain each step and check in with you throughout.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
