import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import type { Service } from "@/app/dentist-config";
import {Section} from "@/app/components/Section";

type ServicesSectionProps = {
  title: string;
  intro: string;
  services: Service[];
};

export function ServicesSection({ title, intro, services }: ServicesSectionProps) {
  const coreServices = services.filter(
    (service) => service.priority !== "additional"
  );
  const additionalServices = services.filter(
    (service) => service.priority === "additional"
  );

  return (
    <Section
      id="services"
      ariaLabelledBy="services-heading"
      background="muted"
      paddingY="normal"
    >
      <div className="mx-auto max-w-5xl px-4">
        <h2
          id="services-heading"
          className="text-2xl font-semibold text-slate-900"
        >
          {title}
        </h2>

        <p className="mt-2 text-sm text-slate-600">
          {intro}
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
                <li key={service.technicalName}>
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
    </Section>
  );
}
