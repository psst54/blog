module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          white: "#ffffff",
        },
        bg: {
          standard: "#ffffff",
          highlight: "#207bfa",
          code: "#C1BACC44",
          reverse: "#000000",
        },
        border: {
          standard: "#484561",
          light: "#C1BACC",
          dark: "#000000",
          highlight: "#207bfa",
          code: "#C1BACC",
        },
        text: {
          standard: "#000000",
          light: "#C1BACC",
          little_light: "#504e66",
          reverse: "#ffffff",
          link: "#207bfa",
          tag: "#207bfa",
        },
        primary: {
          ultra_light: "#d2e6fc",
          very_light: "#82befa",
          light: "#559cfa",
          standard: "#207bfa",
          dark: "#024ed1",
        },
        secondary: {
          ultra_light: "#efebff",
          very_light: "#c1b4fc",
          light: "#ab94fe",
          standard: "#7a5eff",
          dark: "#5e42e3",
        },
      },
    },
  },
  plugins: [],
};
