# CRAMIND AI - Landing Page Component Specifications

> Technical specifications for frontend developers implementing the landing page

---

## 🏗️ Component Architecture

```
src/
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── MemoryBarSpotlight.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   └── CTASection.tsx
│   ├── features/
│   │   ├── FeatureCard.tsx
│   │   ├── MemoryBar.tsx
│   │   ├── StepTimeline.tsx
│   │   └── BenefitsTab.tsx
│   ├── forms/
│   │   ├── StudentSignupForm.tsx
│   │   ├── DemoRequestForm.tsx
│   │   └── NewsletterForm.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Badge.tsx
│       └── Card.tsx
├── lib/
│   ├── api.ts
│   ├── constants.ts
│   └── utils.ts
└── styles/
    └── globals.css
```

---

## 🎨 Design System

### Colors (Tailwind Config)

```javascript
// tailwind.config.js
module.exports = {
   theme: {
      extend: {
         colors: {
            "ai-blue": {
               DEFAULT: "#1E40AF",
               50: "#EFF6FF",
               100: "#DBEAFE",
               500: "#3B82F6",
               900: "#1E40AF",
            },
            "vibrant-purple": {
               DEFAULT: "#7C3AED",
               50: "#FAF5FF",
               500: "#8B5CF6",
               900: "#7C3AED",
            },
            "success-green": {
               DEFAULT: "#10B981",
               50: "#ECFDF5",
               500: "#10B981",
            },
            "energy-orange": "#F59E0B",
            "confidence-gold": "#FBBF24",
         },
         backgroundImage: {
            "gradient-primary":
               "linear-gradient(135deg, #1E40AF 0%, #7C3AED 100%)",
            "gradient-success":
               "linear-gradient(135deg, #10B981 0%, #1E40AF 100%)",
            "gradient-energy":
               "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)",
         },
      },
   },
};
```

### Typography

```javascript
// tailwind.config.js - fonts
{
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    display: ['Poppins', 'Inter', 'sans-serif'],
  },
  fontSize: {
    'hero': ['64px', { lineHeight: '1.1', fontWeight: '700' }],
    'h1': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
    'h2': ['40px', { lineHeight: '1.3', fontWeight: '600' }],
    'h3': ['28px', { lineHeight: '1.4', fontWeight: '600' }],
    'h4': ['24px', { lineHeight: '1.5', fontWeight: '500' }],
    'body': ['18px', { lineHeight: '1.7', fontWeight: '400' }],
    'small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
  },
}
```

---

## 📦 Component Specifications

### 1. Navigation Component

```typescript
// components/layout/Navigation.tsx
interface NavigationProps {
   className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
   const [isScrolled, setIsScrolled] = useState(false);

   // Sticky on scroll with background change
   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <nav
         className={cn(
            "fixed top-0 w-full z-50 transition-all duration-300",
            isScrolled ? "bg-white shadow-lg py-4" : "bg-transparent py-6",
            className
         )}
      >
         <Container>
            <div className='flex items-center justify-between'>
               {/* Logo */}
               <Link href='/' className='text-2xl font-bold'>
                  CRAMIND AI
               </Link>

               {/* Desktop Menu */}
               <div className='hidden md:flex items-center gap-8'>
                  <Link href='#features'>Features</Link>
                  <Link href='#how-it-works'>How It Works</Link>
                  <Link href='#for-students'>For Students</Link>
                  <Link href='#for-institutions'>For Institutions</Link>
                  <Button variant='primary'>Get Started</Button>
               </div>

               {/* Mobile Menu Button */}
               <button className='md:hidden'>
                  <MenuIcon />
               </button>
            </div>
         </Container>
      </nav>
   );
};
```

---

### 2. Hero Section

