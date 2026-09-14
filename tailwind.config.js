/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b0f19", // Linear deep slate
        surface: {
          DEFAULT: "#111827",
          hover: "#162032",
          border: "#1e293b",
        },
        accent: {
          DEFAULT: "#6366f1", // Linear Indigo
          hover: "#4f46e5",
          light: "#818cf8",
          glow: "rgba(99, 102, 241, 0.18)",
          emerald: "#10b981",
          violet: "#8b5cf6",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
