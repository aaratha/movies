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
      colors: {
        'co1': '#1f1e21',
        'grad': '#b9b9b9',
        'co2': '#e6e6e6',
        'co3': '#3D00E0',
        'bg1': '#43434e',
        'bg2': '#28282a',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
