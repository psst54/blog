import { COLOR } from "~/constants/color";

export const tagListContainer = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: "0.5rem",
};

export const tagContainer = {
  padding: "0.1rem 0.75rem",
  border: `1px solid ${COLOR.PRIMARY.STANDARD}`,
  borderRadius: "2rem",
};

export const tagText = {
  color: COLOR.TEXT.TAG,
};

export const spoiler = {
  filter: "blur(0.25rem)",

  "&:hover": {
    filter: "none",
  },
};
