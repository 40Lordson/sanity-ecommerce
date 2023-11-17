import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import { useState } from "react";

const Hero = async () => {
  const query = "*[_type == 'hero']";

  const data = await client.fetch(query);
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
      <div className="">
        <Image src={urlFor(data.image1).url()} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
