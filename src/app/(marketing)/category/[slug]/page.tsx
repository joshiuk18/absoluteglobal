import Link from "next/link";
import { notFound } from "next/navigation";

import { landingCategories } from "@/config/landing";

type Props = { params: Promise<{ slug: string }> };

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = landingCategories.find((c) => c.slug === slug);
  if (!cat) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="mb-4 text-sm text-slate-600">
        <Link href="/" className="font-medium text-[var(--ag-accent-deep)] hover:underline">
          ← Home
        </Link>
      </p>
      <h1 className="text-2xl font-bold text-slate-900">{cat.label}</h1>
      <p className="mt-2 text-slate-600">
        Category listing will go here when products are connected.
      </p>
    </div>
  );
}
