import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
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
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        'film-red': "hsl(var(--film-red))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "glow-pulse": {
          "0%, 100%": { 
            textShadow: "0 0 20px hsl(0 85% 55% / 0.5), 0 0 40px hsl(0 85% 55% / 0.3)"
          },
          "50%": { 
            textShadow: "0 0 30px hsl(0 85% 55% / 0.8), 0 0 60px hsl(0 85% 55% / 0.5)"
          }
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        "film-strip": {
          "0%": { transform: "translateX(-100%) rotate(-5deg)", opacity: "0" },
          "100%": { transform: "translateX(0) rotate(0deg)", opacity: "1" }
        },
        "reveal": {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" }
        },
        "focus-in": {
          "0%": { 
            opacity: "0", 
            filter: "blur(20px)",
            transform: "scale(0.95)"
          },
          "50%": {
            opacity: "0.3",
            filter: "blur(10px)"
          },
          "100%": { 
            opacity: "1", 
            filter: "blur(0px)",
            transform: "scale(1)"
          }
        },
        "snap-down": {
          "0%": { 
            transform: "translateY(-100px)",
            opacity: "0"
          },
          "70%": {
            transform: "translateY(5px)"
          },
          "100%": { 
            transform: "translateY(0)",
            opacity: "1"
          }
        },
        "screen-jitter": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translate(-2px, 0)" },
          "20%, 40%, 60%, 80%": { transform: "translate(2px, 0)" }
        },
        "film-grain": {
          "0%": { opacity: "0.8" },
          "50%": { opacity: "0.4" },
          "100%": { opacity: "0" }
        },
        "ambient-glow": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.6" }
        },
        "button-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "film-strip": "film-strip 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "reveal": "reveal 1s ease-out forwards",
        "focus-in": "focus-in 2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "snap-down": "snap-down 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
        "screen-jitter": "screen-jitter 0.3s ease-in-out forwards",
        "film-grain": "film-grain 1.5s ease-out forwards",
        "ambient-glow": "ambient-glow 2s ease-in-out infinite",
        "button-pulse": "button-pulse 3s ease-in-out infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
