import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
   extends React.InputHTMLAttributes<HTMLInputElement> {
   label?: string;
   error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
   ({ className, type, label, error, ...props }, ref) => {
      return (
         <div className='w-full'>
            {label && (
               <label className='block text-sm font-medium text-gray-700 mb-2'>
                  {label}
                  {props.required && (
                     <span className='text-red-500 ml-1'>*</span>
                  )}
               </label>
            )}
            <input
               type={type}
               className={cn(
                  "flex h-11 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-base transition-colors",
                  "placeholder:text-gray-400 focus:border-ai-blue focus:outline-none focus:ring-2 focus:ring-ai-blue/20",
                  "disabled:cursor-not-allowed disabled:opacity-50",
                  error &&
                     "border-red-500 focus:border-red-500 focus:ring-red-500/20",
                  className
               )}
               ref={ref}
               {...props}
            />
            {error && <p className='mt-1 text-sm text-red-600'>{error}</p>}
         </div>
      );
   }
);

Input.displayName = "Input";

export { Input };
