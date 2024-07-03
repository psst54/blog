import { COLOR } from "@constants/color";

export const tagListContainer = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: "0.25rem",
};

export const tagContainer = {
  padding: "0.1rem 0.75rem",
  background: COLOR.BORDER.DARK,

  border: `2px solid ${COLOR.BORDER.DARK}`,
  borderRadius: "2rem",

  color: COLOR.TEXT.REVERSE,
  fontWeight: 500,
};

export const tagText = {
  color: COLOR.TEXT.REVERSE,
};

export const spoiler = {
  filter: "blur(0.25rem)",

  "&:hover": {
    color: COLOR.TEXT.REVERSE,
    filter: "none",
  },
};
