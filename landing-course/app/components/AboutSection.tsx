// app/components/AboutSection.tsx
import { Section } from "@/app/components/Section";
import type {
  AboutSectionContentConfig,
} from "@/app/site-content-config";
import type { AboutSectionDesignConfig } from "@/app/site-design-config";

type AboutSectionProps = {
  content: AboutSectionContentConfig;
  design: AboutSectionDesignConfig;
};

export function AboutSection({ content, design }: AboutSectionProps) {
  const { title, intro, body } = content;

  const sectionBgClass =
    design.background === "soft"
      ? "bg-sky-50"
      : design.background === "emphasis"
      ? "bg-sky-800"
      : "bg-white";

  return (
    <Section id="about" className={sectionBgClass}>
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-6 space-y-3 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {title}
          </h2>
          {intro && (
            <p className="text-base text-slate-700 sm:text-lg">
              {intro}
            </p>
          )}
        </div>

        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-slate-700 sm:text-base leading-relaxed text-left">
            {body}
          </p>
        </div>
      </div>
    </Section>
  );
}
