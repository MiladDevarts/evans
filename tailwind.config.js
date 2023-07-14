/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/bg-exolo-mobile-landing-all.jpg')",
      },
      colors: {
        'exblue': '#647efd',
        'expink': '#e1216c'
      },
    },
  },
  plugins: [],
}
