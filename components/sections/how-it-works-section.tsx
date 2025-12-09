"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Calendar, Brain, BookCheck, FlaskConical } from "lucide-react";
import { Container } from "@/components/layout/container";
import { fadeInUp } from "@/lib/animations";

const STEPS = [
   {
      icon: <Calendar className='w-12 h-12' />,
      title: "Set Your Goals",
      description: "Define Your Exam & Schedule",
      details: [
         "Enter your exam date (NEET, JEE, or any competitive exam)",
         "Select your syllabus and subjects",
         "Set weekly study hours (flexible 1-168 hours/week)",
      ],
   },
   {
      icon: <Brain className='w-12 h-12' />,
      title: "AI Generates Your Plan",
      description: "Get Your Personalized Study Plan",
      details: [
         "AI creates daily schedules with learning and test activities",
         "Smart topic distribution across days/weeks",
         "Adaptive planning based on topic complexity",
      ],
   },
   {
      icon: <BookCheck className='w-12 h-12' />,
      title: "Study & Track Progress",
      description: "Follow Your Schedule & Mark Progress",
      details: [
         "Daily learning schedules with topics to cover",
         "Mark topics complete as you study",
         "Memory bar updates based on your progress",
         "Real-time completion percentage",
      ],
   },
   {
      icon: <FlaskConical className='w-12 h-12' />,
      title: "Test & Improve",
      description: "Auto-Generated Tests & Analytics",
      details: [
         "AI creates tests from completed topics automatically",
         "Get detailed results with question-wise breakdown",
         "Track performance trends and identify weak areas",
      ],
   },
] as const;

export function HowItWorksSection() {
   return (
      <section id='how-it-works' className='py-24 bg-white'>
         <Container>
            <motion.div
               initial='initial'
               whileInView='animate'
               viewport={{ once: true }}
               className='text-center mb-16'
            >
               <motion.h2
                  variants={fadeInUp}
                  className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'
               >
                  Your Journey to Success
               </motion.h2>
               <motion.p
                  variants={fadeInUp}
                  className='text-xl text-gray-600 max-w-3xl mx-auto'
               >
                  From sign-up to success in 4 simple steps
               </motion.p>
            </motion.div>

            {/* Desktop Timeline */}
            <div className='hidden md:block relative'>
               <div className='absolute top-24 left-0 right-0 h-1 bg-linear-to-r from-ai-blue via-vibrant-purple to-success-green' />

               <div className='grid grid-cols-4 gap-8'>
                  {STEPS.map((step, idx) => (
                     <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className='relative'
                     >
                        <div className='flex flex-col items-center text-center'>
                           {/* Step Number Circle */}
                           <div
                              className='w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 relative z-10 shadow-lg'
                              style={{
                                 background:
                                    "linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)",
                              }}
                           >
                              {idx + 1}
                           </div>

                           {/* Icon */}
                           <div className='text-ai-blue mb-4'>{step.icon}</div>

                           {/* Title */}
                           <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                              {step.title}
                           </h3>

                           {/* Description */}
                           <p className='text-sm font-medium text-vibrant-purple mb-4'>
                              {step.description}
                           </p>

                           {/* Details */}
                           <ul className='text-left text-sm text-gray-600 space-y-1'>
                              {step.details.map((detail, detailIdx) => (
                                 <li
                                    key={detailIdx}
                                    className='flex items-start gap-2'
                                 >
                                    <span className='text-success-green mt-1'>
                                       •
                                    </span>
                                    <span>{detail}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>

            {/* Mobile Vertical Timeline */}
            <div className='md:hidden space-y-8'>
               {STEPS.map((step, idx) => (
                  <motion.div
                     key={idx}
                     initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     className='flex gap-4'
                  >
                     <div className='flex flex-col items-center'>
                        <div
                           className='w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shrink-0'
                           style={{
                              background:
                                 "linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)",
                           }}
                        >
                           {idx + 1}
                        </div>
                        {idx < STEPS.length - 1 && (
                           <div
                              className='w-1 flex-1 mt-2'
                              style={{
                                 background:
                                    "linear-gradient(to bottom, #1e40af 0%, #7c3aed 100%)",
                              }}
                           />
                        )}
                     </div>

                     <div className='flex-1 pb-8'>
                        <div className='text-ai-blue mb-2'>{step.icon}</div>
                        <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                           {step.title}
                        </h3>
                        <p className='text-sm font-medium text-vibrant-purple mb-3'>
                           {step.description}
                        </p>
                        <ul className='text-sm text-gray-600 space-y-1'>
                           {step.details.map((detail, detailIdx) => (
                              <li
                                 key={detailIdx}
                                 className='flex items-start gap-2'
                              >
                                 <span className='text-success-green mt-1'>
                                    •
                                 </span>
                                 <span>{detail}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </motion.div>
               ))}
            </div>
         </Container>
      </section>
   );
}
