/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    fontFamily: {
      'sans': ['Your Font', 'sans-serif'],
      'serif': ['Your Font', 'serif'],
      'mono': ['Your Font', 'monospace'],
    }
  },
  plugins: [],
}

