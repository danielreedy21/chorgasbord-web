/** @type {import('tailwindcss').Config} */
module.exports = {
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
      width: {
        '128': '32rem',
        '256': '64rem'
      },
      colors: {
        'gradient-0': '#039f00',
        'gradient-1': '#39a900',
        'gradient-2': '#56b300',
        'gradient-3': '#70bd00',
        'gradient-4': '#88c600',
        'gradient-5': '#a0cf00',
        'gradient-6': '#b7d800',
        'gradient-7': '#cfe100',
        'gradient-8': '#e7ea00',
        'gradient-9': '#fff20',
        'gradient-10': '#ffdc00',
        'gradient-11': '#ffc700',
        'gradient-12': '#feb100',
        'gradient-13': '#fa9a00',
        'gradient-14': '#f68400',
        'gradient-15': '#f06c00',
        'gradient-16': '#e85300',
        'gradient-17': '#df3600',
        'gradient-18': '#d50000',
      }
    },
  },
  plugins: [],
}
