// app/components/ProofSection.tsx
import { Section } from "@/app/components/Section";
import type {
  ProofSectionContentConfig,
  ProofItem,
} from "@/app/site-content-config";
import type { ProofSectionDesignConfig } from "@/app/site-design-config";

type ProofSectionProps = {
  content: ProofSectionContentConfig;
  design: ProofSectionDesignConfig;
};

export function ProofSection({ content, design }: ProofSectionProps) {
  const { title, intro, highlights } = content;

  const sectionBgClass =
    design.background === "soft"
      ? "bg-sky-50"
      : design.background === "emphasis"
      ? "bg-sky-800"
      : "bg-white";

  return (
    <Section id="proof" className={sectionBgClass}>
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 space-y-3 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {title}
          </h2>
          <p className="text-base text-slate-700 sm:text-lg">{intro}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item: ProofItem) => (
            <div
              key={item.label}
              className="rounded-xl border border-slate-100 bg-white p-5 text-left shadow-sm"
            >
              <p className="text-sm font-medium text-slate-600">
                {item.label}
              </p>
              <p className="mt-1 text-xl font-semibold text-slate-900">
                {item.value}
              </p>
              {item.description && (
                <p className="mt-2 text-sm text-slate-700">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
