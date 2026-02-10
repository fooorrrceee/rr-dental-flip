import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
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
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Child dentistry</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Gentle care focused on building healthy habits early.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Orthodontics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Teeth alignment options for teens and adults.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Restorative care</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Fillings, crowns, and dentures to restore function and comfort.
              </p>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}
