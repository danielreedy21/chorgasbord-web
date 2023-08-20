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
        'gradient-1': '#449800',
        'gradient-2': '#628f00',
        'gradient-3': '#798600',
        'gradient-4': '#8e7a00',
        'gradient-5': '#a16e00',
        'gradient-6': '#b15e00',
        'gradient-7': '#c04c00',
        'gradient-8': '#cc3400',
        'gradient-9': '#d50000',
      }
    },
  },
  plugins: [],
}
