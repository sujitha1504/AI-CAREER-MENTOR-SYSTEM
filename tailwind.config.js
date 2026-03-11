/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"DM Sans"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif'
        ],
        display: [
          '"Space Grotesk"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif'
        ],
      },
      colors: {
        brand: {
          bg: '#050816',
          bgAlt: '#070F2B',
          surface: '#0B1220',
          surfaceSoft: '#111827',
          primary: '#22D3EE',
          primarySoft: '#38BDF8',
          accent: '#F97316',
          accentSoft: '#FDBA74',
          border: '#1F2937',
          muted: '#9CA3AF',
          danger: '#FB7185',
          success: '#4ADE80',
        },
      },
      borderRadius: {
        'xl': '1.25rem',
        '2xl': '1.75rem',
        '3xl': '2.25rem',
      },
      boxShadow: {
        'brand-soft': '0 18px 45px rgba(15, 23, 42, 0.65)',
        'brand-glow': '0 0 0 1px rgba(56, 189, 248, 0.6), 0 25px 80px rgba(15, 23, 42, 0.85)',
      },
      animation: {
        'typing': 'typing 1s steps(40, end) infinite alternate',
        'slide-in': 'slide-in 0.3s ease-out',
        'score-fill': 'score-fill 2s ease-out forwards',
      },
      keyframes: {
        typing: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'score-fill': {
          '0%': { width: '0%' },
          '100%': { width: 'var(--score-width)' },
        },
      },
    },
  },
  plugins: [],
}
