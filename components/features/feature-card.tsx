"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FeatureCardProps {
   icon: React.ReactNode;
   title: string;
   description: string;
   badge?: string;
   features?: string[];
   forAudience?: string;
}

export function FeatureCard({
   icon,
   title,
   description,
   badge,
   features,
   forAudience,
}: FeatureCardProps) {
   return (
      <motion.div
         whileHover={{ y: -8, scale: 1.02 }}
         transition={{ duration: 0.3 }}
      >
         <Card className='relative h-full p-8 hover:shadow-2xl transition-shadow'>
            {/* Badge */}
            {badge && (
               <Badge className='absolute top-4 right-4' variant='primary'>
                  {badge}
               </Badge>
            )}

            {/* Icon */}
            <div className='mb-6 text-primary text-4xl'>{icon}</div>

            {/* Title */}
            <h3 className='text-2xl font-semibold mb-3 text-gray-900'>
               {title}
            </h3>

            {/* Description */}
            <p className='text-base text-gray-600 mb-4'>{description}</p>

            {/* Features list */}
            {features && features.length > 0 && (
               <ul className='space-y-2 mt-4'>
                  {features.map((feature, idx) => (
                     <li key={idx} className='flex items-start gap-2'>
                        <Check className='w-5 h-5 text-accent mt-0.5 shrink-0' />
                        <span className='text-sm text-gray-700'>{feature}</span>
                     </li>
                  ))}
               </ul>
            )}

            {/* Audience tag */}
            {forAudience && (
               <div className='mt-6 pt-4 border-t border-gray-200'>
                  <span className='text-xs font-medium text-gray-500'>
                     For: {forAudience}
                  </span>
               </div>
            )}
         </Card>
      </motion.div>
   );
}
