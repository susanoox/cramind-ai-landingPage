"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { MemoryBar } from "@/components/features/memory-bar";
import { FeatureBox } from "@/components/features/feature-box";
import { fadeInScale } from "@/lib/animations";

const SUBJECTS = [
   { name: "Physics", percentage: 85 },
   { name: "Chemistry", percentage: 72 },
   { name: "Biology", percentage: 91 },
] as const;

const FEATURE_BOXES = [
   {
      icon: "📊",
      title: "Tracks Retention",
      description: "Monitors how well you remember topics over time",
   },
   {
      icon: "✅",
      title: "Shows Readiness",
      description: "Get instant view of your exam preparedness",
   },
   {
      icon: "💪",
      title: "Boosts Confidence",
      description: "Know exactly what you've mastered",
   },
   {
      icon: "🎯",
      title: "Identifies Weak Areas",
      description: "Pinpoint topics needing revision",
   },
] as const;

export function MemoryBarSpotlight() {
   const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

   const scrollToSection = (id: string) => {
      const element = document.querySelector(id);
      if (element) {
         element.scrollIntoView({ behavior: "smooth" });
      }
   };

   return (
      <section
         ref={ref}
         className='relative py-24 bg-linear-to-br from-ai-blue via-vibrant-purple to-ai-blue overflow-hidden'
      >
         {/* Background decorations */}
         <div className='absolute inset-0 opacity-10'>
            <div className='absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-size-[4rem_4rem]' />
         </div>

         <Container className='relative z-10'>
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={inView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.8 }}
               className='text-center mb-16'
            >
               <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                  Introducing the Memory Bar
               </h2>
               <p className='text-xl md:text-2xl text-white/90 max-w-3xl mx-auto'>
                  The game-changing feature that shows exactly how ready you are
               </p>
            </motion.div>

            {/* Memory Bar Demo */}
            <motion.div
               {...fadeInScale}
               animate={inView ? { opacity: 1, scale: 1 } : {}}
               className='bg-white rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto mb-16'
            >
               <div className='space-y-6'>
                  {SUBJECTS.map((subject) => (
                     <MemoryBar
                        key={subject.name}
                        subject={subject.name}
                        percentage={subject.percentage}
                        animated={inView}
                     />
                  ))}
               </div>
            </motion.div>

            {/* Feature boxes */}
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
               {FEATURE_BOXES.map((box, idx) => (
                  <FeatureBox key={idx} {...box} />
               ))}
            </div>

            {/* CTA */}
            <div className='text-center'>
               <Button
                  size='lg'
                  variant='white'
                  onClick={() => scrollToSection("#get-started")}
               >
                  See Your Memory Bar in Action
               </Button>
            </div>
         </Container>
      </section>
   );
}
