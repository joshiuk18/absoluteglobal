import Link from "next/link";
import { notFound } from "next/navigation";
import { landingFooterSections } from "@/config/footer";

type Props = { params: Promise<{ slug: string }> };

export default async function CategoryPage({ params }: Props) {
    const { slug } = await params;

    const cat = landingFooterSections
        .flatMap((section) => section.category)
        .find((item) => item.slug === slug);

    if (!cat) notFound();

    return (
        <div className="mx-auto max-w-6xl px-4 py-12">

            <div className="mt-6">
                {typeof cat.content === "function" ? (
                    <cat.content />
                ) : (
                    <p>{cat.content ?? "Content not available."}</p>
                )}
            </div>
        </div>
    );
}