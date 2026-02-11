"use client";

type Dentist = {
  name: string;
  title: string;
  description: string;
  experience: string;
  specialties: string[];
};

const dentists: Dentist[] = [
  {
    name: "Dr. A. Kumar",
    title: "Chief Dental Surgeon",
    description:
      "Dr. Kumar focuses on gentle, detail-oriented treatment so even anxious patients feel comfortable in the chair.",
    experience: "12+ years clinical experience",
    specialties: ["Root canal treatments", "Crowns & bridges", "Dental implants"],
  },
  {
    name: "Dr. B. Meera",
    title: "Family & Cosmetic Dentist",
    description:
      "Dr. Meera enjoys working with children and families, helping them build lifelong healthy dental habits.",
    experience: "8+ years caring for families",
    specialties: ["Child dentistry", "Teeth whitening", "Smile makeovers"],
  },
];

export function DentistSection() {
  return (
    <section
      id="team"
      className="scroll-mt-24 bg-white py-16"
    >
      <div className="mx-auto max-w-5xl px-4">
        {/* Section heading */}
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Meet your dentists
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Two experienced dentists working together to provide gentle, modern care for
            families in RS Puram and across Coimbatore.
          </p>
        </div>

        {/* Dentists grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {dentists.map((dentist) => (
            <article
            key={dentist.name}
            className="flex rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm"
            >
            {/* Left: photo takes ~1/3 */}
                <div className="mr-4  basis-1/3 overflow-hidden rounded-xl bg-slate-100">
                    {/* Later: replace with <Image> of each dentist */}
                    <div className="flex h-full min-h-[140px] w-full items-center justify-center text-sm font-medium text-slate-500">
                    Dr
                    </div>
                </div>

                {/* Right: text content takes remaining space */}
                <div className="basis-2/3">
                    <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                    {dentist.name}
                    </h3>
                    <p className="text-xs text-slate-500 sm:text-sm">
                    {dentist.title}
                    </p>
                    <p className="mt-2 text-xs text-slate-600 sm:text-sm">
                    {dentist.description}
                    </p>
                    <p className="mt-2 text-xs font-medium text-slate-700 sm:text-sm">
                    {dentist.experience}
                    </p>

                    <ul className="mt-2 flex flex-wrap gap-2">
                    {dentist.specialties.map((specialty) => (
                        <li
                        key={specialty}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 sm:text-xs"
                        >
                        {specialty}
                        </li>
                    ))}
                    </ul>
                </div>
            </article>

          ))}
        </div>
      </div>
    </section>
  );
}
