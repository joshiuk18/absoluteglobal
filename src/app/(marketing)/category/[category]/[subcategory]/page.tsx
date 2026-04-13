import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { landingProducts } from "@/config/product";
import { siteConfig } from "@/config/site";


type Props = {
    params: Promise<{
        category: string;
        subcategory: string;
    }>;
};

export default async function ProductDetailPage({ params }: Props) {

    const { category, subcategory } = await params;

    const selectedCategory = landingProducts.find(
        (cat) => cat.category === category
    );

    if (!selectedCategory) return notFound();

    const product = selectedCategory.products.find(
        (p) => p.slug === subcategory
    );

    if (!product) return notFound();

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row gap-10">

                <div className="relative w-full md:w-1/2 p-3 md:p-4 group">
                    <div className="relative overflow-hidden rounded-xl">
                        <span className="absolute top-4 left-4 bg-white text-gray-800 px-3 py-1 rounded-full shadow-md text-xs font-semibold z-10">
                            Sale!
                        </span>
                        <Image
                            src={product.img}
                            alt={product.title}
                            width={500}
                            height={500}
                            className="w-full h-auto object-fill transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-3 md:p-4">

                    <p className="mb-4 text-base text-gray-500">
                        <Link href="/">
                            ← Home / {category} / {product.title}
                        </Link>
                    </p>
                    <p className="text-blue-600 mb-4 cursor-pointer">
                        {product.category}
                    </p>
                    <h1 className="text-2xl font-bold mb-4">
                        {product.title}
                    </h1>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-gray-400 line-through">
                            ₹{product.oldPrice}
                        </span>
                        <span className="text-green-600 text-xl font-semibold">
                            ₹{product.newPrice}
                        </span>
                    </div>
                    <div>
                        <p>Product Details</p>
                        <h3>Name: {product.title}</h3>
                    </div>
                    <div className="flex items-center mt-4 mb-4">
                        <span className="text-sm font-medium text-gray-600">
                            Availability: {" "}
                        </span>
                        <span className="text-sm font-semibold text-green-600">
                            In Stock
                        </span>
                    </div>



                    <div className="flex items-center">
                        <button className="h-10 w-10 rounded-l-lg border border-gray-300 text-lg hover:bg-gray-100">
                            -
                        </button>

                        <input
                            type="text"
                            className="h-10 w-14 text-center bg-white"
                        />

                        <button className="h-10 w-10 rounded-r-lg border border-gray-300 text-lg hover:bg-gray-100" >
                            +
                        </button>
                    </div>

                    <button className="bg-indigo-400 border px-4 py-1 my-4 rounded-lg" >
                        Add to cart
                    </button>

                    <div className="mb-5 border-t border-gray-400" />

                    <div className="space-y-2 text-sm text-gray-600">
                        <p>
                            <span className="font-medium text-gray-700">Categories:</span>{" "}

                            <span className="text-blue-600 cursor-pointer">
                                {product.category}
                            </span>
                        </p>
                        <p>
                            <span className="font-medium text-gray-700">Brand:</span>{" "}
                            <span className="font-semibold text-gray-800">
                                {siteConfig.name}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
}