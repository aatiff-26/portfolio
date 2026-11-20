/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dev: {
          bg: {
            dark: "#0b0f17",
            light: "#f8fafc",
          },
          card: {
            dark: "rgba(17, 24, 39, 0.7)",
            light: "rgba(255, 255, 255, 0.8)",
          },
          border: {
            dark: "rgba(255, 255, 255, 0.08)",
            light: "rgba(0, 0, 0, 0.08)",
          },
          accent: "#2563eb",
          accentHover: "#1d4ed8",
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glass-dark': '0 8px 30px rgba(0, 0, 0, 0.4)',
        'glass-light': '0 8px 30px rgba(0, 0, 0, 0.06)',
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
