/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      //   
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'header-bg': 'rgba(0, 0, 0, 1)',
        'card-bg': 'rgba(255,255,255,.05)',
        'color-h1': '#FFFFFF',

        primary: {
          0: '#FF1CF7',
          100: '#00F0FF',
        },
      },
    },
  },
  plugins: [],
};
