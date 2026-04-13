import Link from "next/link";
import Image from 'next/image'

import { landingProducts } from "@/config/product";

export function CategoryNav() {

  return (
    <section
      className="border-b border-cyan-900/10 bg-[var(--ag-surface-strong)] py-6 sm:py-8"
      aria-label="Shop by category"
    >
      <div className="mx-auto max-w-6xl px-4">
        <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
          {landingProducts.map((cat) => (
            <li key={cat.id} className="flex flex-col items-center text-center">
              <Link
                href={`/category/${cat.category}`}
                className="group flex flex-col items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ag-accent)] focus-visible:ring-offset-2"
              >

                <span
                  className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-white 
                  bg-gradient-to-br from-slate-200 to-slate-100 text-xs font-medium text-slate-500 shadow-md 
                  ring-1 ring-slate-200/80 transition group-hover:ring-[var(--ag-accent)] sm:h-28 sm:w-28 sm:text-sm"
                  aria-hidden
                >
                  <Image src={`${cat.img}`} alt={cat.label} width={80} height={80} />
                </span>
                <span className="max-w-[140px] text-sm font-medium leading-snug text-slate-800 sm:text-base">
                  {cat.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
