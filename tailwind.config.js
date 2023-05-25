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
        "hero-moi": "url('/images/bg-moi-hero.png')",
        "moi-ball-bg": "url('/images/ball-bg.svg')",
        "hero-section": "url('/images/hero-section.svg')",
        "moi-eligibility-bg": "url('/images/eligibility-bg.svg')",
        "moi-discover": "url('/images/discover.svg')",
        "moi-project": "url('/images/project-icon.svg')",
        "moi-application": "url('/images/application.svg')",
        "moi-light-toggle": "url('/images/light-toggle.svg')",
        "moi-dark-toggle": "url('/images/dark-toggle.svg')",
        "moi-blur": "url('/images/bg-blur.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "moi-purple-grad": "linear-gradient(270deg, #9d1fca, #4d2bb9);",
        "moi-gradient": "linear-gradient(91.06deg, #FF1CF7 2.26%, #00F0FF 100%);",
        "card-gradient": "linear-gradient(180deg, rgba(145, 32, 199, 0.4) 0%, rgba(93, 40, 188, 0.4) 100%)",
        "button-gradient": "linear-gradient(180deg, #A105EE 0%, #E604DE 100%)",
        "moi-button-secondary": "linear-gradient(180deg, #D1D3E2 0%, #75629D 100%)",
        "eligibility-gradient": "linear-gradient(180deg, rgba(145, 32, 199, 0.1) 0%, rgba(93, 40, 188, 0.1) 100%)"
      },
      colors: {
        "header-bg": "hsla(0,0%,100%,.2)",
        "moi=grad": "rgba(245, 242, 255, 1)",
        "card-bg": "rgba(255,255,255,.05)",
        "moi-black": {
          100: "#000000",
          200: "rgba(0, 0, 0, 0.66)",
          300: "rgba(0, 0, 0, 1)"
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
          600: "#F5F2FF"
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
