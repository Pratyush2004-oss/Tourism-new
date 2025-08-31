"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ImportantLinks, NavbarItems } from "@/constants/navbarItems";
import { BellRing, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";
import { usePathname } from "next/navigation";
import { useUserStore } from "@/store/user.store";
const Navbar = () => {
  const {user} = useUserStore();
  const pathname = usePathname();
  return (
    <div className="w-full flex flex-col">
      {/* top Header */}
      <div className="flex items-center justify-center gap-2 bg-blue-400 py-2">
        <BellRing className="size-4 text-white fill-white animate-bounce" />
        <h1 className="font-semibold text-white text-sm italic animate-pulse">
          Summer and Monsoon Tracks!!{" "}
          <span className="font-bold not-italic">Bookings Open</span>
        </h1>
        <BellRing className="size-4 text-white fill-white animate-bounce" />
      </div>

      {/* Navbar */}
      <div className="px-4 border-b-4 border-blue-400 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="pl-5">
            <Link
              href="/"
              className="max-sm:text-[1.5rem] text-4xl bg-gradient-to-r from-blue-600 via-blue-400 to-blue-700 text-transparent bg-clip-text leading-tight xl:tracking-[-2px] font-bold"
            >
              Osan Tourism
            </Link>
          </div>

          {/* Right part */}
          <div className="flex flex-col gap-3 py-2">
            {/* Links */}
            <div className="flex items-center gap-3 justify-end">
              {NavbarItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="flex items-center gap-0.5 text-gray-500 text-sm hover:text-black"
                >
                  <item.icon
                    className={`size-3 max-sm:size-5 ${
                      pathname === item.href &&
                      "text-blue-500 size-4 max-sm:size-6"
                    }`}
                  />
                  <p
                    className={`hidden sm:inline ${
                      pathname === item.href && "text-blue-500"
                    }`}
                  >
                    {item.name === "Account" ? user ? "Account" : "Login" : item.name}
                  </p>
                </Link>
              ))}
            </div>
            {/* Search Bar */}
            <div className="flex items-center flex-col lg:flex-row-reverse gap-1">
              <div className="relative flex w-2/3 ml-auto min-w-52 ">
                <Input placeholder="Search" className="" />
                <Search className="absolute right-2 top-2 size-5 text-gray-500 cursor-pointer" />
              </div>
              <div className="w-fit px-2 py-1 ml-auto mb-1">
                <div className="flex items-center justify-end gap-5">
                  {ImportantLinks.slice(0, 4).map((item, idx) => (
                    <div
                      key={idx}
                      className="md:flex hidden items-end gap-2.5 "
                    >
                      <Link
                        key={idx}
                        href={item.href}
                        className="text-sm hover:text-blue-400 font-medium text-nowrap"
                      >
                        {item.name}
                      </Link>
                      <div className="h-4 w-[1px] bg-gray-400" />
                    </div>
                  ))}
                  {/* Menu Drop Down menu for mobile */}
                  <div className="hidden md:block">
                    <MenuDropDown text="More" expand={false} />
                  </div>
                  <div className="md:hidden block">
                    <MenuDropDown text="Adventures" expand={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuDropDown = ({ text, expand }: { text: string; expand?: boolean }) => {
  return (
    <div className="flex items-end gap-2.5">
      <DropdownMenu>
        <DropdownMenuTrigger className="font-bold cursor-pointer text-sm text-blue-400">
          {text}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2">
          {!expand
            ? ImportantLinks.slice(4).map((item, idx) => (
                <DropdownMenuItem key={idx}>
                  <Link href={item.href}>{item.name}</Link>
                </DropdownMenuItem>
              ))
            : ImportantLinks.map((item, idx) => (
                <DropdownMenuItem key={idx}>
                  <Link href={item.href}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navbar;
