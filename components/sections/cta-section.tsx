"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";
import { StudentSignupForm } from "@/components/forms/student-signup-form";
import { DemoRequestForm } from "@/components/forms/demo-request-form";
import { fadeInUp } from "@/lib/animations";

const TABS = ["Students", "Institutions"] as const;
type TabType = (typeof TABS)[number];

const BENEFITS = {
   Students: [
      "Free 14-day trial",
      "AI Study Planner based on your exam date",
      "Memory Bar to track your readiness",
      "Unlimited practice tests",
      "Instant results with smart explanations",
      "No credit card required",
   ],
   Institutions: [
      "Personalized demo",
      "Easy onboarding & website integration",
      "Institution question bank",
      "Batch creation & management",
      "Free migration assistance",
      "Dedicated support",
      "Saves 40-50% teacher time",
   ],
} as const;

const TRUST_BADGES = {
   Students: [
      "Trusted by 10,000+ Students",
      "NEET, JEE, UPSC & More",
      "99.9% Uptime",
   ],
   Institutions: ["500+ Institutions", "Enterprise Security", "24/7 Support"],
} as const;

export function CTASection() {
   const [activeTab, setActiveTab] = React.useState<TabType>("Students");

   return (
      <section
         id='get-started'
         className='py-24 bg-linear-to-br from-gray-50 to-white'
      >
         <Container>
            <motion.div
               initial='initial'
               whileInView='animate'
               viewport={{ once: true }}
               className='text-center mb-12'
            >
               <motion.h2
                  variants={fadeInUp}
                  className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'
               >
                  Get Started Today
               </motion.h2>
               <motion.p
                  variants={fadeInUp}
                  className='text-xl text-gray-600 max-w-3xl mx-auto'
               >
                  Join thousands who are already learning smarter with AI
               </motion.p>
            </motion.div>

            {/* Tabs */}
            <div className='flex justify-center mb-12'>
               <div className='inline-flex bg-white rounded-lg p-1 shadow-md'>
                  {TABS.map((tab) => (
                     <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-8 py-3 rounded-lg font-medium transition-all ${
                           activeTab === tab
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:text-foreground"
                        }`}
                     >
                        For {tab}
                     </button>
                  ))}
               </div>
            </div>

            {/* Content */}
            <div className='grid md:grid-cols-2 gap-12 max-w-6xl mx-auto'>
               {/* Left: Benefits */}
               <motion.div
                  key={`benefits-${activeTab}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
               >
                  <h3 className='text-3xl font-bold text-gray-900 mb-6'>
                     {activeTab === "Students"
                        ? "Learn Smarter with CRAMIND AI"
                        : "Level Up Your Institution with AI"}
                  </h3>

                  <p className='text-gray-600 mb-8'>
                     {activeTab === "Students"
                        ? "Join thousands of students who are learning better with AI-powered study plans"
                        : "See how CRAMIND AI can save 40-50% of your teacher's time"}
                  </p>

                  {/* Benefits List */}
                  <div className='space-y-3 mb-8'>
                     {BENEFITS[activeTab].map((benefit, idx) => (
                        <div key={idx} className='flex items-start gap-3'>
                           <Check className='w-5 h-5 text-accent shrink-0 mt-0.5' />
                           <span className='text-gray-700'>{benefit}</span>
                        </div>
                     ))}
                  </div>

                  {/* Trust Badges */}
                  <div className='flex flex-wrap gap-4'>
                     {TRUST_BADGES[activeTab].map((badge, idx) => (
                        <div
                           key={idx}
                           className='px-4 py-2 bg-primary/10 rounded-lg border border-primary/20'
                        >
                           <span className='text-sm font-medium text-primary'>
                              {badge}
                           </span>
                        </div>
                     ))}
                  </div>
               </motion.div>

               {/* Right: Form */}
               <motion.div
                  key={`form-${activeTab}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
               >
                  <Card>
                     <CardContent className='p-8'>
                        {activeTab === "Students" ? (
                           <StudentSignupForm />
                        ) : (
                           <DemoRequestForm />
                        )}
                     </CardContent>
                  </Card>
               </motion.div>
            </div>
         </Container>
      </section>
   );
}
