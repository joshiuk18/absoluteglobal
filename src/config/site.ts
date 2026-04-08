const productionUrl = "https://absoluteglobal.in";

export const siteConfig = {
  name: "Absolute Global",
  description:
    "Absolute Global — quality products and a seamless shopping experience. Browse our catalog and shop online.",
  /** Canonical site URL (set NEXT_PUBLIC_SITE_URL locally if needed, e.g. http://localhost:3000). */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? productionUrl,

  logoUrl: '/absoluteGlobal.jpg',

  /** Public brand / contact hints for structured data */
  sameAs: [] as string[],
} as const;
