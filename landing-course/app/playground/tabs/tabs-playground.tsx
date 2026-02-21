"use client";

import { useState } from "react";

type Tab = {
  id: string;
  label: string;
  title: string;
  body: string;
};

const TABS: Tab[] = [
  {
    id: "pain",
    label: "Pain relief first",
    title: "Start with the problem that hurts most",
    body:
      "Use this tab to remind yourself: in real services sections, lead with the service that solves the most urgent pain, not the most technically impressive one.",
  },
  {
    id: "clarity",
    label: "Clarity over features",
    title: "Explain services in plain language",
    body:
      "Practice rewriting a technical service as a simple outcome. In production, this thinking feeds directly into your dentist and advocate services copy.",
  },
  {
    id: "proof",
    label: "Proof and next step",
    title: "Tie each tab to proof and a CTA",
    body:
      "Imagine a short proof point and a small CTA per tab. Later, you can reuse this pattern to make service sections feel more actionable.",
  },
];

export function TabsPlayground() {
  const [activeId, setActiveId] = useState<string>(TABS[0]?.id ?? "");

  const activeTab = TABS.find((tab) => tab.id === activeId) ?? TABS[0];

  return (
    <section
      aria-label="Tabs UI learning playground"
      className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm"
    >
      {/* Tab list */}
      <div
        role="tablist"
        aria-orientation="horizontal"
        className="flex flex-wrap gap-2"
      >
        {TABS.map((tab) => {
          const isActive = tab.id === activeId;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`tab-panel-${tab.id}`}
              id={`tab-${tab.id}`}
              onClick={() => setActiveId(tab.id)}
              className={
                "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm " +
                (isActive
                  ? "border-emerald-600 bg-emerald-50 text-emerald-800"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50")
              }
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Active panel */}
      <div
        role="tabpanel"
        id={`tab-panel-${activeTab.id}`}
        aria-labelledby={`tab-${activeTab.id}`}
        className="mt-6 rounded-lg border border-slate-100 bg-slate-50 px-4 py-4 sm:px-5 sm:py-5"
      >
        <h2 className="text-base font-semibold text-slate-900 sm:text-lg">
          {activeTab.title}
        </h2>
        <p className="mt-2 text-sm text-slate-700 sm:text-base">
          {activeTab.body}
        </p>
      </div>
    </section>
  );
}
