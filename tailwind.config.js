/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-dark': '#0b0f19',
        'space-text': '#94a3b8',
        'neon-cyan': '#00f0ff',
        'neon-green': '#00ff9d',
        'neon-red': '#ff003c',
      },
      fontFamily: {
        sans: ['"Rajdhani"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}