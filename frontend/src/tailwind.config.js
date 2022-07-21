module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      darkColor: "#1D1D1D",
      lightOrange: "#FFC897",
      purple: "#D7BCFD",
      white: "#FFFFFF",
      middleGray: "#E1E1E1",
      gray: "#969393",
      lightGray: "#F7F7F7",
      magenta: "#FF1ABF",
      Orange: "#EBB840",
      pink: "#FF6C92",
      middleOrange: "#FFC897",
      red: "#FF5757",
      blue: "#4A9CCD",
    },
    fontFamily: {
      serif: ["Playfair Display", "serif"],
      sans: ["Raleway", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
