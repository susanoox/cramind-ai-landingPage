# Component Index

Quick reference guide for all components in the CRAMIND AI landing page.

## 🎨 UI Components (`components/ui/`)

### Button

**File**: `button.tsx` **Purpose**: Reusable button with multiple variants
**Variants**: `primary`, `secondary`, `white`, `ghost` **Sizes**: `sm`, `md`,
`lg` **Props**: All HTML button attributes + variant props

```tsx
<Button variant='primary' size='lg' fullWidth>
   Click Me
</Button>
```

---

### Card

**File**: `card.tsx` **Purpose**: Container component for content cards
**Sub-components**: `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`,
`CardFooter`

```tsx
<Card>
   <CardHeader>
      <CardTitle>Title</CardTitle>
      <CardDescription>Description</CardDescription>
   </CardHeader>
   <CardContent>Content here</CardContent>
</Card>
```

---

### Badge

**File**: `badge.tsx` **Purpose**: Small label/tag component **Variants**:
`primary`, `secondary`, `outline`, `warning`

```tsx
<Badge variant='primary'>AI-Powered</Badge>
```

---

### Input

**File**: `input.tsx` **Purpose**: Form input field with label and error display
**Props**: `label`, `error`, all HTML input attributes

```tsx
<Input label='Email' type='email' error='Invalid email' required />
```

---

### Select

**File**: `select.tsx` **Purpose**: Dropdown select field with label and error
display **Props**: `label`, `error`, all HTML select attributes

```tsx
<Select label='Choose' error='Required'>
   <option value='1'>Option 1</option>
</Select>
```

---

### Checkbox

**File**: `checkbox.tsx` **Purpose**: Checkbox input with label and error
display **Props**: `label`, `error`, all HTML checkbox attributes

```tsx
<Checkbox label='I agree to terms' error='Must agree' />
```

---

## 🧩 Feature Components (`components/features/`)

### MemoryBar

**File**: `memory-bar.tsx` **Purpose**: Animated retention tracking bar
**Props**: `percentage`, `subject`, `animated`, `showLabel`

```tsx
<MemoryBar subject='Physics' percentage={85} animated={true} showLabel={true} />
```

**Features**:

-  Color-coded based on percentage (red/yellow/green)
-  Smooth animation on mount
-  Shimmer effect overlay

---

### FeatureCard

**File**: `feature-card.tsx` **Purpose**: Card displaying a feature with icon,
title, description **Props**: `icon`, `title`, `description`, `badge`,
`features`, `forAudience`

```tsx
<FeatureCard
   icon={<Icon />}
   title='Feature Name'
   description='Description...'
   badge='AI-Powered'
   features={["Point 1", "Point 2"]}
   forAudience='Students'
/>
```

**Features**:

-  Hover animation (lift and scale)
-  Optional badge display
-  Optional feature list with checkmarks
-  Optional audience tag

---

### TrustBadge

**File**: `trust-badge.tsx` **Purpose**: Display trust indicator with icon and
text **Props**: `icon`, `text`

```tsx
<TrustBadge icon='🏫' text='500+ Institutions' />
```

---

### FeatureBox

**File**: `feature-box.tsx` **Purpose**: Simple box displaying an icon, title,
and description **Props**: `icon`, `title`, `description`

```tsx
<FeatureBox
   icon='📊'
   title='Tracks Retention'
   description='Monitors how well you remember'
/>
```

---

## 📋 Layout Components (`components/layout/`)

### Container

**File**: `container.tsx` **Purpose**: Responsive container wrapper with
max-width **Props**: All HTML div attributes

```tsx
<Container>Content with automatic padding and max-width</Container>
```

---

### Navigation

**File**: `navigation.tsx` **Purpose**: Sticky header navigation with mobile
menu **Features**:

-  Scroll-based background change
-  Mobile hamburger menu
-  Smooth scroll to sections
-  Auto-hides mobile menu on navigation

---

### Footer

**File**: `footer.tsx` **Purpose**: Site footer with links and social media
**Features**:

-  4 columns of links
-  Social media icons
-  Copyright notice

---

## 📄 Section Components (`components/sections/`)

### HeroSection

**File**: `hero-section.tsx` **Purpose**: Landing page hero with headline and
CTAs **Features**:

-  Gradient background with decorative elements
-  Fade-in animations
-  Dual CTAs (Students/Institutions)
-  Trust indicators
-  Responsive layout (split on desktop, stacked on mobile)

---

### FeaturesSection

**File**: `features-section.tsx` **Purpose**: Display 8 feature cards in a grid
**Features**:

-  3-column grid (desktop), 2-column (tablet), 1-column (mobile)
-  Scroll-triggered animations
-  Uses FeatureCard components

---

### MemoryBarSpotlight

**File**: `memory-bar-spotlight.tsx` **Purpose**: Highlighted section showcasing
Memory Bar feature **Features**:

