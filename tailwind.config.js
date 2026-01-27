/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070B12",
          900: "#0B1321",
          800: "#0F1B2E"
        },
        amber: {
          450: "#FFB020"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,176,32,0.12), 0 0 48px rgba(255,176,32,0.18)"
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

