// app/components/FaqSection.tsx
"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import type {
  FaqSectionContentConfig,
  FaqItem,
} from "@/app/site-content-config";
import type { FaqSectionDesignConfig } from "@/app/site-design-config";

type FaqSectionProps = {
  content: FaqSectionContentConfig;
  design: FaqSectionDesignConfig;
};

export function FaqSection({ content, design }: FaqSectionProps) {
  const { title, intro, items } = content;

  const sectionBgClass =
    design.background === "soft"
      ? "bg-sky-50"
      : design.background === "emphasis"
      ? "bg-sky-800"
      : "bg-slate-50"; // keep your original light band feel

  return (
    <section id="faq" className={`${sectionBgClass} py-16 scroll-mt-16`}>
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          {title}
        </h2>
        {intro && (
          <p className="mt-2 text-sm text-slate-600">
            {intro}
          </p>
        )}

        <div className="mt-8 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          <Accordion type="single" collapsible>
            {items.map((item: FaqItem, index) => (
              <AccordionItem
                key={item.question}
                value={`item-${index}`}
              >
                <AccordionTrigger className="px-4 py-3 text-left text-sm font-medium text-slate-900">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-sm text-slate-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
