import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
   title: "CRAMIND AI - Learn Smarter with AI-Powered Study Plans | NEET, JEE, UPSC",
   description:
      "An AI platform that helps students learn better and teachers teach smarter. AI study planner, Memory Bar tracking, gamified tests, and deep analytics for NEET, JEE, TNPSC, UPSC & more.",
   keywords: [
      "AI study planner",
      "competitive exam preparation",
      "NEET JEE coaching",
      "online learning platform",
      "memory bar",
      "gamified learning",
      "institution LMS",
   ],
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang='en'>
         <body className='antialiased'>{children}</body>
      </html>
   );
}
