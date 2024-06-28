import { COLOR } from "~/constants/color";

export const OpenButton = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",

  background: "transparent",
  border: "none",
  outline: "none",
  cursor: "pointer",
};

export const CloseButton = {
  background: "none",
  border: "none",
  outline: "none",
  cursor: "pointer",
};

export const ButtonDescriptionText = { fontSize: "1.25rem" };

export const CategorySlide = {
  position: "fixed" as const,
  width: "90vw",
  maxWidth: "400px",
  height: "100dvh",
  top: 0,
  right: 0,

  display: "flex",
  flexDirection: "column" as const,
  gap: "1rem",

  background: COLOR.BACKGROUND.STANDARD,
  padding: "1.25rem",

  borderLeft: "1px solid black",

  zIndex: 10,
};
