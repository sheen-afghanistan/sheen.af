/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        paper: {
          DEFAULT: "var(--paper)",
          alt: "var(--paper-alt)",
          raised: "var(--paper-raised)",
        },
        ink: {
          DEFAULT: "var(--ink)",
          70: "var(--ink-70)",
          45: "var(--ink-45)",
        },
        jade: {
          DEFAULT: "var(--jade)",
          deep: "var(--jade-deep)",
          wash: "var(--jade-wash)",
        },
        lapis: "var(--lapis)",
        rule: {
          DEFAULT: "var(--rule)",
          strong: "var(--rule-strong)",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)"],
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        "fluid-xs": "var(--step--2)",
        "fluid-sm": "var(--step--1)",
        "fluid-base": "var(--step-0)",
        "fluid-lg": "var(--step-1)",
        "fluid-xl": "var(--step-2)",
        "fluid-2xl": "var(--step-3)",
        "fluid-3xl": "var(--step-4)",
        "fluid-4xl": "var(--step-5)",
      },
      borderRadius: {
        card: "var(--r-xl)",
      },
      transitionTimingFunction: {
        out: "var(--ease-out)",
        soft: "var(--ease-soft)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        lift: "var(--shadow-lift)",
        gold: "var(--shadow-gold)",
      },
    },
  },
  plugins: [],
};
