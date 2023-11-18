import { client } from "@/lib/sanity";
import Product from "../types/products";
import Link from "next/link";
import Image from "next/image";

const Newest = async () => {
  const query = `*[_type == 'product'][0...4] | order(_createdAt desc){
        _id,
        name,
        price,
        "slug": slug.current,
        "categoryName": category->category,
        "imageUrl": images[0].asset->url
    }`;
  const data = ( await client.fetch(query) ) as Product[];

  return (
    <div className="mt-10 container">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold text-primary tracking-wide sm:text-3xl">
          Our Newest Products
        </h1>
        <Link
          href="/"
          className="text-sm text-slate-600 flex items-center gap-1 sm:text-xl"
        >
          see all{" "}
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-3 h-3 hover:text-primary"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </Link>
      </div>
      <span className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-x-1 gap-y-2">
      {data.map((product)=> (
        <div className="h-[220px] w-fit bg-secondary rounded-lg sm:w-fit" key={product._id}>
            <div className="">
                <Image src={product.imageUrl} className="h-[170px] w-screen object-cover rounded-t-lg hover:opacity-70" alt={product.name} width={200} height={300}/>
                <div className="flex justify-between items-center px-2 py-1">
                  <Link href={product.slug} className="text-xs text-primary hover:opacity-70">{product.name}</Link>
                  <p className="text-xs text-primary font-bold">${product.price}</p>
                </div>
                <p className="text-xs px-2 opacity-70">{product.categoryName}</p>
            </div>
        </div>
      ))}
      </span>
    </div>
  );
};

export default Newest;
