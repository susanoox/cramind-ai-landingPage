"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { EXAM_TYPES } from "@/lib/constants";
import { apiClient, type StudentFormData } from "@/lib/api";

const studentSchema = z.object({
   fullName: z.string().min(2, "Name must be at least 2 characters"),
   email: z.string().email("Invalid email address"),
   phone: z.string().optional(),
   targetExam: z.enum(EXAM_TYPES),
   examDate: z.string().min(1, "Please select exam date"),
   agreeToTerms: z.boolean().refine((val) => val === true, {
      message: "You must agree to terms and privacy policy",
   }),
});

type StudentFormValues = z.infer<typeof studentSchema>;

interface StudentSignupFormProps {
   onSuccess?: () => void;
}

export function StudentSignupForm({ onSuccess }: StudentSignupFormProps) {
   const [isSubmitting, setIsSubmitting] = React.useState(false);
   const [submitError, setSubmitError] = React.useState<string | null>(null);
   const [submitSuccess, setSubmitSuccess] = React.useState(false);

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm<StudentFormValues>({
      resolver: zodResolver(studentSchema),
   });

   const onSubmit = async (data: StudentFormValues) => {
      setIsSubmitting(true);
      setSubmitError(null);

      try {
         await apiClient.registerStudent(data as StudentFormData);
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
            <h3 className='text-2xl font-bold text-gray-900 mb-2'>Success!</h3>
            <p className='text-gray-600'>
               Account created! Check your email to verify.
            </p>
         </div>
      );
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
         <Input
            label='Full Name'
            {...register("fullName")}
            error={errors.fullName?.message}
            required
            placeholder='John Doe'
         />

         <Input
            label='Email Address'
            type='email'
            {...register("email")}
            error={errors.email?.message}
            required
            placeholder='john@example.com'
         />

         <Input
            label='Phone Number'
            type='tel'
            {...register("phone")}
            error={errors.phone?.message}
            placeholder='+91 98765 43210'
         />

         <Select
            label='Target Exam'
            {...register("targetExam")}
            error={errors.targetExam?.message}
            required
         >
            <option value=''>Select your exam</option>
            {EXAM_TYPES.map((exam) => (
               <option key={exam} value={exam}>
                  {exam}
               </option>
            ))}
         </Select>

         <Input
            label='Exam Date'
            type='date'
            {...register("examDate")}
            error={errors.examDate?.message}
            required
         />

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
            {isSubmitting ? "Creating Account..." : "Start Free Trial"}
         </Button>

         <p className='text-sm text-center text-gray-600'>
            Already have an account?{" "}
            <a
               href='/signin'
               className='text-ai-blue hover:underline font-medium'
            >
               Sign In
            </a>
         </p>
      </form>
   );
}
