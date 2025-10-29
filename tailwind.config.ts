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
      colors: {
        /* ---------- Light mode (default) ---------- */
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

        /* ---------- Custom brand tones ---------- */
        "old-rose": "hsl(var(--old-rose))",
        "powder-blue": "hsl(var(--powder-blue))",
        "tea-green": "hsl(var(--tea-green))",
        "davys-gray": "hsl(var(--davys-gray))",
        melon: "hsl(var(--melon))",

        /* ---------- Sidebar (used for layout themes) ---------- */
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

        /* ---------- Dark mode palette ---------- */
        dark: {
          background: "hsl(220 20% 8%)" /* Deep blue-gray base */,
          foreground: "hsl(210 15% 90%)" /* Soft warm white text */,
          primary: "hsl(17 45% 60%)" /* Muted rose (keeps your brand warmth) */,
          "primary-foreground": "hsl(210 20% 98%)",
          secondary: "hsl(220 15% 25%)" /* Desaturated navy for panels */,
          "secondary-foreground": "hsl(210 20% 90%)",
          accent: "hsl(30 50% 45%)" /* Warm highlight (golden-peach tint) */,
          "accent-foreground": "hsl(210 15% 96%)",
          muted: "hsl(215 16% 18%)" /* Smooth dark gray */,
          "muted-foreground": "hsl(215 10% 75%)",
          border: "hsl(215 15% 20%)" /* Subtle contrast divider */,
          card: "hsl(220 18% 12%)",
          "card-foreground": "hsl(210 15% 88%)",
        },
      },

      fontFamily: {
        sans: ["Source Sans Pro", "sans-serif"],
        serif: ["Poppins", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },

      backgroundImage: {
        "gradient-hero": "var(--gradient-hero)",
        "gradient-card": "var(--gradient-card)",
        "gradient-accent": "var(--gradient-accent)",
      },

      boxShadow: {
        soft: "var(--shadow-soft)",
        medium: "var(--shadow-medium)",
        hover: "var(--shadow-hover)",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        bounce: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
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
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
