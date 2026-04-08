import type { Metadata } from "next";

import { CategoryNav } from "@/components/landing/category-nav";
import { HeroCarousel } from "@/components/landing/hero-carousel";
import { ProductShowcase } from "@/components/landing/product-showcase";
import { SectionHeading } from "@/components/landing/section-heading";
import { TestimonialShowcase } from "@/components/landing/testimonials-showcase";
import { SectionGuarantee } from "@/components/landing/section-guarantee";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <div className="min-h-0 flex-1 bg-[var(--ag-page)]">
      <CategoryNav />
      <HeroCarousel />
      <SectionHeading title="Our Products" id="our-products" />
      <ProductShowcase />
      <SectionGuarantee />
      <SectionHeading title="Testimonials" id="testimonials" />
      <TestimonialShowcase />
    </div>
  );
}
