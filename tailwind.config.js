/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-section": "url('/images/hero-section.svg')",
        "main-bg": "radial-gradient(at 47% 33%, hsl(240.00, 35%, 36%) 0, transparent 39%), radial-gradient(at 22% 65%, rgba(10, 0, 38, 0.84) 0, transparent 55%)"
      },
      boxShadow: {
        'card': 'inset 0 0 0 600px rgba(255,255,255,0.1)',
        '5xl': '0px 1px 6px 0px rgba(20, 10, 51, 0.07)',
        '6xl': '0px 2px 2px 0px rgba(20, 10, 51, 0.03)',
        '7xl': '0px 1px 2px 0px rgba(20, 10, 51, 0.05)',
        'card': '0 1px 2px rgba(20,10,51,.05), 0 2px 2px rgba(20,10,51,.03), 0 1px 6px rgba(20,10,51,.07)'

      },
      backdropOpacity: {
        'light': 'blur(14px) saturate(65%)',
        'dark': 'blur(16px) saturate(164%)'
      },
      colors: {
        "header-bg": "hsla(0,0%,100%,.2)",
        "moi=grad": "rgba(245, 242, 255, 1)",
        "card-bg": "rgba(255,255,255,.05)",
        "moi-black": {
          100: "#000000",
          200: "rgba(0, 0, 0, 0.66)",
          300: "rgba(0, 0, 0, 1)",
          500: "rgba(0, 0, 0, 0.25)"
        },
        "moi-card" : {
          "light": "rgba(118, 118, 190, 0.18)",
          "dark": "rgba(78, 78, 99, 0.74)"
        },
        "moi-indigo": "#230d7b",
        "moi-snowfall": "#f7f7f7",
        "moi-light": "#FCFBFF", 
        "glass-bg": "rgba(175, 175, 175, 0.2)",
        "moi-dark": "rgba(10, 0, 38, 1)",
        "moi-grey": "rgba(255, 255, 255, 0.33)",
        "moi-white": {
          100: "rgba(255, 255, 255, 0.9)",
          200: "rgb(255,255,255,1)",
          300: "rgba(255, 255, 255, 0.66)",
          400: "rgba(255, 255, 255, 0.35)",
          500: "rgba(255, 255, 255, 0.8)",
          600: "#F5F2FF",
          700: "rgba(255, 255, 255, 0.125)",
          800: "rgba(255, 255, 255, 0.65)"
        },
        "moi-purple": {
          100: "rgba(192, 171, 255, 1)",
          200: "rgba(75, 23, 229, 0.96)",
          300: "rgba(75, 23, 229, 1)",
          400: "#9d1fca",
          500: "#4d2bb9",
          600: "rgba(10, 0, 38, 0.84)",
          700: "rgba(10, 0, 38, 0.69)",
          800: "#4B17E5",
          900: "#9120C7",
          "dark": "rgba(10, 0, 38, 0.05)"
        },
      }
    },
  },
  plugins: [],
}
