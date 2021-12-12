module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "2/3": "66.666667%",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#F3E8FF",
      midnight: "#121063",
      violet: "#A78BFA",
      pink: "#F472B6",
      indigo: "#C7D2FE",
      gray: "#374151",
      blue: "#1E40AF",
      cyan: "#ECFEFF",
      slate: "#0F172A",
      neutral: "#F5F5F5",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#evebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

