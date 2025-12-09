# CRAMIND AI - Landing Page Quick Reference

> **For Frontend Developers**: Quick-start guide based on official brochure and
> backend analysis

---

## 🎨 Official Branding

### Brand Name

**CRAMIND AI** (always ALL CAPS)

### Taglines

```
Primary: "Learn Smarter"
Secondary: "Level Up with AI"
Mission: "An AI platform that helps students learn better and teachers teach smarter"
```

### Color Palette

```css
/* Primary Colors */
--ai-blue: #1e40af;
--vibrant-purple: #7c3aed;
--success-green: #10b981;

/* Accent Colors */
--energy-orange: #f59e0b;
--confidence-gold: #fbbf24;

/* Neutrals */
--deep-dark: #1f2937;
--medium-gray: #6b7280;
--light-gray: #f3f4f6;

/* Gradients */
--gradient-primary: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%);
--gradient-success: linear-gradient(135deg, #10b981 0%, #1e40af 100%);
--gradient-energy: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%);
```

---

## 📐 Page Structure (5 Sections)

### 1. Hero Section

```
Layout: Split (60% content / 40% visual)
Headline: "Learn Smarter with AI"
Subheadline: "An AI platform that helps students learn better..."
CTA 1: "Start Free Trial" (Students)
CTA 2: "Request Demo" (Institutions)
```

### 2. Features Section (8 Cards)

```
1. AI Study Planner - Based on exam date, adapts to level
2. Tests That Train You - Mock, custom, coverage, retention tests
3. Memory Bar ⭐ - Tracks retention, shows readiness
4. Smart Learning - Real-life explanations, deep analytics
5. Hierarchical Content - Topic-level syllabus
6. Advanced Analytics - Performance insights
7. Institution Management - Save 40-50% teacher time
8. Bulk Operations - Scale effortlessly
```

### 3. 🌟 Memory Bar Spotlight Section

```
Special full-width section with animated memory bar
Background: Dark gradient (Blue → Purple)
Key Points: Tracks Retention | Shows Readiness | Boosts Confidence | Identifies Weak Areas
```

### 4. How It Works (4 Steps)

```
Step 1: Set Your Goals (Calendar + Exam selection)
Step 2: AI Generates Your Plan (AI processing animation)
Step 3: Study & Track Progress (Dashboard with Memory Bar)
Step 4: Test & Improve (Results + Analytics)
```

### 5. Benefits (Tabbed: Students | Institutions | Teachers)

```
Students: AI Study Planner, Memory Bar, Gamified Tests, Multiple Exams
Institutions: Save 40-50% Time, Easy Onboarding, Batch Management
Teachers: Question Bank, Automated Tests, Deep Analytics
```

### 6. CTA/Demo Section

```
Two forms side-by-side or tabbed:
- Student Sign-up Form
- Institution Demo Request Form
```

---

## 🎯 Key Messages by Audience

### For Students (B2C)

```
✅ AI Study Planner based on YOUR exam date
✅ Memory Bar tracks your readiness
✅ Gamified learning experience
✅ Instant results with smart explanations
✅ Multiple exam support: NEET, JEE, TNPSC, UPSC, College
```

### For Institutions (B2B)

```
✅ Save 40-50% of teacher's time
✅ Easy onboarding & website integration
✅ Institution question bank
✅ Batch creation & management
✅ Admin / Teacher / Student logins
✅ Anti-cheating features
```

---

## 🔥 Unique Selling Points (Highlight These!)

1. **Memory Bar** - Only platform with retention tracking (unique!)
2. **40-50% Time Savings** - Quantified value for institutions
3. **Gamified Tests** - Make learning engaging
4. **Real-Life Explanations** - Practical, not theoretical
5. **Multi-Exam Support** - NEET, JEE, TNPSC, UPSC, College Subjects

---

## 🎬 Animation Priorities

### Must-Have Animations

1. **Memory Bar progress animation** (0% → 85% on scroll)
2. **Hero CTA button hover effects** (gradient shift + lift)
3. **Feature card hover** (lift + shadow)
4. **Counter animation** for "40-50% time saved"
5. **Step-by-step timeline** progression

### Nice-to-Have

-  Typing effect for subheadline
-  Floating elements in hero
-  Icon animations on hover
-  Tab switching transitions

---

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 767px) {
   /* Single column, stacked layout */
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
   /* 2-column grids */
}

