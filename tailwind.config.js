/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          light: '#FF9ECD',
          DEFAULT: '#FF1493',
          dark: '#CC1077',
        },
        gray: {
          light: '#F5F5F5',
          DEFAULT: '#666666',
          dark: '#333333',
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#4A4A4A',
          light: '#FFFFFF',
        },
        background: {
          light: '#FFFFFF',
          dark: '#1A1A1A',
          accent: '#F8F9FA',
        }
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'scroll-slow': 'scroll 40s linear infinite',
        'scroll-medium': 'scroll 30s linear infinite',
        'scroll-fast': 'scroll 20s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'pulse-soft': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 }
        }
      },
    },
  },
  plugins: [],
}
