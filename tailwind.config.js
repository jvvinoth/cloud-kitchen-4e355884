/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B2635',
          dark: '#6D1E2A',
        },
        secondary: {
          DEFAULT: '#2C2C2C',
        },
        accent: {
          DEFAULT: '#C17A5C',
        },
        background: {
          DEFAULT: '#FAF8F5',
        },
        surface: {
          DEFAULT: '#FFFFFF',
        },
        text: {
          DEFAULT: '#1A1A1A',
          muted: '#6B6B6B',
        },
        border: {
          DEFAULT: '#E8E3DC',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.02em',
        tighter: '-0.01em',
      },
    },
  },
  plugins: [],
}
