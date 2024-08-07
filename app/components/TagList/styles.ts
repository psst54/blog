import { COLOR } from "@constants/color";

export const tagListContainer = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: "0.5rem",
};

export const tagContainer = {
  padding: "0.1rem 0.75rem",
  background: "transparent",
  border: `1px solid ${COLOR.PRIMARY.STANDARD}`,
  borderRadius: "2rem",

  cursor: "pointer",

  "&:hover": {
    p: { filter: "none" },
  },
};

export const tagText = {
  fontSize: "1rem",
  color: COLOR.TEXT.TAG,
};

export const spoiler = {
  filter: "blur(0.25rem)",
};
