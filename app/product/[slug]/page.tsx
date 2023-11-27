import { ProductSlug } from "@/app/types/productSlug";
import { Button } from "@/components/ui/button";
import { client} from "@/lib/sanity";
import Image from "next/image";

const getData = async (slug: string) => {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
    name,
    "slug": slug.current,
    "images": images[0].asset->url,
    "category": category->category,
    price,
    description
  }`;
  const data = await client.fetch(query);
  return data;
};

const productPage = async ({ params }: { params: { slug: string } }) => {
  const data = (await getData(params.slug)) as ProductSlug;

  return (
    <div className="container mx-auto mb-10 ">
      <Image
        src={data.images}
        className="rounded object-center w-[300px] h-[h00px] mx-auto"
        alt={data.name}
        width={200}
        height={200}
      />
      <div className="space-y-3 mt-7 sm:flex sm:flex-col sm:justify-center sm:items-center">
        <p className="text-3xl text-primary tracking-wide">{data.name}</p>
        <p className="text-xl text-slate-700 font-bold">${data.price}.00 </p>
        <div className="flex space-x-2 text-slate-500 text-xs items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-slate-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <p className="">2-5 Shipping</p>
        </div>
        <div className="space-x-2 flex text-slate-500 text-xs items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-slate-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 6h.008v.008H6V6z"
            />
          </svg>
          <p className="">{data.category}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button>Add to Bag</Button>
          <Button variant={"secondary"}>Checkout Now</Button>
        </div>
        <p className="text-slate-500 text-left">{data.description}</p>
      </div>
    </div>
  );
};

export default productPage;
