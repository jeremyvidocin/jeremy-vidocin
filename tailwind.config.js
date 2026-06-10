/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        sans: ['Archivo', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        cream: '#F4F0E6',
        paper: '#FBF9F2',
        ink: '#15120D',
        cobalt: '#2034D9',
        orange: '#FF5A1F',
        sun: '#F4BE1A',
        forest: '#0E7A52',
        pink: '#EF63A0',
      },
      animation: {
        'marquee': 'marquee 38s linear infinite',
        'float': 'float 7s ease-in-out infinite',
      },
      keyframes: {
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
