import { COLOR } from "~/constants/color";

export const container = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
};

export const noPostText = {
  textAlign: "center" as const,
  padding: "5rem 0",
  fontSize: "1.25rem",
  color: COLOR.TEXT.SECONDARY,
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
