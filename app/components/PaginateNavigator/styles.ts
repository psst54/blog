import { COLOR } from "~/constants/color";

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
  background: COLOR.PRIMARY.STANDARD,
};

export const numberButton = {
  ...button,

  "&:hover": {
    background: COLOR.PRIMARY.ULTRA_LIGHT,
  },
};

export const selectedButton = {
  border: `1px solid ${COLOR.PRIMARY.VERY_LIGHT}`,
};
