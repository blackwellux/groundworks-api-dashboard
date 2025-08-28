/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--modus-wc-color-primary)',
        'primary-content': 'var(--modus-wc-color-primary-content)',
        secondary: 'var(--modus-wc-color-secondary)',
      },
      borderRadius: {
        md: 'var(--modus-wc-border-radius-md)',
      },
      fontFamily: {
        sans: ['var(--modus-wc-font-family)', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
