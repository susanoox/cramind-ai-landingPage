"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MemoryBarProps {
   percentage: number;
   subject: string;
   animated?: boolean;
   showLabel?: boolean;
   className?: string;
}

const getColorClasses = (pct: number): string => {
   if (pct < 40) return "from-red-500 to-orange-500";
   if (pct < 70) return "from-orange-500 to-yellow-400";
   return "from-green-500 to-emerald-400";
};

export function MemoryBar({
   percentage,
   subject,
   animated = true,
   showLabel = true,
   className,
}: MemoryBarProps) {
   const [displayPercentage, setDisplayPercentage] = React.useState(0);

   React.useEffect(() => {
      if (!animated) {
         setDisplayPercentage(percentage);
         return;
      }

      const timer = setTimeout(() => {
         let current = 0;
         const interval = setInterval(() => {
            current += 1;
            setDisplayPercentage(current);
            if (current >= percentage) {
               clearInterval(interval);
            }
         }, 20);

         return () => clearInterval(interval);
      }, 300);

      return () => clearTimeout(timer);
   }, [percentage, animated]);

   return (
      <div className={cn("space-y-2", className)}>
         {showLabel && (
            <div className='flex items-center justify-between'>
               <span className='font-medium text-gray-700'>{subject}</span>
               <span className='text-2xl font-bold text-gray-900'>
                  {displayPercentage}%
               </span>
            </div>
         )}

         <div className='relative h-8 bg-gray-200 rounded-full overflow-hidden'>
            <motion.div
               initial={{ width: 0 }}
               animate={{ width: `${displayPercentage}%` }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               className={cn(
                  "h-full bg-linear-to-r shadow-lg",
                  getColorClasses(percentage)
               )}
            >
               {/* Shimmer effect */}
               <div className='absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-shimmer' />
            </motion.div>
         </div>
      </div>
   );
}
