type ProofPoint = {
  label: string;
  value: string;
  description: string;
};

const proofPoints: ProofPoint[] = [
  {
    label: "Experience",
    value: "10+ years combined",
    description:
      "Two dentists with years of clinical experience treating families in and around RS Puram.",
  },
  {
    label: "Range of care",
    value: "From check-ups to implants",
    description:
      "Routine cleaning, braces, root canals, dentures, implants, and specialised care in one clinic.",
  },
  {
    label: "Comfort",
    value: "Gentle, explained treatment",
    description:
      "We explain each step before we start, check in during treatment, and avoid rushing appointments.",
  },
  {
    label: "Location",
    value: "RS Puram, Coimbatore",
    description:
      "Easy-to-reach clinic location so regular check-ups and follow-ups are practical, not a hassle.",
  },
];

export function ProofSection() {
  return (
    <section
      id="proof"
      className="bg-white py-12 sm:py-16 scroll-mt-16"
      aria-labelledby="proof-heading"
    >
      <div className="mx-auto max-w-5xl px-4">
        <h2
          id="proof-heading"
          className="text-2xl font-semibold text-slate-900"
        >
          What helps patients trust our clinic
        </h2>

        <p className="mt-2 text-sm text-slate-600">
          Most patients want to know two things before booking: “Will they treat me gently?” and “Do they really know what they’re doing?” This is how we answer both.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {proofPoints.map((point) => (
            <div
              key={point.label}
              className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                {point.label}
              </p>
              <p className="mt-1 text-base font-semibold text-slate-900">
                {point.value}
              </p>
              <p className="mt-2 text-xs text-slate-600 sm:text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
