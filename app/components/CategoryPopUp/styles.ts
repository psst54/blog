import { color } from "@styles/color";

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

  background: color.background.standard,
  borderWidth: "2px 0 2px 2px",
  borderStyle: "solid",
  borderColor: color.border.standard,
  borderRadius: "1rem 0 0 1rem",
  padding: "1.25rem",

  zIndex: 10,
};
