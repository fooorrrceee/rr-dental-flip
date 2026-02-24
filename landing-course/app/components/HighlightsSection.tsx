// app/components/HighlightsSection.tsx
import { Section } from "@/app/components/Section";
import type {
  HighlightsSectionContentConfig,
  HighlightItem,
} from "@/app/site-content-config";
import type { HighlightsSectionDesignConfig } from "@/app/site-design-config";

type HighlightsSectionProps = {
  content: HighlightsSectionContentConfig;
  design: HighlightsSectionDesignConfig;
};

export function HighlightsSection({ content, design }: HighlightsSectionProps) {
  const { sectionId, title, intro, items } = content;

  const sectionBgClass =
    design.background === "soft"
      ? "bg-sky-50"
      : design.background === "emphasis"
      ? "bg-sky-800"
      : "bg-white";

  return (
    <Section id={sectionId ?? "highlights"} className={sectionBgClass}>
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 space-y-3 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {title}
          </h2>
          {intro && (
            <p className="text-base text-slate-700 sm:text-lg">
              {intro}
            </p>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item: HighlightItem) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-100 bg-white p-5 text-left shadow-sm"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="text-sm text-slate-600">
                  {item.subtitle}
                </p>
              )}
              {item.meta && (
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-sky-700">
                  {item.meta}
                </p>
              )}
              {item.description && (
                <p className="mt-3 text-sm text-slate-700">
                  {item.description}
                </p>
              )}
              {item.tags && item.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-sky-50 px-2 py-1 text-xs text-sky-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
