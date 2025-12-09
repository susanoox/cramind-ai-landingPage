import * as React from "react";
import Link from "next/link";
import { Container } from "./container";
import { BRAND } from "@/lib/constants";

const FOOTER_SECTIONS = [
   {
      title: "About",
      links: [
         { label: "About Us", href: "/about" },
         { label: "Careers", href: "/careers" },
         { label: "Press Kit", href: "/press" },
         { label: "Contact Us", href: "/contact" },
      ],
   },
   {
      title: "Product",
      links: [
         { label: "Features", href: "#features" },
         { label: "Pricing", href: "/pricing" },
         { label: "API Documentation", href: "/docs" },
         { label: "Changelog", href: "/changelog" },
      ],
   },
   {
      title: "Resources",
      links: [
         { label: "Blog", href: "/blog" },
         { label: "Help Center", href: "/help" },
         { label: "Case Studies", href: "/case-studies" },
         { label: "Exam Guides", href: "/guides" },
      ],
   },
   {
      title: "Legal",
      links: [
         { label: "Terms of Service", href: "/terms" },
         { label: "Privacy Policy", href: "/privacy" },
         { label: "Cookie Policy", href: "/cookies" },
         { label: "GDPR Compliance", href: "/gdpr" },
      ],
   },
] as const;

const SOCIAL_LINKS = [
   { label: "Twitter", href: "https://twitter.com", icon: "𝕏" },
   { label: "LinkedIn", href: "https://linkedin.com", icon: "in" },
   { label: "Instagram", href: "https://instagram.com", icon: "IG" },
   { label: "YouTube", href: "https://youtube.com", icon: "YT" },
] as const;

export function Footer() {
   return (
      <footer className='bg-gray-900 text-gray-300 py-12'>
         <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8'>
               {/* Brand Section */}
               <div className='lg:col-span-1'>
                  <h3 className='text-white text-xl font-bold mb-4'>
                     {BRAND.name}
                  </h3>
                  <p className='text-sm mb-4'>{BRAND.mission}</p>
                  <div className='flex gap-4'>
                     {SOCIAL_LINKS.map((social) => (
                        <a
                           key={social.label}
                           href={social.href}
                           target='_blank'
                           rel='noopener noreferrer'
                           className='w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors text-xs'
                           aria-label={social.label}
                        >
                           {social.icon}
                        </a>
                     ))}
                  </div>
               </div>

               {/* Footer Links */}
               {FOOTER_SECTIONS.map((section) => (
                  <div key={section.title}>
                     <h4 className='text-white font-semibold mb-4'>
                        {section.title}
                     </h4>
                     <ul className='space-y-2'>
                        {section.links.map((link) => (
                           <li key={link.label}>
                              <Link
                                 href={link.href}
                                 className='text-sm hover:text-white transition-colors'
                              >
                                 {link.label}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>

            {/* Bottom Bar */}
            <div className='pt-8 border-t border-gray-800 text-center text-sm'>
               <p>
                  &copy; {new Date().getFullYear()} {BRAND.name}. All rights
                  reserved.
               </p>
            </div>
         </Container>
      </footer>
   );
}
