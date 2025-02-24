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
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",

  width: "fit-content",
  background: "none",
  border: "none",
  outline: "none",
  cursor: "pointer",
};

export const ButtonDescriptionText = { fontSize: "1.25rem" };

export const CategorySlide = {
  position: "fixed" as const,
  top: "1rem",
  right: "1rem",

  display: "flex",
  flexDirection: "column" as const,
  gap: "1rem",

  width: "90dvw",
  maxWidth: "24rem",
  height: "calc(100dvh - 1rem - 1rem)",
  padding: "1.25rem",

  background: COLOR.PRIMARY.ULTRA_LIGHT + "B3",
  backdropFilter: "blur(3rem)",

  border: "1px solid white",
  borderRadius: "1rem",

  zIndex: 60,
};
