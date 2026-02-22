"use client";

import { Tabs } from "@/app/components/Tabs";

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
      "Practice rewriting a technical service as a simple outcome. In production, this thinking feeds directly into your services copy for any niche.",
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
  return (
    <Tabs
      tabs={TABS}
      ariaLabel="Tabs UI learning playground"
    />
  );
}
