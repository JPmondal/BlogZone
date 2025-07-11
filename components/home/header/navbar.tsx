"use client";

import React from "react";
import { Button } from "../../ui/button";
import Link from "next/link";
import SearchInput from "./search-input";
import ToggleMode from "./toggle-mode";
import { Menu, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { searchAction } from "@/actions/search";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 border border-b backdrop-blur bg-background/95 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section  */}
          <div className="flex items-center">
            <Link href="/">
              <span className="font-bold text-2xl">
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent dark:from-purple-500 dark:via-pink-500 dark:to-indigo-500">
                  Blog
                </span>
                <span className="text-foreground">Box</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu  */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              className="text-sm font-medium text-foreground hover:text-blue-700 transition-colors"
              href="/articles"
            >
              Article
            </Link>
            <Link
              className="text-sm font-medium text-foreground hover:text-blue-700 transition-colors"
              href="/tutorials"
            >
              Tutorial
            </Link>
            <Link
              className="text-sm font-medium text-foreground hover:text-blue-700 transition-colors"
              href="/about"
            >
              About
            </Link>
            <Link
              className="text-sm font-medium text-foreground hover:text-blue-700 transition-colors"
              href="/dashboard"
            >
              Dashboard
            </Link>
          </div>

          {/* Right Section  */}
          <div className="flex items-center gap-4">
            <SearchInput />
            <ToggleMode />

            {/* user log in  */}
            <SignedIn>
              <UserButton />
            </SignedIn>

            <SignedOut>
              <div className="hidden md:flex items-center gap-2">
                <SignInButton>
                  <Button variant={"outline"}>Login</Button>
                </SignInButton>

                <SignUpButton>
                  <Button>Sign Up</Button>
                </SignUpButton>
              </div>
            </SignedOut>
          

          {/* Mobile menu button  */}
          <Button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            size={"icon"}
            className="md:hidden text-muted-foreground hover:text-foreground"
            variant={"ghost"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
          </div>
        </div>

        {/* mobile view  */}
        {isMobileMenuOpen && (
          <div className="mb-4 md:hidden flex flex-col gap-3 transition-all">
            <form action={searchAction} className="relative">
              <Search className="absolute top-1/2 -translate-y-1/2 left-2" />
              <Input name="search" placeholder="Search..." className="w-full pl-10 py-5" />
            </form>
            <div className="flex flex-col justify-center gap-3 px-2">
              <Link
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-md  text-foreground hover:text-blue-700 transition-colors"
                href="/articles"
              >
                Article
              </Link>
              <Link
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-md  text-foreground hover:text-blue-700 transition-colors"
                href="/dashboard"
              >
                Tutorials
              </Link>
              <Link
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-md  text-foreground hover:text-blue-700 transition-colors"
                href="/dashboard"
              >
                Blogs
              </Link>
              <Link
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-md  text-foreground hover:text-blue-700 transition-colors"
                href="/dashboard"
              >
                Dashboard
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Button>Login</Button>
              <Button variant={"outline"}>Sign Up</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
