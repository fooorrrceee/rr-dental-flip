import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

type Service = {
  name: string;
  description: string;
  highlight?: string;
};

const services: Service[] = [
  {
    name: "Child dentistry",
    description: "Gentle care focused on building healthy habits early.",
    highlight: "Kid-friendly",
  },
  {
    name: "Orthodontics",
    description: "Teeth alignment options for teens and adults.",
    highlight: "Braces & aligners",
  },
  {
    name: "Restorative care",
    description: "Fillings, crowns, and dentures to restore function and comfort.",
    highlight: "Restore chewing comfort",
  },
  // add more soon
];

export function ServicesSection() {
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
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {services.map((service) => (
            <Card key={service.name}>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">
                  {service.name}
                </CardTitle>
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

      </div>
    </section>
  );
}
