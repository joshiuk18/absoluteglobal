"use client";

import { useCallback, useEffect, useState } from "react";
import { landingTestimonials } from "@/config/testimonials";

export function TestimonialShowcase() {
    const [active, setActive] = useState(0);
    const count = landingTestimonials.length;

    const go = useCallback(
        (i: number) => {
            setActive(((i % count) + count) % count);
        },
        [count]
    );

    useEffect(() => {
        const t = setInterval(() => {
            setActive((a) => (a + 1) % count);
        }, 6000);
        return () => clearInterval(t);
    }, [count]);

    return (
        <section className="border-t border-slate-200/80 bg-[var(--ag-page)] pb-16 pt-2">
            <div className="mx-auto max-w-6xl px-4 relative">
                <ul className="relative min-h-[180px]">
                    {landingTestimonials.map((item, i) => (
                        <li
                            key={item.id}
                            className="absolute inset-0 transition-opacity duration-500 ease-out flex flex-col items-center justify-center"
                            style={{
                                opacity: i === active ? 1 : 0,
                                pointerEvents: i === active ? "auto" : "none",
                            }}
                            aria-hidden={i !== active}
                        >
                            <p className="italic bg-white text-center text-slate-700 my-2 px-8 py-6 rounded-xl">
                                {item.content}
                            </p>
                            <p className="font-semibold text-center">
                                {item.name}
                            </p>
                            <p className="text-center text-sm text-slate-500">
                                {item.location}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            <div
                className="mt-4 flex justify-center gap-2"
                role="tablist"
                aria-label="Testimonial navigation"
            >
                {landingTestimonials.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        role="tab"
                        aria-selected={i === active}
                        aria-label={`Show testimonial ${i + 1}`}
                        className={`h-1.5 w-1.5 rounded-full transition-colors ${i === active
                            ? "bg-slate-700"
                            : "bg-slate-300 hover:bg-slate-400"
                            }`}
                        onClick={() => go(i)}
                    />
                ))}
            </div>
        </section>
    );
}