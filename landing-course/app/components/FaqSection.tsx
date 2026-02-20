"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";


const faqs = [
  {
    question: "Do you treat kids?",
    answer:
      "Yes, we offer gentle dental care for children of all ages, with extra time for first visits so they can get comfortable.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We work with most major insurers and can help you understand what is covered before starting treatment.",
  },
  {
    question: "How often should I visit the dentist?",
    answer:
      "Most patients benefit from a check-up and cleaning every 6 months, but we’ll recommend a schedule based on your teeth and gums.",
  },
  {
    question: "I’m nervous about dental treatment. Can you help with that?",
    answer:
      "Yes. We explain each step in simple language, check in with you during treatment, and can break work into shorter visits so you feel more in control.",
  },
  {
    question: "What if I can’t decide right away after the consultation?",
    answer:
      "That’s okay. We’ll give you a written summary of options and costs so you can think about it at home and contact us when you’re ready.",
  },
];


export function FaqSection() {

  return (
    <section id="faq" className="bg-slate-50 py-16 scroll-mt-16">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          Frequently asked questions
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Answers to common questions about appointments, pricing, and care.
        </p>

        <div className="mt-8 divide-y divide-slate-200 border border-slate-200 rounded-xl bg-white">
            <Accordion type="single" collapsible>
            {faqs.map((item, index) => (
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
