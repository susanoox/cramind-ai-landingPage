import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
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
         fontFamily: {
            sans: ["Inter", "system-ui", "sans-serif"],
            display: ["Poppins", "Inter", "sans-serif"],
         },
         fontSize: {
            hero: ["64px", { lineHeight: "1.1", fontWeight: "700" }],
            h1: ["48px", { lineHeight: "1.2", fontWeight: "700" }],
            h2: ["40px", { lineHeight: "1.3", fontWeight: "600" }],
            h3: ["28px", { lineHeight: "1.4", fontWeight: "600" }],
            h4: ["24px", { lineHeight: "1.5", fontWeight: "500" }],
            body: ["18px", { lineHeight: "1.7", fontWeight: "400" }],
            small: ["14px", { lineHeight: "1.5", fontWeight: "400" }],
         },
         keyframes: {
            shimmer: {
               "0%": { transform: "translateX(-100%)" },
               "100%": { transform: "translateX(100%)" },
            },
         },
         animation: {
            shimmer: "shimmer 2s infinite",
         },
      },
   },
   plugins: [],
};

export default config;
