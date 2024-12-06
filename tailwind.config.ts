import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      fontSize: {
        xs: ['1.125rem', '1.25rem'], // Adjust as needed
        sm: ['1.3rem', '1.5rem'],
        base: ['1.5rem', '1.75rem'],
        lg: ['1.75rem', '2rem'],
        xl: ['2rem', '2.5rem'],
        '2xl': ['2.5rem', '3rem'],
        '3xl': ['3rem', '3.5rem'],
        '4xl': ['3rem', '1.25'],
        '5xl': ['3.75rem', '1.25'],
        '6xl': ['4.5rem', '1.25'],
        '7xl': ['5rem', '1.25'],
      },
    },
  },
  plugins: [],
} satisfies Config;