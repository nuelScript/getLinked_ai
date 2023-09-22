"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { navbarRoutes } from "@/components/navbar-routes";
import { Button } from "@/components/ui/button";
import MobileSidebar from "@/components/mobile-sidebar";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full bg-secondary1 flex justify-between items-center p-4 min-[915px]:p-10">
      <Link href="/">
        <div className="">
          <h3 className="text-4xl font-bold text-white">
            get<span className="text-secondary3">linked</span>
          </h3>
        </div>
      </Link>
      <div className="flex gap-x-8 items-center">
        {navbarRoutes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className="text-sm min-[912px]:flex hidden font-medium cursor-pointer"
            onClick={handleScroll}
          >
            <div
              className={cn(
                "hover:text-secondary3 transition text-white",
                pathname === route.href
                  ? "bg-clip-text text-transparent bg-gradient-to-r from-secondary2 to-secondary4"
                  : "text-white"
              )}
            >
              {route.label}
            </div>
          </Link>
        ))}
        <Link href="/register">
          <Button
            variant="custom"
            className="px-10 rounded-sm py-6 min-[912px]:flex hidden"
          >
            Register
          </Button>
        </Link>
        <MobileSidebar />
      </div>
    </div>
  );
};

export default Navbar;
