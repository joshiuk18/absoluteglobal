/**
 * Homepage copy + structure. Add `imageSrc` / media when wiring CMS or static imports:
 * categories: optional image per row in category-nav
 * hero: optional background image per slide in hero-carousel
 */

export const landingCategories = [
  { slug: "fashion", label: "Fashion", img: "/category/Fashion/Fashion.jpg" },
  { slug: "health-personal-care", label: "Health & Personal care", img: "/category/Health&PersonalCare/Healthcare.jpg" },
  { slug: "electronics", label: "Electronics", img: "/category/Electronics/Electronics.jpg" },
  { slug: "spiritual-articles", label: "Spiritual Articles", img: "/category/Spiritual/Spiritual.jpg" },
] as const;

/** `tone` picks a CSS gradient placeholder in `HeroCarousel` until real art is added. */
export const landingHeroSlides = [
  {
    id: "1",
    tone: 0,
    eyebrow: "BEAUTYFUL AND EXCLUSIVE CRYSTALS",
    title: "FOR YOUR INNER SELF",
    img: "/heroSlides/1.jpg"
  },
  {
    id: "2",
    tone: 1,
    eyebrow: "PREMIUM COLLECTION",
    title: "CRAFTED FOR YOU",
    img: "/heroSlides/2.png"
  },
  {
    id: "3",
    tone: 2,
    eyebrow: "WELLNESS & CARE",
    title: "ELEVATE YOUR ROUTINE",
    img: "/heroSlides/3.png"
  },
  {
    id: "4",
    tone: 3,
    eyebrow: "DISCOVER MORE",
    title: "SHOP THE LATEST",
    img: "/heroSlides/4.png"
  },
  {
    id: "5",
    tone: 1,
    eyebrow: "PREMIUM COLLECTION",
    title: "CRAFTED FOR YOU",
    img: "/heroSlides/5.png"
  },
  {
    id: "6",
    tone: 2,
    eyebrow: "WELLNESS & CARE",
    title: "ELEVATE YOUR ROUTINE",
    img: "/heroSlides/6.jpg"
  },
  {
    id: "7",
    tone: 3,
    eyebrow: "DISCOVER MORE",
    title: "SHOP THE LATEST",
    img: "/heroSlides/7.jpeg"
  },
] as const;