export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="block h-px w-8 bg-clay/50" />
      <span className="text-[0.7rem] uppercase tracking-[0.25em] text-dusk">{children}</span>
    </div>
  );
}
