export const hoverUpwardMotion = {
  "&:hover": {
    transform: "translateY(-0.25rem)",
    transition: "transform 0.1s ease-in-out",
    zIndex: 2,
  },

  ":not(:hover)": {
    transform: "translateY(0)",
    transition: "transform 0.1s ease-in-out",
  },
};
