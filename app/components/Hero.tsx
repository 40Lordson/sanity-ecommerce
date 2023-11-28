import Link from "next/link";

const Hero = async () => {
  return (
    <div className="w-full">
      <div className="container space-y-2">
        <h1 className="text-4xl sm:text-6xl sm:w-[600px] font-bold text-primary tracking-wide">
          Top Fashion for top price!
        </h1>
        <p className="text-sm sm:text-lg sm:w-[600px] leading-relaxed text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ipsam
          consequuntur velit eveniet repudiandae temporibus ullam doloribus esse
          quae deserunt?
        </p>
      </div>
      <div className="sm:hidden mt-10 border px-2 py-1 border-primary w-fit flex gap-1 content-center justify-center container rounded">
        <Link
          className="hover:bg-secondary rounded px-5 py-1 text-slate-500 hover:text-primary sm:text-2xl"
          href="/men"
        >
          Men
        </Link>
        <Link
          className="hover:bg-secondary rounded px-5 py-1 text-slate-500 hover:text-primary sm:text-2xl

"
          href="/women"
        >
          Women
        </Link>
        <Link
          className="hover:bg-secondary rounded px-5 py-1 text-slate-500 hover:text-primary sm:text-2xl

"
          href="/teens"
        >
          Teens
        </Link>
      </div>
    </div>
  );
};

export default Hero;
