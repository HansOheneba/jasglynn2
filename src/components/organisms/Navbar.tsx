"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav
      className={`${scrolled ? "bg-jasglynn-green shadow-lg" : "bg-jasglynn-green"} fixed top-0 w-full z-50 transition-all duration-300 max-h-[80px]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <div className="relative h-12 w-12 mr-2 overflow-hidden rounded-full transition-transform group-hover:scale-105">
                <Image
                  src="/assets/jasLogo.png"
                  alt="JasGlynn Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-white font-bold text-xl leading-none block">
                  JasGlynn
                </span>
                <span className="text-jasglynn-yellow text-xs tracking-wider font-semibold block">
                  Event Center
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-jasglynn-yellow font-bold"
                  : "text-white hover:text-jasglynn-yellow hover:bg-jasglynn-green/80"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "text-jasglynn-yellow font-bold"
                  : "text-white hover:text-jasglynn-yellow hover:bg-jasglynn-green/80"
              }`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/services")
                  ? "text-jasglynn-yellow font-bold"
                  : "text-white hover:text-jasglynn-yellow hover:bg-jasglynn-green/80"
              }`}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/contact")
                  ? "text-jasglynn-yellow font-bold"
                  : "text-white hover:text-jasglynn-yellow hover:bg-jasglynn-green/80"
              }`}
            >
              Contact
            </Link>

            <div className="ml-4 flex items-center space-x-2">
              <Link
                href="/event-booking"
                className="bg-jasglynn-yellow text-jasglynn-gray font-bold hover:bg-jasglynn-yellow/90 px-4 py-2 rounded-md text-sm transition-colors shadow-md hover:shadow-lg"
              >
                Event Booking
              </Link>

              <Link
                href="/studio-booking"
                className="bg-jasglynn-coral text-white font-bold hover:bg-jasglynn-coral/90 px-4 py-2 rounded-md text-sm transition-colors shadow-md hover:shadow-lg"
              >
                Studio Booking
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-jasglynn-yellow hover:bg-jasglynn-green-dark transition-colors"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">
                {isMenuOpen ? "Close menu" : "Open menu"}
              </span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-jasglynn-green border-t border-jasglynn-green-dark">
            <Link
              href="/"
              className={`${isActive("/") ? "bg-jasglynn-green-dark text-jasglynn-yellow" : "text-white"} hover:bg-jasglynn-green-dark hover:text-jasglynn-yellow block px-3 py-2 rounded-md text-base font-medium transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${isActive("/about") ? "bg-jasglynn-green-dark text-jasglynn-yellow" : "text-white"} hover:bg-jasglynn-green-dark hover:text-jasglynn-yellow block px-3 py-2 rounded-md text-base font-medium transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`${isActive("/services") ? "bg-jasglynn-green-dark text-jasglynn-yellow" : "text-white"} hover:bg-jasglynn-green-dark hover:text-jasglynn-yellow block px-3 py-2 rounded-md text-base font-medium transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={`${isActive("/contact") ? "bg-jasglynn-green-dark text-jasglynn-yellow" : "text-white"} hover:bg-jasglynn-green-dark hover:text-jasglynn-yellow block px-3 py-2 rounded-md text-base font-medium transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2 space-y-2">
              <Link
                href="/event-booking"
                className="bg-jasglynn-yellow text-jasglynn-gray hover:bg-jasglynn-yellow/90 block px-3 py-2 rounded-md text-base font-medium shadow-sm w-full text-center transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Event Booking
              </Link>
              <Link
                href="/studio-booking"
                className="bg-jasglynn-coral text-white hover:bg-jasglynn-coral/90 block px-3 py-2 rounded-md text-base font-medium shadow-sm w-full text-center transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Studio Booking
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Add an empty div for padding the content below fixed navbar */}
      <div className="h-20"></div>
    </nav>
  );
};

export default Navbar;