-  Dark gradient background
-  Animated memory bars for 3 subjects
-  4 feature boxes
-  Scroll-triggered animations
-  CTA button

---

### HowItWorksSection

**File**: `how-it-works-section.tsx` **Purpose**: 4-step timeline showing user
journey **Features**:

-  Horizontal timeline (desktop)
-  Vertical timeline (mobile)
-  Step numbers with gradient circles
-  Icons and detailed descriptions
-  Connecting lines between steps

---

### BenefitsSection

**File**: `benefits-section.tsx` **Purpose**: Tabbed section for
Students/Institutions/Teachers **Features**:

-  3 tabs with smooth transitions
-  Benefits grid (2 columns)
-  Testimonial card
-  CTA button

---

### CTASection

**File**: `cta-section.tsx` **Purpose**: Final call-to-action with forms
**Features**:

-  Tabbed interface (Students/Institutions)
-  Benefits list
-  Trust badges
-  Integrated forms (StudentSignupForm / DemoRequestForm)

---

## 📝 Form Components (`components/forms/`)

### StudentSignupForm

**File**: `student-signup-form.tsx` **Purpose**: Student registration form
**Fields**: `fullName`, `email`, `phone`, `targetExam`, `examDate`,
`agreeToTerms` **Features**:

-  Zod schema validation
-  Error handling and display
-  Loading states
-  Success state with message
-  API integration

```tsx
<StudentSignupForm onSuccess={() => console.log("Success!")} />
```

---

### DemoRequestForm

**File**: `demo-request-form.tsx` **Purpose**: Institution demo request form
**Fields**: `institutionName`, `contactName`, `email`, `phone`,
`institutionType`, `studentCount`, `message`, `agreeToTerms` **Features**:

-  Zod schema validation
-  Error handling and display
-  Loading states
-  Success state with message
-  API integration
-  Textarea for message

```tsx
<DemoRequestForm onSuccess={() => console.log("Demo requested!")} />
```

---

## 🛠️ Utilities (`lib/`)

### constants.ts

**Purpose**: App-wide constants **Exports**:

-  `BRAND` - Brand name, tagline, mission
-  `EXAM_TYPES` - Array of exam options
-  `INSTITUTION_TYPES` - Array of institution types
-  `STUDENT_COUNTS` - Array of student count ranges
-  `TRUST_INDICATORS` - Array of trust badge data
-  `API_ENDPOINTS` - API endpoint paths

---

### animations.ts

**Purpose**: Framer Motion animation variants **Exports**:

-  `fadeInUp` - Fade in from bottom
-  `fadeInLeft` - Fade in from left
-  `fadeInRight` - Fade in from right
-  `scaleIn` - Scale and fade in
-  `staggerContainer` - Stagger children animations
-  `fadeInScale` - Combined fade and scale

---

### api.ts

**Purpose**: API client with error handling **Exports**:

-  `apiClient.registerStudent(data)` - Register student
-  `apiClient.requestDemo(data)` - Request demo
-  Type definitions: `StudentFormData`, `DemoRequestData`
-  Custom `ApiError` class

---

### utils.ts

**Purpose**: Utility functions **Exports**:

-  `cn()` - Conditional class name merger (clsx + tailwind-merge)

---

## 🎨 Styling

### Tailwind Configuration

**File**: `tailwind.config.ts` **Custom Colors**:

-  `ai-blue` - Primary blue with shades
-  `vibrant-purple` - Secondary purple with shades
-  `success-green` - Success color with shades
-  `energy-orange` - Accent orange
-  `confidence-gold` - Accent gold

**Custom Gradients**:

-  `gradient-primary` - Blue to purple
-  `gradient-success` - Green to blue
-  `gradient-energy` - Orange to gold

**Custom Fonts**:

-  `sans` - Inter
-  `display` - Poppins

**Custom Font Sizes**:

-  `hero`, `h1`, `h2`, `h3`, `h4`, `body`, `small`

**Custom Animations**:

-  `shimmer` - Sliding shimmer effect

---

## 📱 Responsive Design

### Breakpoints

-  **Mobile**: Default (< 768px)
-  **Tablet**: `md:` (≥ 768px)
-  **Desktop**: `lg:` (≥ 1024px)

### Container

-  Max-width: `1280px` (7xl)
-  Padding: `1rem` (mobile), `1.5rem` (tablet), `2rem` (desktop)

---

## 🚀 Usage Tips

1. **Start with sections**: Import and compose sections in `app/page.tsx`
2. **Customize variants**: Use CVA variants for quick style changes
3. **Extend components**: Add new variants to existing components
4. **Maintain types**: Always use TypeScript for new components
5. **Follow patterns**: Use existing components as templates
6. **Test responsive**: Check all breakpoints during development

---

**Last Updated**: December 9, 2025
