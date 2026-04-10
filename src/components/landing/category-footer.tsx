import Link from "next/link";
import Image from 'next/image';
import { landingFooterSections } from "@/config/footer";

import {
    IconFacebook,
    IconInstagram,
    IconWhatsapp,
    IconMail,
    IconPhone,
    IconMapPin
} from "@/components/icons/store-icons";
import { siteConfig } from "@/config/site";

const socialClass =
    "flex h-8 w-8 items-center justify-center rounded border border-slate-300/80 bg-white text-[#2563eb] shadow-sm transition hover:bg-slate-50";

export function CategoryFooter() {
    return (
        <footer
            className="ag-header-pattern border-t border-cyan-900/10 bg-white py-12 px-6 sm:px-8 md:px-12 lg:px-16"
            aria-label="Company policies, links, contact information, and vendor registration"
        >
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-8 pl-">

                    <div className="flex flex-col space-y-6">
                        <Link
                            href="/"
                            className="flex shrink-0 items-center rounded-lg bg-white h-24 w-24"
                        >
                            <Image
                                src={siteConfig.logoUrl}
                                alt={`${siteConfig.name} logo`}
                                width={300}
                                height={215}
                                className="object-contain"
                                sizes="160px"
                                priority
                            />
                        </Link>

                        <div className="flex items-center gap-4">
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
                        </div>
                    </div>

                    {landingFooterSections.map((section) => (
                        <div key={section.id} className="flex flex-col">
                            <h2 className="font-semibold text-cyan-900 mb-5 border-b-2 border-cyan-500 w-max pb-1">
                                {section.title}
                            </h2>


                            {section.category && section.id !== "3" && section.id !== "4" && (
                                <ul className="space-y-3 text-cyan-800">
                                    {section.category.map((cat) => (
                                        <li key={cat.id}>
                                            <Link
                                                href={`/policies/${cat.slug}`}
                                                className="hover:text-cyan-600 transition"
                                            >
                                                {cat.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}


                            {section.id === "3" && (
                                <ul className="space-y-4 text-cyan-900 text-sm">
                                    <li className="flex items-start gap-3">
                                        <span
                                            aria-hidden="true"
                                            className="mt-1 text-cyan-600"
                                        >
                                            <IconMapPin className="h-4 w-4" />
                                        </span>
                                        <address className="not-italic leading-relaxed">
                                            F-316, 2nd Floor, Lado Sarai,<br />New Delhi-110030
                                        </address>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span aria-hidden="true" className="text-cyan-600">
                                            <IconMail className="h-4 w-4" />
                                        </span>
                                        <a
                                            href="mailto:info@absoluteglobal.in"
                                            className="hover:text-cyan-600 transition"
                                        >
                                            info@absoluteglobal.in
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span aria-hidden="true" className="text-cyan-600">
                                            <IconPhone className="h-4 w-4" />
                                        </span>
                                        <a
                                            href="tel:+919871829090"
                                            className="hover:text-cyan-600 transition"
                                        >
                                            +91-9871829090
                                        </a>
                                    </li>
                                </ul>
                            )}


                            {section.id === "4" && (
                                <button
                                    type="button"
                                    className="mt-2 bg-cyan-700 text-white py-2 px-5 rounded shadow hover:bg-cyan-800 transition self-start"
                                    aria-label="Open Vendor Registration Form"

                                >
                                    Open Form
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
}