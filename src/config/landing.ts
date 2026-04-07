/**
 * Homepage copy + structure. Add `imageSrc` / media when wiring CMS or static imports:
 * categories: optional image per row in category-nav
 * hero: optional background image per slide in hero-carousel
 */

export const landingCategories = [
  { slug: "fashion", label: "Fashion" },
  { slug: "health-personal-care", label: "Health & Personal care" },
  { slug: "electronics", label: "Electronics" },
  { slug: "spiritual-articles", label: "Spiritual Articles" },
] as const;

/** `tone` picks a CSS gradient placeholder in `HeroCarousel` until real art is added. */
export const landingHeroSlides = [
  {
    id: "1",
    tone: 0,
    eyebrow: "BEAUTYFUL AND EXCLUSIVE CRYSTALS",
    title: "FOR YOUR INNER SELF",
  },
  {
    id: "2",
    tone: 1,
    eyebrow: "PREMIUM COLLECTION",
    title: "CRAFTED FOR YOU",
  },
  {
    id: "3",
    tone: 2,
    eyebrow: "WELLNESS & CARE",
    title: "ELEVATE YOUR ROUTINE",
  },
  {
    id: "4",
    tone: 3,
    eyebrow: "DISCOVER MORE",
    title: "SHOP THE LATEST",
  },
] as const;
