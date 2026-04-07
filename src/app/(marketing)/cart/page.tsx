import Link from "next/link";

export default function CartPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 text-center">
      <h1 className="text-2xl font-bold text-slate-900">Your cart</h1>
      <p className="mt-3 text-slate-600">Your cart is empty.</p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-[var(--ag-accent)] px-6 py-2.5 text-sm font-semibold text-white hover:opacity-95"
      >
        Continue shopping
      </Link>
    </div>
  );
}
