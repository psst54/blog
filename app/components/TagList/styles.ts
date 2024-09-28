import { COLOR } from "@constants/color";

export const tagListContainer = {
  display: "flex",
  gap: "0.5rem",
  flexWrap: "wrap" as const,
};

export const tagContainer = {
  maxWidth: "100%",
  padding: "0.1rem 0.75rem",
  background: "transparent",

  border: `1px solid ${COLOR.PRIMARY.STANDARD}`,
  borderRadius: "2rem",

  cursor: "pointer",

  "&:hover": {
    background: COLOR.PRIMARY.STANDARD,
    p: { filter: "none", color: COLOR.TEXT.REVERSE },
  },
};

export const tagText = {
  fontSize: "1rem",
  color: COLOR.TEXT.TAG,
  wordBreak: "keep-all",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
};

export const spoiler = {
  filter: "blur(0.25rem)",
};
