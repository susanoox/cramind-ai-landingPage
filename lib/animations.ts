import type { Variants } from "framer-motion";

export const fadeInUp: Variants = {
   initial: { opacity: 0, y: 30 },
   animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const fadeInLeft: Variants = {
   initial: { opacity: 0, x: -50 },
   animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export const fadeInRight: Variants = {
   initial: { opacity: 0, x: 50 },
   animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export const scaleIn: Variants = {
   initial: { opacity: 0, scale: 0.8 },
   animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export const staggerContainer: Variants = {
   animate: {
      transition: {
         staggerChildren: 0.1,
      },
   },
};

export const fadeInScale: Variants = {
   initial: { opacity: 0, scale: 0.9 },
   animate: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};
