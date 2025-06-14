/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      fira: ["Fira Code", 'monospace', "sans-serif"],
    },
    extend: {
      colors: {
        slate: {
          50: "rgb(var(--color-slate-50)",
          100: "rgb(var(--color-slate-100))",
          200: "rgb(var(--color-slate-200))",
          300: "rgb(var(--color-slate-300))",
          400: "rgb(var(--color-slate-400))",
          500: "rgb(var(--color-slate-500))",
          600: "rgb(var(--color-slate-600))",
          700: "rgb(var(--color-slate-700))",
          800: "rgb(var(--color-slate-800))",
          900: "rgb(var(--color-slate-900))",
          950: "rgb(var(--color-slate-950))",
        },
        orange: {
          50: "rgb(var(--color-orange-50))",
          100: "rgb(var(--color-orange-100))",
          200: "rgb(var(--color-orange-200))",
          300: "rgb(var(--color-orange-300))",
          400: "rgb(var(--color-orange-400))",
          500: "rgb(var(--color-orange-500))",
          600: "rgb(var(--color-orange-600))",
          700: "rgb(var(--color-orange-700))",
          800: "rgb(var(--color-orange-800))",
          900: "rgb(var(--color-orange-900))",
          950: "rgb(var(--color-orange-950))",
        },
        teal: {
          50: "rgb(var(--color-teal-50))",
          100: "rgb(var(--color-teal-100))",
          200: "rgb(var(--color-teal-200))",
          300: "rgb(var(--color-teal-300))",
          DEFAULT: "rgb(var(--color-teal-400))",
          500: "rgb(var(--color-teal-500))",
          600: "rgb(var(--color-teal-600))",
          700: "rgb(var(--color-teal-700))",
          800: "rgb(var(--color-teal-800))",
          900: "rgb(var(--color-teal-900))",
          950: "rgb(var(--color-teal-950))",
        },
        indigo: {
          50: "rgb(var(--color-indigo-50))",
          100: "rgb(var(--color-indigo-100))",
          200: "rgb(var(--color-indigo-200))",
          300: "rgb(var(--color-indigo-300))",
          400: "rgb(var(--color-indigo-400))",
          DEFAULT: "rgb(var(--color-indigo-500))",
          600: "rgb(var(--color-indigo-600))",
          700: "rgb(var(--color-indigo-700))",
          800: "rgb(var(--color-indigo-800))",
          900: "rgb(var(--color-indigo-900))",
          950: "rgb(var(--color-indigo-950))",
        },
        purple: {
          50: "rgb(var(--color-purple-50))",
          100: "rgb(var(--color-purple-100))",
          200: "rgb(var(--color-purple-200))",
          300: "rgb(var(--color-purple-300))",
          DEFAULT: "rgb(var(--color-purple-400))",
          500: "rgb(var(--color-purple-500))",
          600: "rgb(var(--color-purple-600))",
          700: "rgb(var(--color-purple-700))",
          800: "rgb(var(--color-purple-800))",
          900: "rgb(var(--color-purple-900))",
          950: "rgb(var(--color-purple-950))",
        },
        rose: {
          50: "rgb(var(--color-rose-50))",
          100: "rgb(var(--color-rose-100))",
          200: "rgb(var(--color-rose-200))",
          DEFAULT: "rgb(var(--color-rose-300))",
          400: "rgb(var(--color-rose-400))",
          500: "rgb(var(--color-rose-500))",
          600: "rgb(var(--color-rose-600))",
          700: "rgb(var(--color-rose-700))",
          800: "rgb(var(--color-rose-800))",
          900: "rgb(var(--color-rose-900))",
          950: "rgb(var(--color-rose-950))",
        },
      },
      fontSize: {
        base: [
          "var(--font-size-base)",
          {
            lineHeight: "19.6px",
          },
        ],
        sm: [
          "var(--font-size-1)",
          {
            lineHeight: "24px",
          },
        ],
        md: [
          "var(--font-size-2)",
          {
            lineHeight: "27px",
          },
        ],
        lg: [
          "var(--font-size-3)",
          {
            lineHeight: "30px",
          },
        ],
        xl: [
          "var(--font-size-4)",
          {
            lineHeight: "33.6px",
          },
        ],
        "2xl": [
          "var(--font-size-5)",
          {
            lineHeight: "42px",
          },
        ],
        "3xl": [
          "var(--font-size-6)",
          {
            lineHeight: "46.8px",
          },
        ],
        "4xl": [
          "var(--font-size-7)",
          {
            lineHeight: "57.6px",
          },
        ],
        "5xl": [
          "var(--font-size-8)",
          {
            lineHeight: "66px",
          },
        ],
      },
    },
  },
  plugins: [],
};
