import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  eyebrow?: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  title,
  eyebrow,
  intro,
  align = "left",
  className,
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={cn("flex flex-col gap-2", alignment, className)}>
      {eyebrow ? (
        <p className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-2xl font-semibold text-slate-900">
        {title}
      </h2>

      {intro ? (
        <p className="max-w-prose text-sm text-slate-600">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
