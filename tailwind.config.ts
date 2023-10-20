import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        twinkle: {
          '0%': { transform: 'scale(1, 1)', background: 'rgba(255, 255, 255, 0)' },
          '40%': { transform: 'scale(0.8, 0.8)', background: 'rgba(255, 255, 255, 1)' },
          '80%': { transform: 'scale(1, 1)', background: 'rgba(255, 255, 255, 0)' },
          '100%': { transform: 'scale(1, 1)', background: 'rgba(255, 255, 255, 0)' },
        }
      }
    },
    animation: {
      'twinkling-star': 'twinkle 2s linear infinite',
    },
  },
  plugins: [],
}
export default config
