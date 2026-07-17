/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#05060a",
          900: "#0a0c14",
          800: "#0f1220",
          700: "#171a2b",
        },
        accent: {
          400: "#8b7bff",
          500: "#7c6cff",
          600: "#6a5bef",
        },
        glow: {
          cyan: "#5eead4",
          pink: "#f472b6",
        },
      },
      fontFamily: {
        display: ["'Clash Display'", "'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 20% 20%, rgba(124,108,255,0.18), transparent 40%), radial-gradient(circle at 80% 0%, rgba(94,234,212,0.12), transparent 35%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(124,108,255,0.35)",
        "glow-sm": "0 0 20px rgba(124,108,255,0.25)",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        blob: "blob 10s infinite ease-in-out",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
