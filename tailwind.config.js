/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        base: '#0B0B0F'
      },
      boxShadow: {
        glow: '0 0 45px rgba(104, 168, 255, 0.35)'
      },
      backgroundImage: {
        wave: "url('/images/wave-bg.svg')"
      }
    }
  },
  plugins: []
};
