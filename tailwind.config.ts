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
        background: "var(--background)",
        foreground: "var(--foreground)",
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