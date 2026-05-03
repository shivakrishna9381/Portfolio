/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0F172A',
          card: '#1E293B',
          'card-hover': '#334155',
          surface: '#0B1120',
        },
        purple: {
          accent: '#7C3AED',
          light: '#A78BFA',
          glow: '#7C3AED33',
        },
        lavender: '#EDE9FE',
        light: {
          bg: '#F8FAFC',
          card: '#FFFFFF',
          surface: '#F1F5F9',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        playful: ['Fredoka', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
