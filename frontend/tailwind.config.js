const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");
module.exports = {
  // mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: "#ff7d00",
        secondary: "#232f3e",
        orange: {
          100: "#fffaf0",
          200: "#feebc8",
          300: "#fbd38d",
          400: "#f6ad55",
          500: "#ed8936",
          600: "#dd6b20",
          700: "#c05621",
          800: "#9c4221",
          900: "#7b341e",
        },
      },
    },
    screens: {
      xs: "321px",
      // => @media (min-width: 320px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1400px",
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
      letter: "lower-alpha",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      4: "4px",
      8: "8px",
      10: "10px",
      12: "12px",
    },
    colors: {
      // Build your palette here
      black: colors.black,
      white: colors.white,
      green: colors.green,
      transparent: "transparent",
      current: "currentColor",
      gray: colors.blueGray,
      teal: colors.teal,
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber,
      indigo: colors.indigo,
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
  purge: [],
  important: true,
};
