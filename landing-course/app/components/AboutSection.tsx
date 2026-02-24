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
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {title}
        </h2>
        {intro && (
          <p className="mt-2 text-base text-slate-700 sm:text-lg">
            {intro}
          </p>
        )}
        <p className="mt-4 text-sm text-slate-700 sm:text-base leading-relaxed">
          {body}
        </p>
      </div>
    </Section>
  );
}
