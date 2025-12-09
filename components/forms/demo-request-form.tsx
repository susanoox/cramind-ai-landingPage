"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { INSTITUTION_TYPES, STUDENT_COUNTS } from "@/lib/constants";
import { apiClient, type DemoRequestData } from "@/lib/api";

const demoSchema = z.object({
   institutionName: z.string().min(2, "Institution name is required"),
   contactName: z.string().min(2, "Your name is required"),
   email: z.string().email("Invalid email address"),
   phone: z.string().min(10, "Valid phone number is required"),
   institutionType: z.enum(INSTITUTION_TYPES),
   studentCount: z.enum(STUDENT_COUNTS),
   message: z.string().optional(),
   agreeToTerms: z.boolean().refine((val) => val === true, {
      message: "You must agree to terms and privacy policy",
   }),
});

type DemoFormValues = z.infer<typeof demoSchema>;

interface DemoRequestFormProps {
   onSuccess?: () => void;
}

export function DemoRequestForm({ onSuccess }: DemoRequestFormProps) {
   const [isSubmitting, setIsSubmitting] = React.useState(false);
   const [submitError, setSubmitError] = React.useState<string | null>(null);
   const [submitSuccess, setSubmitSuccess] = React.useState(false);

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm<DemoFormValues>({
      resolver: zodResolver(demoSchema),
   });

   const onSubmit = async (data: DemoFormValues) => {
      setIsSubmitting(true);
      setSubmitError(null);

      try {
         await apiClient.requestDemo(data as DemoRequestData);
         setSubmitSuccess(true);
         reset();
         onSuccess?.();
      } catch (error) {
         setSubmitError(
            error instanceof Error ? error.message : "Failed to submit form"
         );
      } finally {
         setIsSubmitting(false);
      }
   };

   if (submitSuccess) {
      return (
         <div className='text-center py-8'>
            <div className='w-16 h-16 bg-success-green rounded-full flex items-center justify-center mx-auto mb-4'>
               <span className='text-white text-3xl'>✓</span>
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-2'>
               Thank You!
            </h3>
            <p className='text-gray-600'>
               We&apos;ll contact you shortly to schedule your demo.
            </p>
         </div>
      );
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
         <Input
            label='Institution Name'
            {...register("institutionName")}
            error={errors.institutionName?.message}
            required
            placeholder='ABC Coaching Institute'
         />

         <Input
            label='Your Name'
            {...register("contactName")}
            error={errors.contactName?.message}
            required
            placeholder='John Doe'
         />

         <Input
            label='Email Address'
            type='email'
            {...register("email")}
            error={errors.email?.message}
            required
            placeholder='john@institution.com'
         />

         <Input
            label='Phone Number'
            type='tel'
            {...register("phone")}
            error={errors.phone?.message}
            required
            placeholder='+91 98765 43210'
         />

         <Select
            label='Institution Type'
            {...register("institutionType")}
            error={errors.institutionType?.message}
            required
         >
            <option value=''>Select type</option>
            {INSTITUTION_TYPES.map((type) => (
               <option key={type} value={type}>
                  {type}
               </option>
            ))}
         </Select>

         <Select
            label='Number of Students'
            {...register("studentCount")}
            error={errors.studentCount?.message}
            required
         >
            <option value=''>Select range</option>
            {STUDENT_COUNTS.map((count) => (
               <option key={count} value={count}>
                  {count}
               </option>
            ))}
         </Select>

         <div className='w-full'>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
               Message/Requirements
            </label>
            <textarea
               {...register("message")}
               className='flex min-h-[120px] w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-base transition-colors placeholder:text-gray-400 focus:border-ai-blue focus:outline-none focus:ring-2 focus:ring-ai-blue/20'
               placeholder='Tell us about your requirements...'
            />
         </div>

         <Checkbox
            label='I agree to Terms & Privacy Policy'
            {...register("agreeToTerms")}
            error={errors.agreeToTerms?.message}
         />

         {submitError && (
            <div className='p-4 bg-red-50 border border-red-200 rounded-lg'>
               <p className='text-sm text-red-600'>{submitError}</p>
            </div>
         )}

         <Button type='submit' size='lg' fullWidth disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Request Demo"}
         </Button>

         <p className='text-sm text-center text-gray-600'>
            Prefer to talk?{" "}
            <a
               href='tel:+911234567890'
               className='text-ai-blue hover:underline font-medium'
            >
               Call us at +91-1234-567890
            </a>
         </p>
      </form>
   );
}
