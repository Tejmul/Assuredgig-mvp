/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0a0f1a',
          surface: '#181f2a',
          card: '#131926',
        },
        primary: {
          DEFAULT: '#00e6ff',
          dark: '#155e75',
          light: '#a7f3d0',
        },
        secondary: {
          DEFAULT: '#001E29',
          light: '#003B52',
          dark: '#00141B',
        },
        accent: {
          DEFAULT: '#ff00ff',
          light: '#ff5efc',
          dark: '#cc00b8',
        },
        glass: 'rgba(20, 30, 50, 0.7)',
        border: '#232a3a',
        background: { DEFAULT: '#F8FDFF' },
        surface: { DEFAULT: '#FFFFFF' },
        success: { DEFAULT: '#00D9A6' },
        warning: { DEFAULT: '#FFB627' },
        error: { DEFAULT: '#FF4757' },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'neo-flat': '0 4px 32px 0 rgba(0,230,255,0.10), 0 1.5px 4px 0 rgba(0,0,0,0.10)',
        'neo-glow': '0 0 16px 2px #00e6ff, 0 0 32px 8px #ff00ea33',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'float': '0 22px 40px rgba(0, 30, 41, 0.2)',
        'hover': '0 30px 60px rgba(0,230,255,0.18)',
        'neo-subtle': '0 2px 8px 0 rgba(0,0,0,0.08), 0 1.5px 4px 0 rgba(0,0,0,0.06)',
        'neo-pressed': 'inset 0 2px 8px 0 rgba(0,0,0,0.12)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '3rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center',
          },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 50% 0%, #00e6ff33 0%, #0a0f1a 80%)',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
} 