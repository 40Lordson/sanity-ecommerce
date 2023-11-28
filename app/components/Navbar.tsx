"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const Navbar = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Men", href: "/men" },
    { name: "Women", href: "/women" },
    { name: "Teen", href: "/teens" },
  ];
  const pathname = usePathname();
  return (
    <div className="backdrop-blur-lg  top-0 left-0 right-0 container w-screen fixed py-3 h-fit border-b border-slate-200 flex justify-between items-center">
      <Link href='/' className="text-primary font-bold text-lg sm:text-2xl">Sanity Ecommerce</Link>
      <div className="flex justify-between items-center gap-6"> 
        {links.map((link, idx) => (
          <div className="hidden sm:flex" key={idx}>
            {pathname === link.href ? (
              <Link className="text-bold text-primary sm:text-2xl" href={link.href}>
                {link.name}
              </Link>
            ) : (
              <Link className="text-slate-500 sm:text-2xl" href={link.href}>
                {link.name}
              </Link>
            )}
          </div>
        ))}
      </div>
      <Button variant="outline" className="flex gap-1">
        <ShoppingBag />
      </Button>
    </div>
  );
};

export default Navbar;
