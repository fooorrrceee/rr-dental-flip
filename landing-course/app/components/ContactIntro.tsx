import { SectionHeader } from "@/app/components/SectionHeader";

type ContactIntroProps = {
  title: string;
  intro?: string;
  note?: string;
};

export function ContactIntro({ title, intro, note }: ContactIntroProps) {
  return (
    <div className="space-y-3">
      <SectionHeader title={title} intro={intro} />
      {note ? (
        <p className="text-xs text-slate-500">
          {note}
        </p>
      ) : null}
    </div>
  );
}
