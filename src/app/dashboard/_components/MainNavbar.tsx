"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, LogOut, ShoppingCart } from "lucide-react";
import { ModeToggle } from "@/components/Themming/mode-toggle";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { ActiveLink } from "@/lib/providers/ActiveLink";
import { useCart } from "../cart/hooks/cart-hook";

export default function Navbar() {
  const { data: session } = useSession();
  const { data: cart, isLoading } = useCart();

  const handleLogOut = async () => {
    await signOut();
  };

  return (
    <nav className="flex items-center justify-between px-4 py-3 text-primary mx-5">
      {/* Greeting */}
      <div className="hidden md:flex items-center gap-2.5 text-lg font-bold">
        <span>Hi</span>
        <span className="text-chart-5 font-bold uppercase">
          {session?.user.first_name}
        </span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-4 font-medium">
        <ActiveLink href="/dashboard/home">Home</ActiveLink>
        <ActiveLink href="/dashboard/books">Books</ActiveLink>
        <ActiveLink href="/dashboard/comming-soon">Coming Soon</ActiveLink>
        <ActiveLink href="/dashboard/about-us">About Us</ActiveLink>
        <ActiveLink href="/dashboard/terms">Terms</ActiveLink>
      </div>

      {/* Desktop Icons */}
      <div className="hidden md:flex items-center gap-10 text-chart-3">
        {/* Cart */}
        <div className="relative inline-block">
          <Link href="/dashboard/cart">
            <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
              <ShoppingCart className="w-6 h-6 cursor-pointer" />
            </div>
            <span className="absolute -top-2 -right-2 bg-white text-red-500 font-bold text-sm w-6 h-6 rounded-full flex items-center justify-center shadow-md">
              {isLoading ? "..." : cart?.cartLength ?? 0}
            </span>
          </Link>
        </div>

        {/* Logout */}
        <button onClick={handleLogOut} className="cursor-pointer">
          <LogOut />
        </button>

        {/* Theme Toggle */}
        <ModeToggle />
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden fixed top-14 right-4 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-lg"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-4">
            <div className="flex flex-col gap-4 font-semibold">
              {/* Greeting */}
              <div className="flex gap-2.5 text-lg font-bold">
                <span>Hi</span>
                <span className="text-chart-1 font-bold">
                  {session?.user.first_name}
                </span>
              </div>

              {/* Mobile Links */}
              <ActiveLink href="/dashboard/home">Home</ActiveLink>
              <ActiveLink href="/dashboard/books">Books</ActiveLink>
              <ActiveLink href="/dashboard/comming-soon">Coming Soon</ActiveLink>
              <ActiveLink href="/dashboard/about-us">About Us</ActiveLink>
              <ActiveLink href="/dashboard/terms">Terms</ActiveLink>

              {/* Cart */}
              <div className="relative inline-block">
                <Link href="/dashboard/cart">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                    <ShoppingCart className="w-6 h-6 text-chart-2" />
                  </div>
                  <span className="absolute -top-2 -left-2 bg-white text-red-500 font-bold text-sm w-6 h-6 rounded-full flex items-center justify-center shadow-md">
                    {isLoading ? "..." : cart?.cartLength ?? 0}
                  </span>
                </Link>
              </div>

              {/* Logout + Theme Toggle */}
              <button
                onClick={handleLogOut}
                className="text-chart-3 cursor-pointer"
              >
                <LogOut />
              </button>
              <ModeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

