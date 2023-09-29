/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
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
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#3c3a8f", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217.
        secundary: "#00ccff",
        tertiary: "#d400d4",
        quaternary: "#efe7e7"
      },
    },
  },
  plugins: [],
};
