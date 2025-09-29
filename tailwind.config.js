/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs principales GRILL'Z
        'grillz': {
          black: '#1a1a1a',
          grey: '#4a4a4a', 
          orange: '#d97706',
          yellow: '#f59e0b'
        },
        // Couleurs marocaines pour accents
        'morocco': {
          terracotta: '#cd7f32',
          ochre: '#cc7722',
          red: '#8b0000',
          gold: '#ffd700'
        }
      },
      fontFamily: {
        'display': ['Bebas Neue', 'cursive'],
        'body': ['Roboto', 'system-ui', 'sans-serif'],
        'arabic': ['Amiri', 'serif']
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h1': ['2.5rem', { lineHeight: '1.3' }],
        'h2': ['2rem', { lineHeight: '1.4' }],
        'h3': ['1.5rem', { lineHeight: '1.4' }],
      },
      animation: {
        'flame': 'flame 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      },
      keyframes: {
        flame: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '25%': { transform: 'scale(1.05) rotate(1deg)' },
          '50%': { transform: 'scale(1.1) rotate(-1deg)' },
          '75%': { transform: 'scale(1.05) rotate(0.5deg)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(50px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' }
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1a1a1a 0%, #d97706 100%)',
        'card-gradient': 'linear-gradient(145deg, #ffffff 0%, #f9fafb 100%)',
        'moroccan-pattern': `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d97706' fill-opacity='0.05'%3E%3Cpath d='M20 20L10 10h20L20 20zm0 0L30 30H10l10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        'zellige': `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23cc7722' fill-opacity='0.08'%3E%3Cpath d='M30 30l15-15v30L30 30zm0 0l-15 15V15l15 15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      },
      boxShadow: {
        'glow': '0 0 20px rgba(217, 119, 6, 0.3)',
        'glow-lg': '0 0 40px rgba(217, 119, 6, 0.4)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'moroccan': '0 8px 32px rgba(205, 127, 50, 0.15)'
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem'
        }
      }
    },
  },
  plugins: [],
}