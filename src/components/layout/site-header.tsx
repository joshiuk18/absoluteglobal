import Image from "next/image";
import Link from "next/link";

import {
  IconFacebook,
  IconGridDots,
  IconHome,
  IconInstagram,
  IconSearch,
  IconShoppingBag,
  IconWhatsapp,
} from "@/components/icons/store-icons";
import { siteConfig } from "@/config/site";

const LOGO_WIDTH = 300;
const LOGO_HEIGHT = 215;

const socialClass =
  "flex h-8 w-8 items-center justify-center rounded border border-slate-300/80 bg-white text-[#2563eb] shadow-sm transition hover:bg-slate-50";

export function SiteHeader() {
  const cartCount = 0;

  return (
    <header className="ag-header-pattern border-b border-cyan-900/10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:py-4">
        <Link
          href="/"
          className="flex shrink-0 items-center rounded-lg bg-white px-3 py-2 shadow-sm outline-offset-4 ring-1 ring-slate-200/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--ag-accent)]"
        >
          <Image
            src={siteConfig.logoUrl}
            alt={`${siteConfig.name} logo`}
            width={LOGO_WIDTH}
            height={LOGO_HEIGHT}
            className="h-11 w-auto max-w-[140px] object-contain sm:h-12 sm:max-w-[160px]"
            sizes="160px"
            priority
          />
          <span className="sr-only">{siteConfig.name}</span>
        </Link>

        <div className="flex flex-1 flex-wrap items-center justify-end gap-x-4 gap-y-2 sm:gap-x-5">
          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              href="/"
              className="flex h-10 w-10 items-center justify-center rounded-full text-slate-800 transition hover:bg-white/60"
              aria-label="Home"
            >
              <IconHome className="h-5 w-5" />
            </Link>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full text-slate-800 transition hover:bg-white/60"
              aria-label="Search"
            >
              <IconSearch className="h-5 w-5" />
            </button>
            <Link
              href="/cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-slate-800 transition hover:bg-white/60"
              aria-label={`Shopping cart, ${cartCount} items`}
            >
              <IconShoppingBag className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-neutral-900 px-1 text-[10px] font-semibold text-white">
                {cartCount}
              </span>
            </Link>
          </div>

          <nav
            className="flex items-center gap-3 text-sm font-medium text-slate-800 sm:gap-4"
            aria-label="Account"
          >
            <Link href="/login" className="hover:text-[var(--ag-accent-deep)]">
              Login
            </Link>
            <Link href="/register" className="hover:text-[var(--ag-accent-deep)]">
              Register
            </Link>
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={socialClass}
              aria-label="Facebook"
            >
              <IconFacebook className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={socialClass}
              aria-label="Instagram"
            >
              <IconInstagram className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className={socialClass}
              aria-label="WhatsApp"
            >
              <IconWhatsapp className="h-4 w-4" />
            </a>
            <a href="#" className={socialClass} aria-label="More links">
              <IconGridDots className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
