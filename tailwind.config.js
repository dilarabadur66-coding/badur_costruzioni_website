/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      // Colori personalizzati per il tema "Terra & Pietra"
      colors: {
        stone: {
          950: '#0c0a09',   // Sfondo principale (quasi nero caldo)
          900: '#1c1917',   // Card backgrounds
          850: '#1a1816',   // Variante intermedia
          800: '#292524',   // Bordi e elementi secondari
          700: '#44403c',   // Testo secondario / bordi hover
          600: '#57534e',   // Elementi disabilitati
          500: '#78716c',   // Testo muted
          400: '#a8a29e',   // Testo body
          300: '#d6d3d1',   // Testo chiaro
          200: '#e7e5e4',   // Testo molto chiaro
          100: '#f5f5f4',   // Quasi bianco
        },
        amber: {
          950: '#451a03',
          900: '#78350f',
          800: '#92400e',
          700: '#b45309',
          600: '#d97706',   // Colore primario / accent
          500: '#f59e0b',   // Hover states
          400: '#fbbf24',   // Highlights
          300: '#fcd34d',
          200: '#fde68a',
          100: '#fef3c7',
          50:  '#fffbeb',
        },
      },

      // Font personalizzati
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Inter', 'sans-serif'],
      },

      // Animazioni personalizzate
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'bounce-slow': 'bounce 3s infinite',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },

      // Spaziature personalizzate
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },

      // Border radius
      borderRadius: {
        '4xl': '2rem',
      },

      // Box shadows personalizzati
      boxShadow: {
        'glow-amber': '0 0 20px rgba(217, 119, 6, 0.3)',
        'glow-amber-lg': '0 0 40px rgba(217, 119, 6, 0.4)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
      },

      // Background images
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')",
      },
    },
  },
  plugins: [
    // Plugin per form elements styling
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
};