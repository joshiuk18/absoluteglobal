export function ProductShowcase() {
  const placeholders = Array.from({ length: 8 }, (_, i) => i);

  return (
    <section className="border-t border-slate-200/80 bg-[var(--ag-page)] pb-16 pt-2">
      <div className="mx-auto max-w-6xl px-4">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6">
          {placeholders.map((i) => (
            <li
              key={i}
              className="aspect-square animate-pulse rounded-lg bg-gradient-to-br from-slate-200/90 to-slate-100 ring-1 ring-slate-200/80"
            >
              <span className="sr-only">Product placeholder {i + 1}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-sm text-slate-600">
          Product listings will appear here when your catalog is connected.
        </p>
      </div>
    </section>
  );
}
