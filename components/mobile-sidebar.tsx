"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { navbarRoutes } from "./navbar-routes";
import { useEffect, useState } from "react";

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <Sheet>
      <SheetTrigger>
        <Button
          className="min-[912px]:hidden hover:bg-transparent"
          size="icon"
          variant="ghost"
        >
          <div
            className="w-6 h-5 flex flex-col justify-between items-center min[912px]:hidden
         text-4xl text-white cursor-pointer overflow-hidden group"
          >
            <span
              className="w-full h-[3px] rounded-md bg-white inline-flex transform -translate-x-3
            group-hover:translate-x-0 transition-all ease-in-out duration-300"
            ></span>
            <span
              className="w-full h-[3px] rounded-md bg-white inline-flex transform
            translate-x-0 group-hover:-translate-x-3 transition-all ease-in-out 
            duration-300"
            ></span>
            <span
              className="w-full h-[3px] rounded-md bg-white inline-flex transform
            translate-x-3 group-hover:translate-x-0 transition-all ease-in-out 
            duration-300"
            ></span>
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent className="p-0" side="right">
        <div className="w-full h-full bg-secondary1 flex justify-start pt-16 px-8">
          <div className="flex flex-col gap-y-8">
            {navbarRoutes.map((route) => (
              <Link
                href={route.href}
                key={route.href}
                className="text-lg font-medium cursor-pointer"
              >
                <div className="hover:text-secondary3 transition text-white">
                  {route.label}
                </div>
              </Link>
            ))}
            <Link href="/register">
              <Button variant="custom" className="px-10 rounded-sm py-6">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