```typescript
// components/sections/HeroSection.tsx
const HeroSection: React.FC = () => {
   return (
      <section className='relative min-h-screen flex items-center bg-gradient-primary overflow-hidden'>
         {/* Background decoration */}
         <div className='absolute inset-0 opacity-10'>
            <FloatingElements />
         </div>

         <Container>
            <div className='grid md:grid-cols-2 gap-12 items-center'>
               {/* Left: Content */}
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className='text-white'
               >
                  <h1 className='text-hero mb-6'>Learn Smarter with AI</h1>

                  <p className='text-2xl mb-8 opacity-90'>
                     An AI platform that helps students learn better and
                     teachers teach smarter
                  </p>

                  {/* Dual CTAs */}
                  <div className='flex flex-col sm:flex-row gap-4'>
                     <Button
                        size='lg'
                        variant='primary'
                        onClick={() => scrollTo("#student-signup")}
                     >
                        Start Free Trial
                     </Button>
                     <Button
                        size='lg'
                        variant='secondary'
                        onClick={() => scrollTo("#demo-request")}
                     >
                        Request Demo
                     </Button>
                  </div>

                  {/* Trust indicators */}
                  <div className='mt-12 grid grid-cols-2 md:grid-cols-4 gap-4'>
                     <TrustBadge icon='👥' text='10,000+ Students' />
                     <TrustBadge icon='🏫' text='500+ Institutions' />
                     <TrustBadge icon='🤖' text='AI-Powered' />
                     <TrustBadge icon='⚡' text='99.9% Uptime' />
                  </div>
               </motion.div>

               {/* Right: Visual */}
               <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className='relative'
               >
                  <DashboardPreview />
               </motion.div>
            </div>
         </Container>
      </section>
   );
};
```

---

### 3. Memory Bar Component (Critical!)

```typescript
// components/features/MemoryBar.tsx
interface MemoryBarProps {
   percentage: number;
   subject: string;
   animated?: boolean;
   showLabel?: boolean;
}

const MemoryBar: React.FC<MemoryBarProps> = ({
   percentage,
   subject,
   animated = true,
   showLabel = true,
}) => {
   const [displayPercentage, setDisplayPercentage] = useState(0);

   useEffect(() => {
      if (animated) {
         const timer = setTimeout(() => {
            let current = 0;
            const interval = setInterval(() => {
               current += 1;
               setDisplayPercentage(current);
               if (current >= percentage) {
                  clearInterval(interval);
               }
            }, 20);
         }, 300);
         return () => clearTimeout(timer);
      } else {
         setDisplayPercentage(percentage);
      }
   }, [percentage, animated]);

   // Color based on percentage
   const getColor = (pct: number) => {
      if (pct < 40) return "from-red-500 to-orange-500";
      if (pct < 70) return "from-orange-500 to-yellow-400";
      return "from-green-500 to-emerald-400";
   };

   return (
      <div className='space-y-2'>
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
               className={`h-full bg-gradient-to-r ${getColor(
                  percentage
               )} shadow-lg`}
            >
               {/* Glow effect */}
               <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer' />
            </motion.div>
         </div>
      </div>
   );
};
```

---

### 4. Feature Card Component

```typescript
// components/features/FeatureCard.tsx
interface FeatureCardProps {
   icon: React.ReactNode;
   title: string;
   description: string;
   badge?: string;
   features?: string[];
   forAudience?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
   icon,
   title,
   description,
   badge,
   features,
   forAudience,
}) => {
   return (
      <motion.div
         whileHover={{ y: -8, scale: 1.02 }}
         transition={{ duration: 0.3 }}
         className='relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100'
      >
         {/* Badge */}
         {badge && (
            <Badge className='absolute top-4 right-4' variant='primary'>
               {badge}
            </Badge>
         )}

         {/* Icon */}
         <div className='mb-6 text-ai-blue'>{icon}</div>

         {/* Title */}
         <h3 className='text-h4 mb-3 text-gray-900'>{title}</h3>

         {/* Description */}
         <p className='text-body text-gray-600 mb-4'>{description}</p>

         {/* Features list */}
         {features && features.length > 0 && (
            <ul className='space-y-2 mt-4'>
               {features.map((feature, idx) => (
                  <li key={idx} className='flex items-start gap-2'>
                     <CheckIcon className='w-5 h-5 text-success-green mt-0.5' />
                     <span className='text-sm text-gray-700'>{feature}</span>
                  </li>
               ))}
            </ul>
         )}

         {/* Audience tag */}
         {forAudience && (
            <div className='mt-6 pt-4 border-t border-gray-200'>
               <span className='text-xs font-medium text-gray-500'>
                  For: {forAudience}
               </span>
            </div>
         )}
      </motion.div>
   );
};
```

