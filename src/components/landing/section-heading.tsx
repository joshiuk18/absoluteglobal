type SectionHeadingProps = {
  title: string;
  id?: string;
};

export function SectionHeading({ title, id }: SectionHeadingProps) {
  return (
    <div className="flex items-center justify-center gap-4 px-4 py-10 sm:py-12">
      <span
        className="hidden h-px flex-1 max-w-[120px] bg-[var(--ag-accent)] sm:block sm:max-w-[180px]"
        aria-hidden
      />
      <h2
        id={id}
        className="shrink-0 text-center text-xl font-bold uppercase tracking-wide text-slate-900 sm:text-2xl"
      >
        {title}
      </h2>
      <span
        className="hidden h-px flex-1 max-w-[120px] bg-[var(--ag-accent)] sm:block sm:max-w-[180px]"
        aria-hidden
      />
    </div>
  );
}
