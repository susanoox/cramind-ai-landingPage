"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/constants";

const NAV_LINKS = [
   { href: "#features", label: "Features" },
   { href: "#how-it-works", label: "How It Works" },
   { href: "#for-students", label: "For Students" },
   { href: "#for-institutions", label: "For Institutions" },
] as const;

export function Navigation() {
   const [isScrolled, setIsScrolled] = React.useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

   React.useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const scrollToSection = (href: string) => {
      const element = document.querySelector(href);
      if (element) {
         element.scrollIntoView({ behavior: "smooth" });
         setIsMobileMenuOpen(false);
      }
   };

   return (
      <nav
         className={cn(
            "fixed top-0 w-full z-50 transition-all duration-300",
            isScrolled
               ? "bg-white shadow-lg py-4"
               : "bg-white/10 backdrop-blur-md py-6"
         )}
      >
         <Container>
            <div className='flex items-center justify-between'>
               {/* Logo */}
               <Link
                  href='/'
                  className={cn(
                     "text-2xl font-bold transition-colors",
                     isScrolled ? "text-primary" : "text-black"
                  )}
               >
                  {BRAND.name}
               </Link>

               {/* Desktop Menu */}
               <div className='hidden md:flex items-center gap-8'>
                  {NAV_LINKS.map((link) => (
                     <button
                        key={link.href}
                        onClick={() => scrollToSection(link.href)}
                        className={cn(
                           "text-base font-medium transition-colors hover:text-primary",
                           isScrolled ? "text-gray-700" : "text-black"
                        )}
                     >
                        {link.label}
                     </button>
                  ))}
                  <Button onClick={() => scrollToSection("#get-started")}>
                     Get Started
                  </Button>
               </div>

               {/* Mobile Menu Button */}
               <button
                  className='md:hidden'
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label='Toggle menu'
               >
                  {isMobileMenuOpen ? (
                     <X
                        className={cn(
                           "h-6 w-6",
                           isScrolled ? "text-gray-700" : "text-white"
                        )}
                     />
                  ) : (
                     <Menu
                        className={cn(
                           "h-6 w-6",
                           isScrolled ? "text-gray-700" : "text-white"
                        )}
                     />
                  )}
               </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
               <div className='md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg'>
                  <div className='flex flex-col gap-4'>
                     {NAV_LINKS.map((link) => (
                        <button
                           key={link.href}
                           onClick={() => scrollToSection(link.href)}
                           className='text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors'
                        >
                           {link.label}
                        </button>
                     ))}
                     <div className='px-4'>
                        <Button onClick={() => scrollToSection("#get-started")}>
                           Get Started
                        </Button>
                     </div>
                  </div>
               </div>
            )}
         </Container>
      </nav>
   );
}
