"use client";
import Image from 'next/image'

import { useCallback, useEffect, useState } from "react";

import { landingHeroSlides } from "@/config/landing";

const SLIDE_BACKGROUNDS = [
  "bg-gradient-to-br from-violet-300 via-fuchsia-200 to-cyan-200",
  "bg-gradient-to-br from-indigo-300 via-sky-200 to-teal-200",
  "bg-gradient-to-br from-rose-300 via-orange-200 to-amber-200",
  "bg-gradient-to-br from-slate-400 via-slate-300 to-cyan-200",
] as const;

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const count = landingHeroSlides.length;

  const go = useCallback(
    (i: number) => {
      setActive(((i % count) + count) % count);
    },
    [count],
  );

  useEffect(() => {
    const t = setInterval(() => {
      setActive((a) => (a + 1) % count);
    }, 6000);
    return () => clearInterval(t);
  }, [count]);

  return (
    <section className="px-4 py-6 sm:py-8" aria-label="Featured">
      <div className="mx-auto max-w-6xl">
        <div className="relative aspect-[16/9] max-h-[min(70vh,520px)] w-full overflow-hidden rounded-lg bg-slate-200 shadow-lg sm:rounded-xl">
          {landingHeroSlides.map((s, i) => (
            <div
              key={s.id}
              className="absolute inset-0 transition-opacity duration-500 ease-out"
              style={{
                opacity: i === active ? 1 : 0,
                pointerEvents: i === active ? "auto" : "none",
              }}
            >
              <div
                className={`absolute inset-0 min-h-[120px] ${SLIDE_BACKGROUNDS[s.tone % SLIDE_BACKGROUNDS.length]}`}
                role="img"
                aria-label="Hero image placeholder"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent"
                aria-hidden
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
                <Image src={`${s.img}`} alt={s.title} fill className='rounded-xl' />
                {/* <p className="mb-2 max-w-xl text-xs font-semibold uppercase tracking-[0.2em] text-white/95 sm:text-sm">
                  {s.eyebrow}
                </p>
                <h2 className="max-w-3xl text-2xl font-bold uppercase tracking-tight sm:text-3xl md:text-4xl">
                  {s.title}
                </h2> */}
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-4 flex justify-center gap-2"
          role="tablist"
          aria-label="Hero slides"
        >
          {landingHeroSlides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Show slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition sm:h-3 sm:w-3 ${i === active ? "bg-slate-700" : "bg-slate-300 hover:bg-slate-400"
                }`}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
