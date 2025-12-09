"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
   Calendar,
   FileText,
   BarChart3,
   BookOpen,
   GitBranch,
   TrendingUp,
   Building2,
   Zap,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { FeatureCard } from "@/components/features/feature-card";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const FEATURES = [
   {
      icon: <Calendar className='w-10 h-10' />,
      title: "AI Study Planner",
      description:
         "Based on your exam date, the AI creates a personalized study plan that adapts to your level. Get daily tasks with reminders to keep you on track.",
      badge: "AI-Powered",
      features: [
         "Based on Exam Date",
         "Adapts to Student Level",
         "Daily Tasks + Reminders",
      ],
   },
   {
      icon: <FileText className='w-10 h-10' />,
      title: "AI-Generated Questions",
      description:
         "Take smart tests designed to improve retention and boost confidence. Our AI creates the perfect mix of questions to challenge you at the right level.",
      badge: "Smart Testing",
      features: [
         "Mock Tests",
         "Custom Tests",
         "Anti-Cheating Measures",
         "Instant Results",
      ],
   },
   {
      icon: <BarChart3 className='w-10 h-10' />,
      title: "Memory Bar",
      description:
         "A unique feature that shows exactly how ready you are for your exam. It tracks your retention, identifies weak areas, and boosts your confidence.",
      badge: "Unique Feature",
      features: [
         "Tracks Retention",
         "Shows Readiness",
         "Boosts Confidence",
         "Identifies Weak Areas",
      ],
   },
   {
      icon: <BookOpen className='w-10 h-10' />,
      title: "Personalized Learning",
      description:
         "Learn from real-life explanations that make complex topics simple. Our smart revision system helps you retain more in less time.",
      features: [
         "Smart Revision System",
         "Deep Analytics",
         "Topic-Level Syllabus",
         "Real Life Explanations",
      ],
   },
   {
      icon: <GitBranch className='w-10 h-10' />,
      title: "Organized Syllabus",
      description:
         "Navigate through Exam → Syllabus → Subjects → Lessons → Topics with 3-tier progressive disclosure to prevent information overload.",
      forAudience: "Institutions & Students",
   },
   {
      icon: <TrendingUp className='w-10 h-10' />,
      title: "Advanced Analytics",
      description:
         "Track scores, percentages, grades, and rankings. Question-wise breakdown with explanations. Batch performance summaries and trend analysis.",
      forAudience: "Teachers & Admins",
   },
   {
      icon: <Building2 className='w-10 h-10' />,
      title: "Built for Institutions",
      description:
         "Easy onboarding with website integration. Save 40-50% of teacher time with automated test generation and grading.",
      badge: "B2B",
      features: [
         "Easy Onboarding",
         "Website Integration",
         "Saves 40-50% Teacher Time",
         "Batch Creation",
      ],
      forAudience: "Institutions",
   },
   {
      icon: <Zap className='w-10 h-10' />,
      title: "Scale Effortlessly",
      description:
         "Import 500 questions or 100 users at once via CSV. Batch assign tests to entire classes. Bulk enrollment management.",
      forAudience: "Institutions",
   },
] as const;

export function FeaturesSection() {
   return (
      <section id='features' className='py-24 bg-gray-50'>
         <Container>
            <motion.div
               initial='initial'
               whileInView='animate'
               viewport={{ once: true }}
               variants={staggerContainer}
               className='text-center mb-16'
            >
               <motion.h2
                  variants={fadeInUp}
                  className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'
               >
                  Level Up with AI
               </motion.h2>
               <motion.p
                  variants={fadeInUp}
                  className='text-xl text-gray-600 max-w-3xl mx-auto'
               >
                  Everything you need to learn better and teach smarter
               </motion.p>
            </motion.div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
               {FEATURES.map((feature, idx) => (
                  <FeatureCard
                     key={idx}
                     icon={feature.icon}
                     title={feature.title}
                     description={feature.description}
                     badge={"badge" in feature ? feature.badge : undefined}
                     features={
                        "features" in feature
                           ? [...feature.features]
                           : undefined
                     }
                     forAudience={
                        "forAudience" in feature
                           ? feature.forAudience
                           : undefined
                     }
                  />
               ))}
            </div>
         </Container>
      </section>
   );
}
