import React from "react";
import { Button } from "../../ui/button";
import Link from "next/link";
import SearchInput from "./search-input";
import ToggleMode from "./toggle-mode";

const Navbar = () => {
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
            <div className="hidden md:flex items-center gap-2">
              <Button>Login</Button>
              <Button>Sign Up</Button>
            </div>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
