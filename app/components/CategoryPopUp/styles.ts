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
  top: 0,
  right: 0,

  display: "flex",
  flexDirection: "column" as const,
  gap: "1rem",

  width: "90vw",
  maxWidth: "400px",
  height: "100dvh",
  padding: "1.25rem",
  background: COLOR.BACKGROUND.STANDARD,

  borderLeft: "1px solid black",

  zIndex: 60,
};
