import { color } from "~/styles/color";

export const container = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
};

const button = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "2rem",
  height: "2rem",
  background: "transparent",

  border: "none",
  borderRadius: "100%",
  outline: "none",

  cursor: "pointer",
};

export const arrowButton = {
  ...button,
  background: color.secondary.standard,
};

export const numberButton = {
  ...button,

  "&:hover": {
    background: color.background.toSecondary,
  },
};

export const selectedButton = {
  background: color.background.toSecondary,
};
