import { COLOR } from "~/constants/color";

export const searchArea = {
  display: "flex",
  gap: "0.5rem",
  padding: "0.5rem 0",

  width: "100%",
};

export const input = {
  flex: 1,
  width: 0,

  padding: "0.25rem 1rem",
  borderRadius: "1.5rem",
  border: `1px solid ${COLOR.BORDER.STANDARD}`,

  fontSize: "1.25rem",

  "&:focus": {
    outline: `2px solid ${COLOR.BORDER.HIGHLIGHT}`,
  },
};

export const button = {
  background: COLOR.BACKGROUND.HIGHLIGHT,
  padding: "0.25rem 1rem",
  borderRadius: "1.5rem",
  fontSize: "1rem",
  color: COLOR.TEXT.REVERSE,

  border: "none",
  cursor: "pointer",
};
