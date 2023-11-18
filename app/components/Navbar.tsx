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
    { name: "Teen", href: "/teen" },
  ];
  const pathname = usePathname();
  return (
    <div className="backdrop-blur-lg container top-0 fixed py-3 w-full h-fit border-b border-slate-200 flex justify-between items-center">
      <div className=""> 
        <p className="text-primary font-bold text-lg">Sanity Ecommerce</p>
        {links.map((link, idx) => (
          <div className="hidden" key={idx}>
            {pathname === link.href ? (
              <Link className="text-bold text-primary" href={link.href}>
                {link.name}
              </Link>
            ) : (
              <Link className="text-slate-500" href={link.href}>
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
