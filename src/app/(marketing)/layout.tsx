import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CategoryNav } from "@/components/landing/category-nav";
import { CategoryFooter } from "@/components/landing/category-footer";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <SiteHeader />
      <CategoryNav />
      <main className="flex-1">{children}</main>
      <CategoryFooter />
      <SiteFooter />
    </>
  );
}
