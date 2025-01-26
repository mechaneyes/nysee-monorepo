/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "!./node_modules/**/*", // Exclude node_modules
  ],
  theme: {
    extend: {
      fontFamily: {
        "fira-mono": "'Fira Mono'",
        "input-mono": "'Input Mono'",
        "jetbrains-mono": "'JetBrains Mono'",
        "source-code-vf": ["source-code-variable", "sans-serif"]
      },
      boxShadow: {
        "shifted-sm": "2px 1px 2px rgb(0 0 0 / 0.05)",
        shifted: "2px 1px 3px rgb(0 0 0 / 0.1), 2px 1px 2px rgb(0 0 0 / 0.06)",
        "shifted-md":
          "2px 4px 6px -1px rgb(0 0 0 / 0.1), 2px 2px 4px -1px rgb(0 0 0 / 0.06)",
        "shifted-lg":
          "2px 10px 15px -3px rgb(0 0 0 / 0.1), 2px 4px 6px -2px rgb(0 0 0 / 0.05)",
        "shifted-xl":
          "2px 20px 25px -5px rgb(0 0 0 / 0.1), 2px 10px 10px -5px rgb(0 0 0 / 0.04)",
        "shifted-2xl": "2px 25px 50px -12px rgb(0 0 0 / 0.25)",
        "shifted-inner": "inset 2px 2px 4px rgb(0 0 0 / 0.05)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        namjunepaik: {
          // Base colors
          1: "#012030",
          2: "#21B0ED",
          3: "#51E8CF",
          4: "#A8FF8E",
          5: "#E9FF7A",

          // Additional opacity variations
          "1/50": "#01203080",
          "2/50": "#21B0ED80",
          "3/50": "#51E8CF80",
          "4/50": "#A8FF8E80",
          "5/50": "#E9FF7A80",

          // Darker variations
          "1-dark": "#011825",
          "2-dark": "#1B8EBE",
          "3-dark": "#41BAA6",
          "4-dark": "#86CC72",
          "5-dark": "#BAcc62",

          // Lighter variations
          "1-light": "#013348",
          "2-light": "#4CC2F2",
          "3-light": "#7EEEDA",
          "4-light": "#BEFFAA",
          "5-light": "#EFFF99",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
