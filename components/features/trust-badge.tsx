import * as React from "react";
import { cn } from "@/lib/utils";

interface TrustBadgeProps {
   icon: string;
   text: string;
   className?: string;
}

export function TrustBadge({ icon, text, className }: TrustBadgeProps) {
   return (
      <div
         className={cn(
            "flex flex-col items-center gap-2 p-4 bg-white/10 rounded-lg backdrop-blur-sm",
            className
         )}
      >
         <span className='text-2xl'>{icon}</span>
         <span className='text-sm font-medium text-white text-center'>
            {text}
         </span>
      </div>
   );
}
