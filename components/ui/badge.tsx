import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
   "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
   {
      variants: {
         variant: {
            primary:
               "bg-gradient-to-r from-ai-blue to-vibrant-purple text-white",
            secondary: "bg-success-green text-white",
            outline: "border border-gray-300 text-gray-700 bg-white",
            warning: "bg-energy-orange text-white",
         },
      },
      defaultVariants: {
         variant: "primary",
      },
   }
);

export interface BadgeProps
   extends React.HTMLAttributes<HTMLDivElement>,
      VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
   return (
      <div className={cn(badgeVariants({ variant }), className)} {...props} />
   );
}

export { Badge, badgeVariants };
