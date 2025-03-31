import { COLOR } from "~/constants/color";

export const textArea = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "0.5rem",

  overflow: "auto",
  zIndex: 1,
};

export const titleArea = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "0.25rem",
};

export const text = {
  color: COLOR.TEXT.REVERSE,
  fontSize: "1.25rem",
  wordBreak: "keep-all" as const,
};

export const subText = {
  ...text,
  fontSize: "1rem",
  color: COLOR.TEXT.LIGHT,
};
