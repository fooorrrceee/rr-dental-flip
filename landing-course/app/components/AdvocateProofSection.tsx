import { Section } from "@/app/components/Section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { advocateProofPoints } from "@/app/advocate/advocate-config";

export function AdvocateProofSection() {
  return (
    <Section
      id="advocate-proof"
      ariaLabelledBy="advocate-proof-heading"
      background="white"
      paddingY="normal"
    >
      <h2
        id="advocate-proof-heading"
        className="text-2xl font-semibold text-slate-900"
      >
        Why clients choose our chambers
      </h2>
      <p className="mt-2 text-sm text-slate-600">
        Many people feel unsure or anxious before speaking to a lawyer. These are
        some of the reasons clients say they feel comfortable working with us.
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {advocateProofPoints.map((point) => (
          <Card
            key={point.label}
            className="border-slate-200 bg-white/80 shadow-sm"
          >
            <CardHeader className="pb-2">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                {point.label}
              </p>
              <CardTitle className="mt-1 text-base text-slate-900">
                {point.value}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                {point.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
