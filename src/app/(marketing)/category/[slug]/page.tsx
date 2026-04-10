import Link from "next/link";
import Image from 'next/image';
import { notFound } from "next/navigation";

import { landingCategories } from "@/config/landing";
import { landingProducts } from "@/config/product";

type Props = { params: Promise<{ slug: string }> };

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = landingCategories.find((c) => c.slug === slug);
  if (!cat) notFound();

  const matchedCategory = landingProducts.find(
    (item) => item.slug === slug);
  if (!matchedCategory) notFound();
  const products = matchedCategory?.products ?? [];

  const getProductLength = landingProducts.find(
    item => item.slug === slug
  )?.products?.length || 0;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="mb-4 text-sm text-slate-600">
        <Link href="/" className="font-medium text-[var(--ag-accent-deep)] hover:underline">
          ← Home
        </Link>
      </p>
      <h1 className="text-2xl font-bold text-slate-900">{cat.label}</h1>
      <div className='flex justify-between mt-4'>
        <p>Showing all {getProductLength} results</p>
        <select className="px-2 py-1 border border-gray-400 rounded focus:outline-none">
          <option>Sort by Newest</option>
          <option>Sort by Popularity</option>
          <option>Sort by Average Rating</option>
          <option>Sort by Price: Low to High</option>
          <option>Sort by Price: High to Low</option>
        </select>
      </div>
      {/* <p className="mt-2 text-slate-600">
        Category listing will go here when products are connected.
      </p> */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6 my-10">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg p-2 flex flex-col relative hover:shadow-lg transition h-[500px]"
          >
            <Link href={`/category/${slug}/${item.slug}`}>
              <div className="absolute top-3 left-3 bg-white text-gray-800 px-3 py-1 rounded-full shadow text-xs font-semibold z-10">
                Sale!
              </div>


              <Image
                src={item.img}
                alt={item.title}
                width={250}
                height={200}
                className="rounded-md object-fill mb-2 w-full h-48"
              />
            </Link>



            <div className="flex flex-col p-1 flex-1">
              <p className="text-gray-400 text-xs mb-1">{item.category}</p>
              <p className="font-semibold text-sm mb-2">{item.title}</p>
              <div className="mb-2 text-sm">
                <span className="line-through text-gray-400 mr-2">
                  &#8377;{item.oldPrice}
                </span>
                <span className="text-blue-500 font-semibold">
                  &#8377;{item.newPrice}
                </span>
              </div>
            </div>


            <button className="bg-blue-500 text-white rounded px-4 py-2 mt-auto hover:bg-blue-600 transition">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
