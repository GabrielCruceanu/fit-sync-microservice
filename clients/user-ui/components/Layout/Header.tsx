"use client";
import ProfileDropdown from "@/components/ProfileDropdown";
import {
  cn,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React from "react";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import NavItems from "@/components/NavItems";
import { PagesLinks } from "@/constants/links";
import { CircleUserRound } from "lucide-react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const pathname = usePathname();
  return (
    <header className="w-full flex items-center justify-center">
      <Navbar
        isBordered
        maxWidth={"2xl"}
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent justify="start">
          <NavbarBrand>
            <p className="font-bold text-inherit">FitSync</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavItems />
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="">
            <ThemeSwitcher />
          </NavbarItem>
          <NavbarItem className="mr-2 mr-lg-0 hidden lg:flex">
            <ProfileDropdown />
          </NavbarItem>

          <NavbarMenuToggle
            className="lg:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarMenu>
          <NavItems />

          <NavbarMenuItem>
            <Link
              className={cn(
                "w-full cursor-pointer",
                pathname === PagesLinks.login.link
                  ? "text-primary-500"
                  : "text-foreground",
              )}
              href={PagesLinks.login.link}
              size="lg"
            >
              <CircleUserRound className="mr-2" />
              Contul tău
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </header>
  );
};
export default Header;
