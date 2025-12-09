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
      <section className='relative min-h-screen flex items-center overflow-hidden pt-20 bg-white'>
         {/* Animated gradient orbs */}
         <div className='absolute inset-0 overflow-hidden'>
            <motion.div
               className='absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-20'
               style={{
                  background:
                     "radial-gradient(circle, var(--primary) 0%, transparent 80%)",
               }}
               animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
               }}
               transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
               }}
            />
            <motion.div
               className='absolute top-20 -left-40 w-[400px] h-[400px] rounded-full opacity-15'
               style={{
                  background:
                     "radial-gradient(circle, var(--primary) 0%, transparent 80%)",
               }}
               animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.15, 0.25, 0.15],
               }}
               transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
               }}
            />
            <motion.div
               className='absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full opacity-10'
               style={{
                  background:
                     "radial-gradient(circle, var(--primary) 0%, transparent 80%)",
               }}
               animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.1, 0.2, 0.1],
               }}
               transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
               }}
            />
         </div>

         {/* Grid pattern overlay */}
         <div
            className='absolute inset-0 opacity-[0.03]'
            style={{
               backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px),
                                 linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
               backgroundSize: "64px 64px",
            }}
         />

         <Container>
            <div className='grid lg:grid-cols-2 gap-16 items-center relative z-10'>
               {/* Left: Content */}
               <motion.div {...fadeInLeft} className='space-y-8'>
                  {/* Small badge */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5 }}
                     className='inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/10 border-2 border-primary/30'
                  >
                     <div className='relative flex items-center justify-center'>
                        <motion.div
                           className='absolute w-3 h-3 rounded-full bg-primary'
                           animate={{
                              scale: [1, 2, 1],
                              opacity: [0.8, 0, 0.8],
                           }}
                           transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                           }}
                        />
                        <motion.div
                           className='absolute w-3 h-3 rounded-full bg-primary'
                           animate={{
                              scale: [1, 1.8, 1],
                              opacity: [0.6, 0, 0.6],
                           }}
                           transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.5,
                           }}
                        />
                        <div className='w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_rgba(88,80,236,0.8)]' />
                     </div>
                     <span className='text-sm font-semibold text-primary'>
                        AI-Powered Learning Platform
                     </span>
                  </motion.div>

                  {/* Main heading with gradient text */}
                  <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
                     Learn Smarter{" "}
                     <span
                        className='bg-clip-text text-transparent'
                        style={{
                           backgroundImage:
                              "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
                        }}
                     >
                        with Cramind AI
                     </span>
                  </h1>

                  <p className='text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl'>
                     {BRAND.mission}
                  </p>

                  {/* CTAs with modern styling */}
                  <div className='flex flex-col sm:flex-row gap-4'>
                     <Button
                        size='lg'
                        className='text-base px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all'
                        onClick={() => scrollToSection("#get-started")}
                     >
                        Start Free Trial
                        <svg
                           className='ml-2 w-5 h-5'
                           fill='none'
                           viewBox='0 0 24 24'
                           stroke='currentColor'
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M13 7l5 5m0 0l-5 5m5-5H6'
                           />
                        </svg>
                     </Button>
                     <Button
                        size='lg'
                        variant='outline'
                        className='text-base px-8 border-2 hover:bg-muted/50'
                        onClick={() => scrollToSection("#get-started")}
                     >
                        Request Demo
                     </Button>
                  </div>

                  {/* Trust indicators - redesigned */}
                  <div className='pt-8 grid grid-cols-2 md:grid-cols-4 gap-6'>
                     {TRUST_INDICATORS.map((indicator, idx) => (
                        <motion.div
                           key={idx}
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.3 + idx * 0.1 }}
                        >
                           <TrustBadge {...indicator} />
                        </motion.div>
                     ))}
                  </div>
               </motion.div>

               {/* Right: Visual - Modern card design */}
               <motion.div
                  {...fadeInRight}
                  className='relative hidden lg:block'
               >
                  {/* Floating card effect */}
                  <motion.div
                     className='relative'
                     animate={{
                        y: [0, -20, 0],
                     }}
                     transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                     }}
                  >
                     {/* Main card */}
                     <div className='relative bg-linear-to-br from-white to-gray-50 rounded-3xl shadow-2xl border border-gray-200/60 p-8 backdrop-blur-sm'>
                        {/* Accent border */}
                        <div
                           className='absolute inset-0 rounded-3xl p-0.5'
                           style={{
                              background:
                                 "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 50%, var(--accent) 100%)",
                              WebkitMask:
                                 "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                              WebkitMaskComposite: "xor",
                              maskComposite: "exclude",
                           }}
                        />

                        {/* Content */}
                        <div className='relative space-y-6'>
                           {/* Header with icon */}
                           <div className='flex items-center gap-4'>
                              <div
                                 className='w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg'
                                 style={{
                                    background:
                                       "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
                                 }}
                              >
                                 🎓
                              </div>
                              <div>
                                 <h3 className='text-xl font-bold text-foreground'>
                                    AI Dashboard
                                 </h3>
                                 <p className='text-sm text-muted-foreground'>
                                    Personalized Learning
                                 </p>
                              </div>
                           </div>

                           {/* Stats grid */}
                           <div className='grid grid-cols-2 gap-4'>
                              {[
                                 {
                                    label: "Study Hours",
                                    value: "127",
                                    trend: "+12%",
                                 },
                                 {
                                    label: "Accuracy",
                                    value: "94%",
                                    trend: "+8%",
                                 },
                                 { label: "Topics", value: "23", trend: "+5" },
                                 { label: "Streak", value: "15d", trend: "🔥" },
                              ].map((stat, idx) => (
                                 <motion.div
                                    key={idx}
                                    className='bg-white rounded-xl p-4 border border-gray-100 shadow-sm'
                                    whileHover={{ scale: 1.05 }}
                                    transition={{
                                       type: "spring",
                                       stiffness: 300,
                                    }}
                                 >
                                    <p className='text-sm text-muted-foreground mb-1'>
                                       {stat.label}
                                    </p>
                                    <p className='text-2xl font-bold text-foreground'>
                                       {stat.value}
                                    </p>
                                    <p className='text-xs text-primary font-medium mt-1'>
                                       {stat.trend}
                                    </p>
                                 </motion.div>
                              ))}
                           </div>

                           {/* Progress bar */}
                           <div className='space-y-2'>
                              <div className='flex justify-between text-sm'>
                                 <span className='text-muted-foreground'>
                                    Weekly Goal
                                 </span>
                                 <span className='font-semibold text-foreground'>
                                    78%
                                 </span>
                              </div>
                              <div className='h-3 bg-gray-200 rounded-full overflow-hidden'>
                                 <motion.div
                                    className='h-full rounded-full'
                                    style={{
                                       background:
                                          "linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)",
                                    }}
                                    initial={{ width: 0 }}
                                    animate={{ width: "78%" }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                 />
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Floating elements */}
                     <motion.div
                        className='absolute -top-6 -right-6 w-24 h-24 rounded-2xl shadow-xl flex items-center justify-center text-3xl bg-white border border-gray-200'
                        animate={{
                           rotate: [0, 10, 0],
                           y: [0, -10, 0],
                        }}
                        transition={{
                           duration: 5,
                           repeat: Infinity,
                           ease: "easeInOut",
                           delay: 0.5,
                        }}
                     >
                        ⚡
                     </motion.div>

                     <motion.div
                        className='absolute -bottom-4 -left-4 w-20 h-20 rounded-xl shadow-lg flex items-center justify-center text-2xl bg-white border border-gray-200'
                        animate={{
                           rotate: [0, -10, 0],
                           y: [0, 10, 0],
                        }}
                        transition={{
                           duration: 4,
                           repeat: Infinity,
                           ease: "easeInOut",
                           delay: 1,
                        }}
                     >
                        🧠
                     </motion.div>
                  </motion.div>
               </motion.div>
            </div>
         </Container>
      </section>
   );
}