/* Desktop */
@media (min-width: 1024px) {
   /* Full layouts, all animations */
}
```

---

## 🔌 API Endpoints (Backend Integration)

### Student Sign-up

```javascript
POST /api/v1/auth/register
{
  "fullName": "string",
  "email": "string",
  "phone": "string",
  "targetExam": "NEET | JEE | UPSC | TNPSC | Other",
  "examDate": "YYYY-MM-DD"
}
```

### Demo Request

```javascript
POST /api/v1/demo-requests
{
  "institutionName": "string",
  "contactName": "string",
  "email": "string",
  "phone": "string",
  "institutionType": "Coaching Center | School | College | University",
  "studentCount": "1-50 | 51-200 | 201-500 | 500+",
  "message": "string (optional)"
}
```

---

## ✅ Critical Implementation Checklist

### Branding

-  [ ] Use "CRAMIND AI" in ALL CAPS everywhere
-  [ ] Apply official color palette
-  [ ] Use gradient backgrounds (Blue → Purple)

### Content

-  [ ] Hero headline: "Learn Smarter with AI"
-  [ ] Highlight Memory Bar as unique feature
-  [ ] Emphasize "40-50% teacher time saved" for B2B
-  [ ] List exam support: NEET, JEE, TNPSC, UPSC, College

### Features

-  [ ] 8 feature cards with hover effects
-  [ ] Memory Bar spotlight section (full-width)
-  [ ] 4-step "How It Works" timeline
-  [ ] 3-tab benefits section (Students/Institutions/Teachers)

### CTAs

-  [ ] "Start Free Trial" button (Students)
-  [ ] "Request Demo" button (Institutions)
-  [ ] Both CTAs in hero section
-  [ ] Final CTA section with forms

### Technical

-  [ ] Mobile-first responsive
-  [ ] Page load < 3 seconds
-  [ ] Forms validate and connect to backend
-  [ ] Analytics tracking on all CTAs
-  [ ] SEO meta tags

---

## 🎨 Component Library Needed

### Buttons

```jsx
<PrimaryButton>Start Free Trial</PrimaryButton>
<SecondaryButton>Request Demo</SecondaryButton>
```

### Cards

```jsx
<FeatureCard
   icon={<AIIcon />}
   title='AI Study Planner'
   description='...'
   badge='AI-Powered'
/>
```

### Forms

```jsx
<StudentSignupForm onSubmit={handleSubmit} />
<DemoRequestForm onSubmit={handleSubmit} />
```

### Animations

```jsx
<MemoryBar percentage={85} subject='Physics' animated={true} />
```

---

## 📊 Success Metrics to Track

### Primary KPIs

-  Student sign-ups (conversions)
-  Demo requests (leads)
-  Form completion rate

### Engagement

-  Average time on page
-  Scroll depth (% reaching CTA)
-  Memory Bar section views
-  Feature card clicks

---

## 🚀 Development Stack Recommendation

```json
{
   "framework": "Next.js 14+",
   "language": "TypeScript",
   "styling": "Tailwind CSS",
   "animations": "Framer Motion",
   "forms": "React Hook Form + Zod",
   "icons": "Heroicons / Lucide React",
   "analytics": "Google Analytics 4"
}
```

---

## 📝 Copy Examples (Use This Tone)

### Good ✅

```
"AI creates a study plan based on your exam date"
"Save 40-50% of your teacher's time"
"The Memory Bar shows exactly how ready you are"
"Tests that train you for success"
```

### Bad ❌

```
"Our platform utilizes machine learning algorithms"
"Advanced analytics dashboard"
"Feature-rich question management system"
"Optimize your learning trajectory"
```

**Keep it simple, benefit-focused, and specific!**

---

## 🎯 Priority Order for Development

### Week 1-2: Core Pages

1. ✅ Navigation + Footer
2. ✅ Hero Section
3. ✅ Features Section (8 cards)
4. ✅ Memory Bar Spotlight 🌟

### Week 3: Engagement

5. ✅ How It Works
6. ✅ Benefits (Tabbed)
7. ✅ CTA/Forms Section

### Week 4: Polish

8. ✅ Animations
9. ✅ Mobile optimization
10.   ✅ Backend integration
11.   ✅ Testing

---

## 📞 Questions?

**Backend API**: Refer to `/docs/swagger.json` or
`http://localhost:8080/swagger/index.html`  
**Brand Assets**: Extract from `CRAMIND_BusinessBrochure.pdf`  
**Full Plan**: See `LANDING_PAGE_PLAN.md` for detailed specifications

---

**Start with Hero + Memory Bar Spotlight - These are your differentiators! 🚀**

_Last Updated: December 9, 2025_
