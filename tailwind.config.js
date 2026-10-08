/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f5ff',
          100: '#e5edff',
          200: '#cddbfe',
          300: '#b4c6fc',
          400: '#8da2fb',
          500: '#687bf7',
          600: '#434ee8',
          700: '#2b33c7',
          800: '#1e248a',
          900: '#141759',
          950: '#0b0d36',
        },
        academic: {
          primary: '#1e3a8a', // Deep navy
          secondary: '#2563eb', // Medium blue
          accent: '#0284c7', // Sky / Cyan
          accentLight: '#e0f2fe',
          cardLight: '#ffffff',
          bgLight: '#f8fafc',
          borderLight: '#e2e8f0',
          darkPrimary: '#0f172a',
          darkSecondary: '#1e293b',
          darkCard: '#1e293b',
          darkBorder: '#334155',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      }
    },
  },
  plugins: [],
}
