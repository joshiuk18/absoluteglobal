const productionUrl = "https://absoluteglobal.in";

export const siteConfig = {
  name: "Absolute Global",
  description:
    "Absolute Global — quality products and a seamless shopping experience. Browse our catalog and shop online.",
  /** Canonical site URL (set NEXT_PUBLIC_SITE_URL locally if needed, e.g. http://localhost:3000). */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? productionUrl,

  logoUrl: `${productionUrl}/wp-content/uploads/2025/01/cropped-WhatsApp_Image_2025-01-05_at_3.07.40_PM-removebg-preview-300x215.png`,

  /** Public brand / contact hints for structured data */
  sameAs: [] as string[],
} as const;
