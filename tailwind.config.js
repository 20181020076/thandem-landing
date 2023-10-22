/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily:{
      'monserrat-alternates': ['monserrat-alternates']
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
    extend: {
      boxShadow: {
        'card': '2px 5px 7px 7px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        twinklin: {
          "0%": {
            opacity: 0,
          },
          "10%": {
            opacity: 1,
          },
          "90%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
        "twinklin": "twinklin 1s ease-in-out infinite"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: "#000000",
        light: "#ffffff",
        primary: "#3c3a8f", // 240,86,199
        secundary: "#8282D1",
        Romantic: "#bf1667", // 80,230,217.
        Nature: "#52a12c",
        NightLife: "#7011bb",
        Coffe: "#ea8322",

      },
    },
  },
  plugins: [],
};
