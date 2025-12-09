export const BRAND = {
   name: "CRAMIND AI",
   tagline: "Learn Smarter",
   mission:
      "An AI platform that helps students learn better and teachers teach smarter",
} as const;

export const EXAM_TYPES = ["NEET", "JEE", "UPSC", "TNPSC", "Other"] as const;

export const INSTITUTION_TYPES = [
   "Coaching Center",
   "School",
   "College",
   "University",
] as const;

export const STUDENT_COUNTS = ["1-50", "51-200", "201-500", "500+"] as const;

export const TRUST_INDICATORS = [
   { icon: "👥", text: "10,000+ Students" },
   { icon: "🏫", text: "500+ Institutions" },
   { icon: "🤖", text: "AI-Powered" },
   { icon: "⚡", text: "99.9% Uptime" },
] as const;

export const API_ENDPOINTS = {
   register: "/api/v1/auth/register",
   demoRequest: "/api/v1/demo-requests",
} as const;
