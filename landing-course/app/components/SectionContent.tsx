import { ReactNode } from "react";

type SectionContentProps = {
  children: ReactNode;
  className?: string;
};

export function SectionContent({ children, className }: SectionContentProps) {
  return (
    <div
      className={`mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
}
