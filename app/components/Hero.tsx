"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <div className="sm:flex sm:justify-between w-full mt-10">
      <div className="container space-y-2">
        <h1 className="text-4xl font-bold text-primary">
          Top Fashion for top price!
        </h1>
        <p className="text-sm leading-relaxed text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ipsam
          consequuntur velit eveniet repudiandae temporibus ullam doloribus esse
          quae deserunt?
        </p>
      </div>
      <div className="mt-10 border px-2 py-1 border-primary w-fit flex gap-1 content-center justify-center container rounded">
        <Link
          className="hover:bg-secondary rounded px-5 py-1 text-slate-500 hover:text-primary"
          href="/men"
        > 
          Men
        </Link>
        <Link
          className="hover:bg-secondary rounded px-5 py-1 text-slate-500 hover:text-primary

"
          href="/women"
        >
          Women
        </Link>
        <Link
          className="hover:bg-secondary rounded px-5 py-1 text-slate-500 hover:text-primary

"
          href="/teen"
        >
          Teens
        </Link>
      </div>
    </div>
  );
};

export default Hero;
