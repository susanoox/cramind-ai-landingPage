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
            border: "var(--border)",
            input: "var(--input)",
            ring: "var(--ring)",
            background: "var(--background)",
            foreground: "var(--foreground)",
            primary: {
               DEFAULT: "var(--primary)",
               foreground: "var(--primary-foreground)",
            },
            secondary: {
               DEFAULT: "var(--secondary)",
               foreground: "var(--secondary-foreground)",
            },
            destructive: {
               DEFAULT: "var(--destructive)",
               foreground: "var(--destructive-foreground)",
            },
            muted: {
               DEFAULT: "var(--muted)",
               foreground: "var(--muted-foreground)",
            },
            accent: {
               DEFAULT: "var(--accent)",
               foreground: "var(--accent-foreground)",
            },
            popover: {
               DEFAULT: "var(--popover)",
               foreground: "var(--popover-foreground)",
            },
            card: {
               DEFAULT: "var(--card)",
               foreground: "var(--card-foreground)",
            },
         },
         borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
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
