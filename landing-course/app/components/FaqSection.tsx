"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do you treat kids?",
    answer: "Yes, we offer gentle dental care for children of all ages.",
  },
  {
    question: "Do you accept insurance?",
    answer: "We work with most major insurers and help with paperwork.",
  },
  {
    question: "How often should I visit the dentist?",
    answer: "Most patients benefit from a check-up and cleaning every 6 months.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          Frequently asked questions
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Answers to common questions about appointments, pricing, and care.
        </p>

        <div className="mt-8 divide-y divide-slate-200 border border-slate-200 rounded-xl bg-white">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className="ml-4 text-slate-500">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 text-sm text-slate-600">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
