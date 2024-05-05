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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      mobile: "320px",
      tablet: "768px",
      desktop: "1280px",
      sm: "320px",
      md: "768px",
      lg: "1280px",
      mdOnly: { min: "768px", max: "1279px" },
      smOnly: { max: "767px" },
      beforeLg: { max: "1279px" },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      bermuda: "#78dcca",
      bgButton: "rgba(255, 255, 255, 0.10)",
      bgButtonHov: "rgba(255, 255, 255, 0.20)",
      textColor: "#fff",
      errorColor: "#FF5757",
      backdropColor: "rgba(1, 10, 5, 0.75)",
    },
    letterSpacing: {
      "9.48px": "9.48px",
      "1.65px": "1.65px",
    },
    lineHeight: {
      1.4: "1.4",
      1.6: "1.6",
      12: "3rem",
      none: "1",
    },
    fontSize: {
      "40px": "40px",
      "37px": "37px",
      "12px": "12px",
      "10px": "10px",
      "14px": "14px",
      "18px": "18px",
    },
    spacing: {
      "53px": "53px",
      "113px": "113px",
      "": "",
    },
  },
  plugins: [],
};
