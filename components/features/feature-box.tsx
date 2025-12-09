import * as React from "react";
import { cn } from "@/lib/utils";

interface FeatureBoxProps {
   icon: string;
   title: string;
   description: string;
   className?: string;
}

export function FeatureBox({
   icon,
   title,
   description,
   className,
}: FeatureBoxProps) {
   return (
      <div
         className={cn(
            "bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white",
            className
         )}
      >
         <div className='text-4xl mb-4'>{icon}</div>
         <h3 className='text-lg font-semibold mb-2'>{title}</h3>
         <p className='text-sm opacity-90'>{description}</p>
      </div>
   );
}
