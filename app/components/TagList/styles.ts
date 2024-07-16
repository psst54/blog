import { COLOR } from "~/constants/color";

export const tagListContainer = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: "1rem",
};

export const tagContainer = {
  display: "flex",
};

export const tagText = {
  color: COLOR.TEXT.SECONDARY,
};

export const spoiler = {
  filter: "blur(0.25rem)",

  "&:hover": {
    filter: "none",
  },
};
