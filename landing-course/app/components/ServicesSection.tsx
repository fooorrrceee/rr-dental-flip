import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

type Service = {
  headline: string;      // patient-facing problem/outcome
  technicalName: string; // clinical/procedure name
  description: string;
  highlight?: string;
  priority?: "core" | "additional";
};


const services: Service[] = [
  {
    headline: "Gentle dental visits for children",
    technicalName: "Child dentistry",
    description:
      "We help anxious kids feel safe in the chair while building simple, lifelong brushing and check-up habits.",
    highlight: "Kid-friendly care",
    priority: "core",
  },
  {
    headline: "Straightening crowded or crooked teeth",
    technicalName: "Orthodontics",
    description:
      "We use braces and clear aligners to improve bite, alignment, and confidence in your smile over time.",
    highlight: "Braces & aligners",
    priority: "core",
  },
  {
    headline: "Relief from severe tooth pain",
    technicalName: "Root canal treatment",
    description:
      "We remove the infection inside the tooth so pain settles and, in many cases, the tooth can be saved.",
    highlight: "Tooth-saving care",
    priority: "core",
  },
  {
    headline: "Fixed replacement for missing teeth",
    technicalName: "Dental implants",
    description:
      "Implants act like artificial tooth roots, supporting crowns that look and feel close to natural teeth.",
    highlight: "Long-term option",
    priority: "core",
  },
  {
    headline: "Repairing weak or broken teeth",
    technicalName: "Crowns and bridges",
    description:
      "Custom-made caps and bridges protect damaged teeth and fill gaps so you can chew comfortably again.",
    highlight: "Protect & replace",
    priority: "additional",
  },
  {
    headline: "Replacing several missing teeth",
    technicalName: "Dentures",
    description:
      "Partial and full dentures are designed to fit well, restore chewing, and support the shape of your face.",
    highlight: "Removable solutions",
    priority: "additional",
  },
  {
    headline: "Jaw pain, clicking, and headache relief",
    technicalName: "TMJ treatment",
    description:
      "We assess and treat jaw joint problems that cause pain, stiffness, or noise when you open and close.",
    highlight: "Jaw joint care",
    priority: "additional",
  },
  {
    headline: "Restoring appearance after injury or surgery",
    technicalName: "Maxillofacial prosthesis",
    description:
      "Specialised prosthetic work helps rebuild missing facial structures to improve function and confidence.",
    highlight: "Specialised care",
    priority: "additional",
  },
];



export function ServicesSection() {
  const coreServices = services.filter(
    (service) => service.priority !== "additional"
  );
  const additionalServices = services.filter(
    (service) => service.priority === "additional"
  );

  return (
    <section
      id="services"
      className="bg-slate-50 py-12 sm:py-16 scroll-mt-16"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-5xl px-4">
        <h2
          id="services-heading"
          className="text-2xl font-semibold text-slate-900"
        >
          Our key services
        </h2>

        <p className="mt-2 text-sm text-slate-600">
          From everyday check-ups to advanced treatments, we help you deal with
          common dental problems in one clinic.
        </p>

        {/* Core services as full cards */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreServices.map((service) => (
            <Card key={service.technicalName}>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">
                  {service.headline}
                </CardTitle>
                <p className="mt-1 text-xs text-slate-500">
                  {service.technicalName}
                </p>
                {service.highlight && (
                  <p className="mt-1 text-xs font-medium text-emerald-600">
                    {service.highlight}
                  </p>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional services as a compact list */}
        {additionalServices.length > 0 && (
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
              More treatments we offer
            </h3>
            <ul className="mt-3 grid gap-3 grid-cols-2">
              {additionalServices.map((service) => (
                <li
                  key={service.technicalName}
                >
                  <Card className="border-slate-200 bg-white/80 p-3">
                    <p className="text-xs font-medium text-slate-900 sm:text-sm">
                      {service.headline}
                    </p>
                    <p className="mt-0.5 text-[11px] text-slate-500 sm:text-xs">
                      {service.technicalName}
                    </p>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