---

### 5. Memory Bar Spotlight Section

```typescript
// components/sections/MemoryBarSpotlight.tsx
const MemoryBarSpotlight: React.FC = () => {
   const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

   const subjects = [
      { name: "Physics", percentage: 85 },
      { name: "Chemistry", percentage: 72 },
      { name: "Biology", percentage: 91 },
   ];

   return (
      <section
         ref={ref}
         className='relative py-24 bg-gradient-primary overflow-hidden'
      >
         {/* Background decorations */}
         <div className='absolute inset-0 opacity-10'>
            <GridPattern />
         </div>

         <Container>
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={inView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.8 }}
               className='text-center mb-16'
            >
               <h2 className='text-h1 text-white mb-6'>
                  Introducing the Memory Bar
               </h2>
               <p className='text-2xl text-white/90 max-w-3xl mx-auto'>
                  The game-changing feature that shows exactly how ready you are
               </p>
            </motion.div>

            {/* Memory Bar Demo */}
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={inView ? { opacity: 1, scale: 1 } : {}}
               transition={{ duration: 0.8, delay: 0.2 }}
               className='bg-white rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto mb-16'
            >
               <div className='space-y-6'>
                  {subjects.map((subject, idx) => (
                     <MemoryBar
                        key={subject.name}
                        subject={subject.name}
                        percentage={subject.percentage}
                        animated={inView}
                     />
                  ))}
               </div>
            </motion.div>

            {/* Feature boxes */}
            <div className='grid md:grid-cols-4 gap-8 mb-12'>
               <FeatureBox
                  icon='📊'
                  title='Tracks Retention'
                  description='Monitors how well you remember topics over time'
               />
               <FeatureBox
                  icon='✅'
                  title='Shows Readiness'
                  description='Get instant view of your exam preparedness'
               />
               <FeatureBox
                  icon='💪'
                  title='Boosts Confidence'
                  description="Know exactly what you've mastered"
               />
               <FeatureBox
                  icon='🎯'
                  title='Identifies Weak Areas'
                  description='Pinpoint topics needing revision'
               />
            </div>

            {/* CTA */}
            <div className='text-center'>
               <Button size='lg' variant='white'>
                  See Your Memory Bar in Action
               </Button>
            </div>
         </Container>
      </section>
   );
};
```

---

### 6. Student Signup Form

```typescript
// components/forms/StudentSignupForm.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const studentSchema = z.object({
   fullName: z.string().min(2, "Name must be at least 2 characters"),
   email: z.string().email("Invalid email address"),
   phone: z.string().regex(/^\+?[\d\s-()]+$/, "Invalid phone number"),
   targetExam: z.enum(["NEET", "JEE", "UPSC", "TNPSC", "Other"]),
   examDate: z.string().min(1, "Please select exam date"),
   agreeToTerms: z.boolean().refine((val) => val === true, {
      message: "You must agree to terms and privacy policy",
   }),
});

type StudentFormData = z.infer<typeof studentSchema>;

const StudentSignupForm: React.FC = () => {
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
   } = useForm<StudentFormData>({
      resolver: zodResolver(studentSchema),
   });

   const onSubmit = async (data: StudentFormData) => {
      try {
         const response = await fetch("/api/v1/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
         });

         if (response.ok) {
            // Show success message
            toast.success("Account created! Check your email to verify.");
            // Redirect to dashboard
            router.push("/dashboard");
         } else {
            const error = await response.json();
            toast.error(error.message || "Something went wrong");
         }
      } catch (error) {
         toast.error("Network error. Please try again.");
      }
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
         <Input
            label='Full Name'
            {...register("fullName")}
            error={errors.fullName?.message}
            required
         />

         <Input
            label='Email Address'
            type='email'
            {...register("email")}
            error={errors.email?.message}
            required
         />

         <Input
            label='Phone Number'
            type='tel'
            {...register("phone")}
            error={errors.phone?.message}
         />

         <Select
            label='Target Exam'
            {...register("targetExam")}
            error={errors.targetExam?.message}
            required
         >
            <option value=''>Select your exam</option>
            <option value='NEET'>NEET</option>
            <option value='JEE'>JEE</option>
            <option value='UPSC'>UPSC</option>
            <option value='TNPSC'>TNPSC</option>
            <option value='Other'>Other</option>
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

         <Button type='submit' size='lg' fullWidth disabled={isSubmitting}>
            {isSubmitting ? "Creating Account..." : "Start Free Trial"}
         </Button>

         <p className='text-sm text-center text-gray-600'>
            Already have an account? <Link href='/signin'>Sign In</Link>
         </p>
      </form>
   );
};
```

