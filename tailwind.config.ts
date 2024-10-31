import type { Config } from 'tailwindcss';

const config: Config = {
  variants: {
    extend: {
      boxShadow: ['dark'],
    },
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        special_white: '#FFFCFA',
        special_purple: '#8C3B5E',
        special_red: '#C12801',
        special_black: '#1a1a1a',
        special_orange: '#DA3A00',
      },
      fontFamily: {
        roboto: ['"Roboto Serif"', 'serif'],
      },
      animation: {
        blobAnimate: 'blob 2s 2s alternate infinite',
        spinner: 'spin 1.2s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'scale(0.75)' },
          '100%': { transform: 'scale(1)' },
        },
        spinner: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      boxShadow: {
        darkMode:
          '0 10px 15px -3px rgba(0, 0, 0, 0.85), 0 4px 6px -2px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
export default config;
