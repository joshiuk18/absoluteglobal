import Image from 'next/image'
import { landingProducts } from "@/config/product";

export function ProductShowcase() {
  const placeholders = Array.from({ length: 8 }, (_, i) => i);

  return (
    <section className="border-t border-slate-200/80 bg-[var(--ag-page)] pb-16 pt-2">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6">
          {placeholders.map((i) => (
            <div
              key={i}
              className="aspect-square rounded-lg "
            >
              <span className="sr-only">Product placeholder {i + 1}</span>


              <div className="grid grid-cols-1 gap-4">
                {landingProducts.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg p-2 flex flex-col relative hover:shadow-lg transition h-[500px]"
                  >

                    <div className="absolute top-3 left-3 bg-white text-gray-800 px-3 py-1 rounded-full shadow text-xs font-semibold z-10">
                      Sale!
                    </div>


                    <Image
                      src={`/${item.img}`}
                      alt={item.title}
                      width={250}
                      height={200}
                      className="rounded-md object-fill mb-2 w-full h-48"
                    />


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
          ))}
        </div>

        {/* <p className="mt-8 text-center text-sm text-slate-600">
          Product listings will appear here when your catalog is connected.
        </p> */}
      </div>
    </section>
  );
}