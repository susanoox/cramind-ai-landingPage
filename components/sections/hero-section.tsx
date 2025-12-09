"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { TrustBadge } from "@/components/features/trust-badge";
import { BRAND, TRUST_INDICATORS } from "@/lib/constants";
import { fadeInLeft, fadeInRight } from "@/lib/animations";

export function HeroSection() {
   const scrollToSection = (id: string) => {
      const element = document.querySelector(id);
      if (element) {
         element.scrollIntoView({ behavior: "smooth" });
      }
   };

   return (
      <section
         className='relative min-h-screen flex items-center overflow-hidden pt-20'
         style={{
            background:
               "linear-gradient(to bottom right, #1e40af, #7c3aed, #1e40af)",
         }}
      >
         {/* Background decoration */}
         <div className='absolute inset-0 opacity-10'>
            <div className='absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl' />
            <div className='absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl' />
         </div>

         <Container>
            <div className='grid md:grid-cols-2 gap-12 items-center relative z-10'>
               {/* Left: Content */}
               <motion.div {...fadeInLeft} className='text-white'>
                  <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight'>
                     Learn Smarter with AI
                  </h1>

                  <p className='text-xl md:text-2xl mb-8 opacity-90'>
                     {BRAND.mission}
                  </p>

                  {/* Dual CTAs */}
                  <div className='flex flex-col sm:flex-row gap-4 mb-12'>
                     <Button
                        size='lg'
                        variant='white'
                        onClick={() => scrollToSection("#get-started")}
                     >
                        Start Free Trial
                     </Button>
                     <Button
                        size='lg'
                        variant='secondary'
                        onClick={() => scrollToSection("#get-started")}
                     >
                        Request Demo
                     </Button>
                  </div>

                  {/* Trust indicators */}
                  <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                     {TRUST_INDICATORS.map((indicator, idx) => (
                        <TrustBadge key={idx} {...indicator} />
                     ))}
                  </div>
               </motion.div>

               {/* Right: Visual */}
               <motion.div
                  {...fadeInRight}
                  className='relative hidden md:block'
               >
                  <div className='relative w-full h-96 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8'>
                     {/* Placeholder for dashboard preview */}
                     <div className='w-full h-full bg-linear-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center'>
                        <div className='text-center'>
                           <div className='text-6xl mb-4'>🎓</div>
                           <p className='text-white text-lg font-semibold'>
                              AI-Powered Learning
                           </p>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>
         </Container>
      </section>
   );
}
