// app/playground/tabs/page.tsx

import type { Metadata } from "next";
import { TabsPlayground } from "./tabs-playground";

export const metadata: Metadata = {
  title: "Tabs Playground | AI-First Landing Practice",
  description:
    "Practice a simple tabs UI in Next.js with Tailwind and React state, separate from production templates.",
};

export default function TabsPlaygroundPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Tabs UI playground
        </h1>
        <p className="mt-2 text-sm text-slate-600 sm:text-base">
          A small, isolated component to practice stateful UI and accessible
          tabs without touching the dentist or advocate pages.
        </p>

        <div className="mt-8">
          <TabsPlayground />
        </div>
      </div>
    </main>
  );
}
