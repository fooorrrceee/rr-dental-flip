import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="bg-slate-50 py-12 sm:py-16 scroll-mt-16 "
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 sm:flex-row sm:items-center">
        <div className="sm:flex-1">
          <h1 id="hero-heading" className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Gentle dental care in RS Puram for everyday problems and long-term smile health
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
            From toothaches and cleaning to braces and missing teeth, we focus on clear explanations, comfort,
            and treatment plans that fit your daily life.
          </p>

          <a href="#contact">
            <Button className="mt-6 rounded-full px-6 py-2.5">
              Book an appointment or ask a question
            </Button>
          </a>

        </div>
        <div
          className="flex min-h-[160px] flex-1 items-center justify-center rounded-xl bg-slate-200 text-sm text-slate-600"
          aria-hidden="true"
        >
          Hero image
        </div>
      </div>
    </section>
  );
}
