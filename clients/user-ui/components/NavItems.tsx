"use client";
import { cn, NavbarItem, NavbarMenuItem } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import React from "react";
import isSmallScreen from "@/helpers/is-small-screen";
import { usePathname } from "next/navigation";

const navItems = [
  {
    title: "Acasă",
    url: "/",
  },
  {
    title: "Antrenori",
    url: "/antrenori",
  },
  {
    title: "Nutriționiști",
    url: "/nutritionisti",
  },
  {
    title: "Săli de antrenament",
    url: "/sali-de-antrenament",
  },
  {
    title: "PRO",
    url: "/pro",
  },
];
const NavItems = () => {
  const pathname = usePathname();
  return (
    <>
      {navItems.map((item, index) =>
        isSmallScreen() ? (
          <NavbarMenuItem key={`${item.url}-${index}`}>
            <Link
              className={cn(
                "w-full",
                pathname === item.url ? "text-primary-500" : "text-foreground",
              )}
              href={item.url}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ) : (
          <NavbarItem key={item.url}>
            <Link
              href={item.url}
              className={cn(
                pathname === item.url ? "text-primary-500" : "text-foreground",
              )}
              aria-current="page"
            >
              {item.title}
            </Link>
          </NavbarItem>
        ),
      )}
    </>
  );
};

export default NavItems;
