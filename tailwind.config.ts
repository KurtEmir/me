import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0a0a',
          secondary: '#111111',
          card: '#0f1520',
        },
        blue: {
          accent: '#3b82f6',
          hover: '#2563eb',
          glow: '#1d4ed8',
          subtle: '#1e3a5f',
          muted: '#172a45',
        },
        border: {
          DEFAULT: '#1e2a3a',
          blue: '#2563eb40',
        },
        text: {
          primary: '#f0f6ff',
          muted: '#6b7280',
          blue: '#93c5fd',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Geist Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
export default config
