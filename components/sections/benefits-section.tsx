"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp } from "@/lib/animations";

const TABS = ["Students", "Institutions", "Teachers"] as const;

type TabType = (typeof TABS)[number];

const BENEFITS: Record<
   TabType,
   {
      hero: string;
      benefits: Array<{ title: string; description: string }>;
      testimonial: { name: string; role: string; quote: string };
      cta: string;
   }
> = {
   Students: {
      hero: "Learn Smarter, Not Harder",
      benefits: [
         {
            title: "AI Study Planner",
            description:
               "Based on your exam date, adapts to your level with daily tasks",
         },
         {
            title: "Memory Bar",
            description:
               "Tracks retention, shows readiness, and boosts confidence",
         },
         {
            title: "Tests That Train You",
            description:
               "Mock tests, coverage tests, and memory retention tests",
         },
         {
            title: "Instant Results",
            description: "Get immediate feedback with smart explanations",
         },
         {
            title: "Smart Revision",
            description:
               "Personalized learning paths that adapt to your progress",
         },
         {
            title: "Deep Analytics",
            description: "Topic-level insights to identify weak areas",
         },
         {
            title: "Gamified Learning",
            description: "Make studying engaging and track your achievements",
         },
         {
            title: "Real-Life Explanations",
            description: "Understand concepts with practical examples",
         },
         {
            title: "Multiple Exam Support",
            description: "NEET, JEE, TNPSC, UPSC, College Subjects, and more",
         },
      ],
      testimonial: {
         name: "Priya",
         role: "NEET Aspirant",
         quote: "Cramind AI created a perfect study plan for my 6-month preparation. The memory bar helped me track which subjects needed more attention, and the auto-generated tests kept me exam-ready. Scored 680/720!",
      },
      cta: "Start Free Trial",
   },
   Institutions: {
      hero: "Level Up Your Institution with AI",
      benefits: [
         {
            title: "Save 40-50% Teacher Time",
            description: "Automated test generation, grading, and analytics",
         },
         {
            title: "Easy Onboarding",
            description: "Quick setup with seamless website integration",
         },
         {
            title: "Institution Question Bank",
            description: "Create, manage, and reuse your custom questions",
         },
         {
            title: "Complete User Management",
            description:
               "Admin, Teacher, and Student portals with role-based access",
         },
         {
            title: "Batch Creation",
            description:
               "Organize students by year, program, or custom criteria",
         },
         {
            title: "Unlimited Tests",
            description:
               "Generate as many tests as needed with anti-cheating features",
         },
         {
            title: "Deep Analytics",
            description:
               "Track student performance, batch trends, and identify gaps",
         },
         {
            title: "Custom Branding",
            description: "White-label solution with your logo and colors",
         },
         {
            title: "Bulk Operations",
            description: "Import students and questions in bulk via CSV",
         },
      ],
      testimonial: {
         name: "ABC Coaching Institute",
         role: "Institution",
         quote: "We manage 2,000+ students across 15 batches. Cramind AI handles everything from student enrollment to test analytics. Bulk import saved us 100+ hours. Our teachers love the automated test generation!",
      },
      cta: "Request Demo",
   },
   Teachers: {
      hero: "Empower Your Teaching with Intelligent Assessment Tools",
      benefits: [
         {
            title: "Question Bank Management",
            description: "5 question types with detailed explanations",
         },
         {
            title: "Automated Test Generation",
            description:
               "AI selects questions based on difficulty distribution",
         },
         {
            title: "Bulk Import",
            description: "Upload 500 questions at once via CSV",
         },
         {
            title: "Reusable Content",
            description: "Create once, use across multiple batches",
         },
         {
            title: "Performance Insights",
            description: "Identify common mistakes, adjust teaching strategies",
         },
         {
            title: "Time Savings",
            description: "Automated grading and result processing",
         },
         {
            title: "Flexible Test Configuration",
            description: "Time limits, multiple attempts, scoring strategies",
         },
         {
            title: "Detailed Reports",
            description: "Batch analytics, student rankings, trend analysis",
         },
      ],
      testimonial: {
         name: "Mr. Sharma",
         role: "Physics Faculty",
         quote: "I uploaded my entire question bank in 10 minutes. Now I create tests in seconds, and the AI handles difficulty distribution perfectly. Detailed analytics help me identify which topics students struggle with.",
      },
      cta: "Request Demo",
   },
};

export function BenefitsSection() {
   const [activeTab, setActiveTab] = React.useState<TabType>("Students");

   const scrollToSection = (id: string) => {
      const element = document.querySelector(id);
      if (element) {
         element.scrollIntoView({ behavior: "smooth" });
      }
   };

   return (
      <section id='for-students' className='py-24 bg-gray-50'>
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
                  Built for Everyone in Education
               </motion.h2>
               <motion.p
                  variants={fadeInUp}
                  className='text-xl text-gray-600 max-w-3xl mx-auto'
               >
                  Whether you&apos;re a student, teacher, or institution
               </motion.p>
            </motion.div>

            {/* Tabs */}
            <div className='flex justify-center mb-12'>
               <div className='inline-flex bg-white rounded-lg p-1 shadow-md'>
                  {TABS.map((tab) => (
                     <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-3 rounded-lg font-medium transition-all ${
                           activeTab === tab
                              ? "bg-linear-to-r from-ai-blue to-vibrant-purple text-white"
                              : "text-gray-600 hover:text-gray-900"
                        }`}
                     >
                        {tab}
                     </button>
                  ))}
               </div>
            </div>

            {/* Tab Content */}
            <motion.div
               key={activeTab}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.3 }}
            >
               <h3 className='text-3xl font-bold text-center text-gray-900 mb-12'>
                  {BENEFITS[activeTab].hero}
               </h3>

               {/* Benefits Grid */}
               <div className='grid md:grid-cols-2 gap-6 mb-12'>
                  {BENEFITS[activeTab].benefits.map((benefit, idx) => (
                     <div key={idx} className='flex items-start gap-3'>
                        <Check className='w-6 h-6 text-success-green shrink-0 mt-1' />
                        <div>
                           <h4 className='font-semibold text-gray-900 mb-1'>
                              {benefit.title}
                           </h4>
                           <p className='text-gray-600 text-sm'>
                              {benefit.description}
                           </p>
                        </div>
                     </div>
                  ))}
               </div>

               {/* Testimonial */}
               <Card className='max-w-4xl mx-auto mb-8'>
                  <CardContent className='p-8'>
                     <div className='flex items-start gap-4'>
                        <div className='w-16 h-16 bg-linear-to-br from-ai-blue to-vibrant-purple rounded-full flex items-center justify-center text-white text-2xl shrink-0'>
                           {BENEFITS[activeTab].testimonial.name[0]}
                        </div>
                        <div className='flex-1'>
                           <div className='mb-2'>
                              <p className='font-semibold text-gray-900'>
                                 {BENEFITS[activeTab].testimonial.name}
                              </p>
                              <p className='text-sm text-gray-600'>
                                 {BENEFITS[activeTab].testimonial.role}
                              </p>
                           </div>
                           <p className='text-gray-700 italic'>
                              &quot;{BENEFITS[activeTab].testimonial.quote}
                              &quot;
                           </p>
                        </div>
                     </div>
                  </CardContent>
               </Card>

               {/* CTA */}
               <div className='text-center'>
                  <Button
                     size='lg'
                     variant='primary'
                     onClick={() => scrollToSection("#get-started")}
                  >
                     {BENEFITS[activeTab].cta}
                  </Button>
               </div>
            </motion.div>
         </Container>
      </section>
   );
}
