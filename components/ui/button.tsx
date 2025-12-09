import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
   {
      variants: {
         variant: {
            primary:
               "bg-gradient-to-r from-ai-blue to-vibrant-purple text-white hover:shadow-lg hover:scale-105 focus-visible:ring-ai-blue",
            secondary:
               "bg-white text-ai-blue border-2 border-ai-blue hover:bg-ai-blue hover:text-white focus-visible:ring-ai-blue",
            white: "bg-white text-ai-blue hover:bg-gray-50 hover:shadow-lg focus-visible:ring-white",
            ghost: "hover:bg-gray-100 text-gray-700 focus-visible:ring-gray-400",
         },
         size: {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6",
            lg: "h-14 px-8 text-lg",
         },
         fullWidth: {
            true: "w-full",
         },
      },
      defaultVariants: {
         variant: "primary",
         size: "md",
      },
   }
);

export interface ButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
      VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
   ({ className, variant, size, fullWidth, ...props }, ref) => {
      return (
         <button
            className={cn(
               buttonVariants({ variant, size, fullWidth, className })
            )}
            ref={ref}
            {...props}
         />
      );
   }
);

Button.displayName = "Button";

export { Button, buttonVariants };
