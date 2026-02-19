// app/components/Section.tsx

type SectionProps = {
  id?: string;
  ariaLabelledBy?: string;
  background?: "white" | "muted";
  paddingY?: "normal" | "comfortable";
  children: React.ReactNode;
};

export function Section({
  id,
  ariaLabelledBy,
  background = "white",
  paddingY = "normal",
  children,
}: SectionProps) {
  const bgClass = background === "muted" ? "bg-slate-50" : "bg-white";
  const pyClass =
    paddingY === "comfortable" ? "py-16 sm:py-20" : "py-12 sm:py-16";

  return (
    <section
      id={id}
      className={`${bgClass} ${pyClass} scroll-mt-16`}
      aria-labelledby={ariaLabelledBy}
    >
      <div className="mx-auto max-w-5xl px-4">
        {children}
      </div>
    </section>
  );
}