---

## 🎯 Animation Configurations

### Framer Motion Variants

```typescript
// lib/animations.ts
export const fadeInUp = {
   initial: { opacity: 0, y: 30 },
   animate: { opacity: 1, y: 0 },
   transition: { duration: 0.6 },
};

export const fadeInLeft = {
   initial: { opacity: 0, x: -50 },
   animate: { opacity: 1, x: 0 },
   transition: { duration: 0.8 },
};

export const fadeInRight = {
   initial: { opacity: 0, x: 50 },
   animate: { opacity: 1, x: 0 },
   transition: { duration: 0.8 },
};

export const staggerChildren = {
   animate: {
      transition: {
         staggerChildren: 0.1,
      },
   },
};

export const scaleIn = {
   initial: { opacity: 0, scale: 0.8 },
   animate: { opacity: 1, scale: 1 },
   transition: { duration: 0.5 },
};
```

---

## 📱 Responsive Design Utilities

```typescript
// lib/utils.ts
export const useMediaQuery = (query: string) => {
   const [matches, setMatches] = useState(false);

   useEffect(() => {
      const media = window.matchMedia(query);
      setMatches(media.matches);

      const listener = () => setMatches(media.matches);
      media.addEventListener("change", listener);

      return () => media.removeEventListener("change", listener);
   }, [query]);

   return matches;
};

// Usage
const isMobile = useMediaQuery("(max-width: 767px)");
const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
const isDesktop = useMediaQuery("(min-width: 1024px)");
```

---

## 🔌 API Client

```typescript
// lib/api.ts
const API_BASE_URL =
   process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1";

export const apiClient = {
   async registerStudent(data: StudentFormData) {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(data),
      });

      if (!response.ok) {
         const error = await response.json();
         throw new Error(error.message || "Registration failed");
      }

      return response.json();
   },

   async requestDemo(data: DemoRequestData) {
      const response = await fetch(`${API_BASE_URL}/demo-requests`, {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(data),
      });

      if (!response.ok) {
         const error = await response.json();
         throw new Error(error.message || "Demo request failed");
      }

      return response.json();
   },
};
```

---

## ✅ Testing Checklist

### Component Tests

-  [ ] Navigation renders correctly
-  [ ] Memory Bar animates properly
-  [ ] Forms validate input
-  [ ] Buttons trigger correct actions
-  [ ] Mobile menu works

### Integration Tests

-  [ ] Form submissions reach backend
-  [ ] Success/error messages display
-  [ ] Navigation scrolling works
-  [ ] Analytics events fire

### Visual Tests

-  [ ] Responsive on mobile (375px, 414px)
-  [ ] Responsive on tablet (768px, 1024px)
-  [ ] Responsive on desktop (1280px, 1920px)
-  [ ] Dark mode (if applicable)
-  [ ] Animations smooth at 60fps

---

## 🚀 Performance Optimization

### Image Optimization

```typescript
import Image from "next/image";

<Image
   src='/hero-image.png'
   alt='CRAMIND AI Dashboard'
   width={1200}
   height={800}
   priority // for above-fold images
   placeholder='blur'
   blurDataURL='data:image/...' // low-quality placeholder
/>;
```

### Code Splitting

```typescript
// Lazy load heavy components
const MemoryBarSpotlight = dynamic(
   () => import("@/components/sections/MemoryBarSpotlight"),
   { loading: () => <Skeleton /> }
);
```

---

**Ready to start building? Begin with the Hero and Memory Bar components -
they're the showstoppers! 🚀**
