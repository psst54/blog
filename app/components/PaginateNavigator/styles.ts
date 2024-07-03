import { COLOR } from "@constants/color";

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
  background: COLOR.SECONDARY.STANDARD,
};

export const numberButton = {
  ...button,

  "&:hover": {
    background: COLOR.BACKGROUND.TO_SECONDARY,
  },
};

export const selectedButton = {
  background: COLOR.BACKGROUND.TO_SECONDARY,
};
