import { client } from "@/lib/sanity";

import Product from "../types/products";

import Link from "next/link";

import Image from "next/image";

const Women = async () => {
  const query = `*[_type == 'product' && category->category == 'Women']{

_id,

name,

price,

"slug": slug.current,

"categoryName": category->category,

"imageUrl": images[0].asset->url

}`;

  const data = (await client.fetch(query)) as Product[];

  return (
    <div className="mt-10 container mb-10">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold text-primary tracking-wide sm:text-3xl">
          Women Collection
        </h1>
      </div>

      <span className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-x-1 gap-y-2">
        {data.map((product) => (
          <div
            className="h-[220px] w-fit bg-secondary rounded-lg sm:w-fit"
            key={product._id}
          >
            <div className="">
              <Image
                src={product.imageUrl}
                className="h-[170px] w-screen object-cover rounded-t-lg hover:opacity-70"
                alt={product.name}
                width={200}
                height={300}
              />

              <div className="flex justify-between items-center px-2 py-1">
                <Link
                  href={`/product/${product.slug}`}
                  className="text-xs text-primary hover:opacity-70"
                >
                  {product.name}
                </Link>

                <p className="text-xs text-primary font-bold">
                  ${product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </span>
    </div>
  );
};

export default Women;
