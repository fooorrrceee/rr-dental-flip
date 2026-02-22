"use client";

import { useState } from "react";

type TabItem = {
  id: string;
  label: string;
  title: string;
  body: string;
};

type TabsProps = {
  tabs: TabItem[];
  initialId?: string;
  ariaLabel?: string;
  className?: string;
};

export function Tabs({
  tabs,
  initialId,
  ariaLabel = "Tabs",
  className = "",
}: TabsProps) {
  const firstId = tabs[0]?.id ?? "";
  const [activeId, setActiveId] = useState<string>(initialId ?? firstId);

  const activeTab = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  if (!activeTab) {
    // No tabs passed; render nothing to fail safely
    return null;
  }

  return (
    <section
      aria-label={ariaLabel}
      className={`rounded-xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm ${className}`}
    >
      {/* Tab list */}
      <div
        role="tablist"
        aria-orientation="horizontal"
        className="flex flex-wrap gap-2"
      >
        {tabs.map((tab) => {
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
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {activeTab.title}
        </h2>

        <p className="mt-2 text-sm text-slate-700 sm:text-base">
          {activeTab.body}
        </p>
      </div>
    </section>
  );
}
