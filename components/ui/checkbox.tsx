import * as React from "react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
   extends React.InputHTMLAttributes<HTMLInputElement> {
   label?: string;
   error?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
   ({ className, label, error, ...props }, ref) => {
      return (
         <div className='w-full'>
            <div className='flex items-start gap-2'>
               <input
                  type='checkbox'
                  className={cn(
                     "mt-1 h-4 w-4 rounded border-border text-primary transition-colors",
                     "focus:ring-2 focus:ring-primary/20 focus:ring-offset-0",
                     "disabled:cursor-not-allowed disabled:opacity-50",
                     error && "border-red-500",
                     className
                  )}
                  ref={ref}
                  {...props}
               />
               {label && (
                  <label className='text-sm text-gray-700 cursor-pointer'>
                     {label}
                  </label>
               )}
            </div>
            {error && <p className='mt-1 text-sm text-red-600'>{error}</p>}
         </div>
      );
   }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
