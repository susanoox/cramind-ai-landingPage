# CRAMIND AI - Landing Page

A modern, responsive landing page built with Next.js 15, TypeScript, and
Tailwind CSS following DRY, KISS, and SOLID principles.

## 🎯 Features

-  **Hero Section** - Eye-catching gradient background with dual CTAs for
   students and institutions
-  **Features Section** - 8 comprehensive feature cards with animations
-  **Memory Bar Spotlight** - Unique animated retention tracking showcase
-  **How It Works** - 4-step journey timeline with detailed explanations
-  **Benefits Section** - Tabbed interface for Students, Institutions, and
   Teachers
-  **CTA Section** - Dual forms for student signup and demo requests
-  **Fully Responsive** - Mobile-first design with breakpoints for tablet and
   desktop

## 🏗️ Architecture

### Design Principles

-  **DRY (Don't Repeat Yourself)** - Reusable components, constants, and
   utilities
-  **KISS (Keep It Simple, Stupid)** - Simple, focused components with single
   responsibilities
-  **SOLID Principles**:
   -  **Single Responsibility** - Each component has one clear purpose
   -  **Open/Closed** - Components are open for extension via props
   -  **Liskov Substitution** - Components can be swapped without breaking
      functionality
   -  **Interface Segregation** - Clean, minimal prop interfaces
   -  **Dependency Inversion** - Components depend on abstractions
      (types/interfaces)

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `app/page.tsx`. The page
auto-updates as you edit the file.

This project uses
[`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
to automatically optimize and load [Geist](https://vercel.com/font), a new font
family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

-  [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
   features and API.
-  [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js) - your
feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)
for more details.
