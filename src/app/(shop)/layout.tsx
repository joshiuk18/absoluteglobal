import type { ReactNode } from "react";

/**
 * Shop route group — use for /products, /cart, /checkout, etc.
 * Add a shared shop header or breadcrumbs here when you build those routes.
 */
export default function ShopLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
