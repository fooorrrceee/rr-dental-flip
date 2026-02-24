// app/components/ServicesSection.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Section } from "@/app/components/Section";
import type {
  Service,
  ServicesSectionContentConfig,
} from "@/app/site-content-config";
import type { ServicesSectionDesignConfig } from "@/app/site-design-config";

type ServicesSectionProps = {
  content: ServicesSectionContentConfig;
  design: ServicesSectionDesignConfig;
};

export function ServicesSection({ content, design }: ServicesSectionProps) {
  const { title, intro, services } = content;

  const coreServices = services.filter(
    (service: Service) => service.priority !== "additional"
  );

  const additionalServices = services.filter(
    (service: Service) => service.priority === "additional"
  );

  const sectionBgClass =
    design.background === "soft"
      ? "bg-sky-50"
      : design.background === "emphasis"
      ? "bg-sky-800"
      : "bg-white";

  return (
    <Section id="services" className={sectionBgClass}>
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 space-y-3 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {title}
          </h2>
          <p className="text-base text-slate-700 sm:text-lg">{intro}</p>
        </div>

        {/* Core services as full cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {coreServices.map((service) => (
            <Card key={service.technicalName} className="h-full">
              <CardHeader>
                <CardTitle className="flex flex-col gap-1">
                  <span className="text-base font-semibold text-slate-900">
                    {service.headline}
                  </span>
                  <span className="text-sm font-medium text-sky-700">
                    {service.technicalName}
                  </span>
                  {service.highlight && (
                    <span className="text-xs font-medium uppercase tracking-wide text-emerald-700">
                      {service.highlight}
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-700">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional services as a compact list */}
        {additionalServices.length > 0 && (
          <div className="mt-10 border-t border-slate-100 pt-8">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-700">
              More treatments we offer
            </h3>
            <ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              {additionalServices.map((service) => (
                <li key={service.technicalName} className="flex flex-col">
                  <span className="font-medium">{service.headline}</span>
                  <span className="text-xs text-slate-500">
                    {service.technicalName}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  );
}
