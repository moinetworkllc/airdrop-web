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
        "moi-ball-bg": "url('/images/ball-bg.svg')",
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
        "card-bg": "rgba(255,255,255,.05)",
        "moi-white": "rgb(255,255,255,1)",
        "moi-black": "#000000",
        "moi-indigo": "#230d7b",
        "moi-snowfall": "#f7f7f7",
        "moi-purple": {
          400: "#9d1fca",
          500: "#4d2bb9",
          900: "#9120C7"
        },
      }
    },
  },
  plugins: [],
}
