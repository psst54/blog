import { COLOR } from "~/constants/color";

export const tagListContainer = {
  display: "flex",
  gap: "0.25rem 0.4rem",
  flexWrap: "wrap" as const,
};

export const tagContainer = {
  maxWidth: "100%",
  padding: "0.2rem 0.75rem",
  background: COLOR.TEXT.SECONDARY,

  border: "none",
  borderRadius: "2rem",

  cursor: "pointer",

  "&:hover": {
    background: COLOR.PRIMARY.STANDARD,
    p: { filter: "none", color: COLOR.TEXT.REVERSE },
  },
};

export const tagText = {
  fontSize: "1rem",
  color: COLOR.TEXT.REVERSE,
  wordBreak: "keep-all" as const,
  overflow: "hidden",
  whiteSpace: "nowrap" as const,
  textOverflow: "ellipsis",
};

export const spoiler = {
  filter: "blur(0.25rem)",
};
